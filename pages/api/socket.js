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
    const modulesRef = collection(firestore, "modules");
    const storage = getStorage();

    const unsubscribe = onSnapshot(
      modulesRef,
      async (snapshot) => {
        if (!snapshot.empty) {
          const modules = snapshot.docs.map((doc) => {
            const data = doc.data();
            const id = doc.id;
            return { id, ...data };
          });

          // Fetch storage files based on docId
          // const storageData = [];
          // for (const module of modules) {
          //   const docId = module.id;
          //   const fileName = module.file[0].ref;
          //   const moduleStorageRef = ref(storage, fileName);

          //   try {
          //     const downloadURL = await getDownloadURL(moduleStorageRef);
          //     storageData.push({ docId, downloadURL });
          //   } catch (error) {
          //     console.error(
          //       `Error getting download URL for docId '${docId}':`,
          //       error
          //     );
          //   }
          // }

          socket.emit("moduleData", modules);
        }
      },
      (error) => {
        console.error("Firestore snapshot error:", error);
      }
    );

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
