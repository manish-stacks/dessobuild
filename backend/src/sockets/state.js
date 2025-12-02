// Shared in-memory maps
const userConnections = new Map();          // userId -> socketId
const providerConnections = new Map();      // providerId -> socketId
const roomMemberships = new Map();          // room -> { userId, astrologerId, role, ... }

const activeTimers = new Map();             // room -> timer
const inactivityTimers = new Map();         // room -> timer

const providerConnectedByRoom = new Map();  // room -> boolean (provider joined?)
const chatStartTimestamps = new Map();      // room -> Date
const roomChatInfo = new Map();             // room -> meta data (coins, etc.)

module.exports = {
  userConnections,
  providerConnections,
  roomMemberships,
  activeTimers,
  inactivityTimers,
  providerConnectedByRoom,
  chatStartTimestamps,
  roomChatInfo,
};
