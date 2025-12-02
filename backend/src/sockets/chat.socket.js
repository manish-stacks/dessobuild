// const Chat = require('../models/chatAndPayment.Model');
// const { update_profile_status } = require('../controllers/call.controller');

const MAX_FILE_SIZE = 5 * 1024 * 1024;
const PROHIBITED_PATTERNS = [
  /\b\d{10}\b/,
  /\b\d{3}[-.\s]?\d{3}[-.\s]?\d{4}\b/,
  /@[\w.-]+\.[a-zA-Z]{2,6}/,
  /\b18\+|adult\b/i,
];

function isMessageValid(text = '') {
  return !PROHIBITED_PATTERNS.some((re) => re.test(text));
}

module.exports = function registerChatHandlers({ io, socket }) {
  socket.on('message', async (data, cb) => {
    try {
      const { room, message, senderId, role, timestamp } = data;

      if (!isMessageValid(message)) {
        io.to(socket.id).emit('wrong_message', {
          message: 'Your message contains restricted content.',
        });
        return cb && cb({ success: false });
      }

      // TODO: yahan DB me Chat save karo (old logic from server.js)
      // await Chat.create({...})

      // presence / profile status update agar tum karte ho
      // await update_profile_status(...)

      io.in(room).emit('return_message', {
        room,
        message,
        senderId,
        role,
        timestamp: timestamp || new Date().toISOString(),
      });

      cb && cb({ success: true });
    } catch (err) {
      console.error('message error:', err);
      cb && cb({ success: false, message: 'Failed to send message' });
    }
  });

  socket.on('file_upload', async (data, cb) => {
    try {
      const { room, fileName, fileType, fileSize, fileUrl, senderId, role } = data;

      if (fileSize > MAX_FILE_SIZE) {
        return cb && cb({ success: false, message: 'File too large' });
      }

      // TODO: uploadToCloudinary ya jo bhi use kar rahe ho, aur Chat entry banao

      io.in(room).emit('file_message', {
        room,
        fileName,
        fileType,
        fileUrl,
        senderId,
        role,
        timestamp: new Date().toISOString(),
      });

      cb && cb({ success: true });
    } catch (err) {
      console.error('file_upload error:', err);
      cb && cb({ success: false, message: 'Failed to send file' });
    }
  });
};
