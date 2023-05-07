import { collection, query, where, getDocs } from "firebase/firestore";
import { app, database } from "../../utils/firebaseConfig";

export default async function handler(req, res) {
  const moduleCollection = collection(database, "modules");
  const q = query(moduleCollection);

  const snapshot = await getDocs(q);

  let data = [];
  snapshot.forEach((doc) => {
    data.push({ id: doc.id, ...doc.data() });
  });

  res.status(200).json(data);
}
