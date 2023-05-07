import { database } from "../../../utils/firebaseConfig";
import { collection, doc, getDoc } from "firebase/firestore";

export default async function handler(req, res) {
  const { slug } = req.query;

  try {
    const articleRef = doc(database, "article", slug);
    const articleDoc = await getDoc(articleRef);

    if (articleDoc.exists()) {
      const article = articleDoc.data();
      res.status(200).json(article);
    } else {
      res.status(404).json({ message: "Article not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
}
