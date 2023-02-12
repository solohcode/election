import httpStatus from "http-status";
import router from "next-connect";
import { getLoggedInUser } from "../middleware/auth";
const Party = require("../models/parties.model");

const handler = router({
  onError: (err, req, res, next) => {
    res.status(500).end(err.message);
  },
  onNoMatch: (req, res) => {
    res.status(404).end("Page is not found");
  },
})
  .use(async (req, res, next) => {
    if (!req.headers.authorization) return res.status(401).end("User not authorized");
    await getLoggedInUser(req.headers.authorization);
    await next();
  })
  .get(async (req, res) => {
    try {
      const data = await Party.find();
      res.send({data, status: true});
    } catch (error) {
      res.status(httpStatus.CREATED).send({ message: error.message, status: false});
    }
  });

  export default handler