import { Server } from 'socket.io';

let io: Server | null = null;

export function getSocketServer() {
  if (io) return io;
  io = new Server({
    cors: {
      origin: process.env.PUBLIC_APP_URL ?? '*'
    }
  });
  return io;
}
