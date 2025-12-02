const {
  userConnections,
  providerConnections,
  roomMemberships,
  activeTimers,
  inactivityTimers,
  providerConnectedByRoom,
} = require('./state');

module.exports = function registerPresenceHandlers({ io, socket }) {
  socket.on('provider_connected', ({ room, providerId }) => {
    providerConnectedByRoom.set(room, true);
    io.in(room).emit('provider_status', { room, providerId, status: 'online' });
  });

  socket.on('end_chat', async (data, cb) => {
    try {
      const { room, endedBy } = data;

      // TODO: yahan tumhara old billing/coin cut/end_chat ka logic
      io.in(room).emit('chat_ended', { room, endedBy });

      if (activeTimers.has(room)) clearTimeout(activeTimers.get(room));
      if (inactivityTimers.has(room)) clearTimeout(inactivityTimers.get(room));

      cb && cb({ success: true });
    } catch (err) {
      console.error('end_chat error:', err);
      cb && cb({ success: false, message: 'Failed' });
    }
  });

  socket.on('disconnect', () => {
    try {
      console.log('Socket disconnected:', socket.id);
      // TODO: userConnections/providerConnections se remove karo, optionally rooms nikaalo, status emit karo
    } catch (err) {
      console.error('disconnect handler error:', err);
    }
  });
};
