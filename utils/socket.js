export default (io, socket) => {
    const createdMessage = (msg) => {
      socket.broadcast.emit("moduleData", msg);
    };
  
    socket.on("createdMessage", createdMessage);
  };