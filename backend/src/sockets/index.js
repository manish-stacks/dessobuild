const registerCoreHandlers = require('./core.socket');
const registerChatHandlers = require('./chat.socket');
const registerManualChatHandlers = require('./manualChat.socket');
const registerPresenceHandlers = require('./presence.socket');

module.exports = function registerSocketHandlers(io) {
  io.on('connection', (socket) => {
    console.log('Socket connected:', socket.id);

    const context = { io, socket };

    registerCoreHandlers(context);
    registerChatHandlers(context);
    registerManualChatHandlers(context);
    registerPresenceHandlers(context);

    // agar aur modules ho (call, typing indicator, etc.), yahi se attach kar sakte ho
  });
};
