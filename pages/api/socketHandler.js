// socketHandler.js

import { Server } from "socket.io";
import {
  getFirestore,
  collection,
  getDocs,
  onSnapshot,
} from "firebase/firestore";
import { getStorage, ref, listAll, getDownloadURL } from "firebase/storage";
import { app } from "../../utils/firebaseConfig";

export default function SocketHandler(req, res) {
  // It means that the socket server was already initialized
  if (res.socket.server.io) {
    console.log("Already set up");
    res.end();
    return;
  }

  const io = new Server(res.socket.server);
  res.socket.server.io = io;

  const onConnection = async (socket) => {
    const firestore = getFirestore(app);
    const storage = getStorage();

    socket.on("subscribe", async (collectionName) => {
      const modulesRef = collection(firestore, collectionName);

      const unsubscribe = onSnapshot(
        modulesRef,
        async (snapshot) => {
          if (!snapshot.empty) {
            const modules = snapshot.docs.map((doc) => {
              const data = doc.data();
              const id = doc.id;
              return { id, ...data };
            });
            socket.emit("moduleData", { collectionName, modules });
          }
        },
        (error) => {
          console.error("Firestore snapshot error:", error);
        }
      );

      // Unsubscribe from the snapshot listener when the socket connection is closed or unsubscribed
      socket.on("disconnect", () => {
        unsubscribe();
      });
      socket.on("unsubscribe", () => {
        unsubscribe();
      });
    });
  };

  // Define actions inside
  io.on("connection", onConnection);

  console.log("Setting up socket");
  res.end();
}
