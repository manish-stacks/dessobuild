const http = require('http');
const { Server } = require('socket.io');
const app = require('./app');
const registerSocketHandlers = require('./sockets');

const PORT = process.env.PORT || 9123;

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: (origin, cb) => cb(null, origin || true),
    methods: ['GET', 'POST'],
    credentials: true,
  },
  maxHttpBufferSize: 5 * 1024 * 1024,
});

registerSocketHandlers(io);

server.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`);
});
