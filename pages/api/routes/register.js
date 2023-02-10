import { createUser } from "../services/user.service";
import connectMongo from "../utils/mongo-connect";
import httpStatus from "http-status";

const register = async (req, res) => {
  await connectMongo();
  const { method } = req;
  switch (method) {
    case "POST":
      try {
        const { body } = req
        await createUser(body);
        res.status(httpStatus.CREATED).send({ message: "User account created", status: true});
      } catch (error) {
        res.send({ message: error.message, status: false});
      }
      break;
    default:
      res.status(404).json({ message: "Route Not found" });
  }
}

export default register;