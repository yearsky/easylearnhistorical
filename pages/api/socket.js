import { Server } from "socket.io";
import { getFirestore, collection, getDocs,onSnapshot } from "firebase/firestore";
import { app } from '../../utils/firebaseConfig';

export default function SocketHandler(req, res) {
  // It means that the socket server was already initialized
  if (res.socket.server.io) {
    console.log("Already set up");
    res.end();
    return;
  }

  const io = new Server(res.socket.server);
  res.socket.server.io = io;

  const onConnection = (socket) => {
    const firestore = getFirestore(app);
    const modulesRef = collection(firestore, "modules");

    // console.log(modulesRef);

    const unsubscribe = onSnapshot(modulesRef, (snapshot) => {
      if (!snapshot.empty) {
        const modules = snapshot.docs.map((doc) => doc.data());
        // console.log(modules);
        socket.emit("moduleData", modules);
        // socket.on("moduleData",modules);
      }
    }, (error) => {
      console.error("Firestore snapshot error:", error);
    });

    // Unsubscribe from the snapshot listener when the socket connection is closed
    socket.on("disconnect", () => {
      unsubscribe();
    });
  };

  // Define actions inside
  io.on("connection", onConnection);

  console.log("Setting up socket");
  res.end();
}
