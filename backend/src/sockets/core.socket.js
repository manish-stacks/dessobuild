const {
  userConnections,
  providerConnections,
  roomMemberships,
  activeTimers,
  inactivityTimers,
  providerConnectedByRoom,
  chatStartTimestamps,
  roomChatInfo,
} = require('./state');

// yahan tumhare controller / model import aayenge
// const Chat = require('../models/chatAndPayment.Model');
// const { chatStart, chatStartFromProvider, changeAvailableStatus } = require('../controllers/user.Controller');
// const { update_profile_status } = require('../controllers/call.controller');

const TIMEOUT_DURATION = 60 * 1000; // example

function setupInactivityTimer(io, room) {
  if (inactivityTimers.has(room)) clearTimeout(inactivityTimers.get(room));

  const t = setTimeout(() => {
    io.in(room).emit('inactivity_notice', {
      message: 'There has been no activity in this chat for 1 minute.',
    });
  }, 60 * 1000);

  inactivityTimers.set(room, t);
}

module.exports = function registerCoreHandlers({ io, socket }) {
  socket.on('send_socket_id', ({ socketId, role, userId }) => {
    try {
      if (role === 'user') userConnections.set(userId, socketId);
      if (role === 'provider') providerConnections.set(userId, socketId);
      console.log('send_socket_id', { role, userId, socketId });
    } catch (err) {
      console.error('send_socket_id error:', err);
    }
  });

  socket.on('join_room', async (data, cb) => {
    try {
      const { room, userId, astrologerId, role } = data; // adjust according to your old code
      socket.join(room);

      roomMemberships.set(room, {
        ...(roomMemberships.get(room) || {}),
        userId,
        astrologerId,
        role,
      });

      setupInactivityTimer(io, room);
      chatStartTimestamps.set(room, new Date());

      // TODO: yahan tum apna pura old "chatStart / chatStartFromProvider / coin cut / etc."
      // logic copy-paste kar sakte ho server.js se.

      io.in(room).emit('user_status', { room, status: 'joined', userId, astrologerId });

      cb && cb({ success: true, room });
    } catch (err) {
      console.error('join_room error:', err);
      cb && cb({ success: false, message: 'Failed to join room' });
    }
  });

  socket.on('join_manual_room', async (data, cb) => {
    try {
      const { room, userId, providerIds = [] } = data;
      socket.join(room);

      roomMemberships.set(room, {
        ...(roomMemberships.get(room) || {}),
        room,
        userId,
        providerIds,
        isManual: true,
      });

      setupInactivityTimer(io, room);
      io.in(room).emit('manual_room_joined', { room, userId, providerIds });

      cb && cb({ success: true, room });
    } catch (err) {
      console.error('join_manual_room error:', err);
      cb && cb({ success: false, message: 'Failed to join manual room' });
    }
  });
};
