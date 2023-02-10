import { generateAuthTokens } from "../services/token.service";
import { loginUser } from "../services/user.service";
import connectMongo from "../utils/mongo-connect";

export default async(req, res) => {
  await connectMongo();
  const { method } = req;

  switch (method) {
    case "POST":
      try {
        const { email, password } = req.body;
        const user = await loginUser(email, password);
        const tokens = await generateAuthTokens(user);
        res.send({ message: "user logged in successfully", user, tokens, status: true });
      } catch (error) {
        res.send({ message: error.message, status: false});
      }
      break;
    default:
      res.status(404).json({ message: "Route Not found" });
  }
}