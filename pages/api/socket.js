import SocketHandler from "./socketHandler";

export default function handler(req, res) {
  const { collectionName } = req.query;

  if (collectionName) {
    SocketHandler(req, res, collectionName);
  } else {
    res.status(400).send("Invalid collection name");
  }
}
