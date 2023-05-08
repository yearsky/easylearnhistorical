import { collection, query, where, getDocs } from "firebase/firestore";
import { app, database } from "../../../utils/firebaseConfig";

export default async function handler(req, res) {
  const articleCollection = collection(database, "buku");
  const q = query(articleCollection);

  const snapshot = await getDocs(q);

  let data = [];
  snapshot.forEach((doc) => {
    data.push({ id: doc.id, ...doc.data() });
  });

  res.status(200).json(data);
}
