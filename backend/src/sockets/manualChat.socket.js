// Group/manual chat related socket events

module.exports = function registerManualChatHandlers({ io, socket }) {
  socket.on('manual_message', async (data, cb) => {
    try {
      const { room, message, senderId, role } = data;

      // TODO: validate, save to GroupChat model (if exists), update unread count, etc.

      io.in(room).emit('manual_return_message', {
        room,
        message,
        senderId,
        role,
        timestamp: new Date().toISOString(),
      });

      cb && cb({ success: true });
    } catch (err) {
      console.error('manual_message error:', err);
      cb && cb({ success: false, message: 'Failed' });
    }
  });

  socket.on('manual_file_upload', async (data, cb) => {
    try {
      const { room, fileUrl, fileName, fileType, senderId } = data;
      // TODO: save in DB

      io.in(room).emit('manual_file_message', {
        room,
        fileUrl,
        fileName,
        fileType,
        senderId,
        timestamp: new Date().toISOString(),
      });

      cb && cb({ success: true });
    } catch (err) {
      console.error('manual_file_upload error:', err);
      cb && cb({ success: false, message: 'Failed' });
    }
  });

  socket.on('manual_audio_upload', async (data, cb) => {
    try {
      const { room, audioUrl, senderId } = data;
      // TODO: save in DB

      io.in(room).emit('manual_audio_message', {
        room,
        audioUrl,
        senderId,
        timestamp: new Date().toISOString(),
      });

      cb && cb({ success: true });
    } catch (err) {
      console.error('manual_audio_upload error:', err);
      cb && cb({ success: false, message: 'Failed' });
    }
  });

  socket.on('manual_end_chat', async (data, cb) => {
    try {
      const { room, endedBy } = data;
      // TODO: update groupChat isEnded flag, time, etc.

      io.in(room).emit('manual_chat_ended', { room, endedBy });
      cb && cb({ success: true });
    } catch (err) {
      console.error('manual_end_chat error:', err);
      cb && cb({ success: false, message: 'Failed' });
    }
  });
};
