import httpStatus from "http-status";
import { createRouter } from "next-connect";
import { getLoggedInUser } from "../middleware/auth";
const Party = require("../models/parties.model");
const router = createRouter();

router
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

// create a handler from router with custom
// onError and onNoMatch
export default router.handler({
  onError: (err, req, res, next) => {
    res.status(500).end(err.message);
  },
  onNoMatch: (req, res) => {
    res.status(404).end("Page is not found");
  },
});