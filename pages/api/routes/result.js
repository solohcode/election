import httpStatus from "http-status";
import router from "next-connect";
import { getLoggedInUser } from "../middleware/auth";
const Result = require("../models/election_result.model");
require("../models/polling_units.model");
require("../models/parties.model");

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
    next();
  })
  .get(async (req, res) => {
    try {
      const {type = 'presidential', page = 1, limit = 10} = req.query;
      const result = await Result.find({election_type: type})
      .populate('polling_unit')
      .limit(limit * 1)
      .skip((page - 1) * limit);
      const count = await Result.countDocuments();
      res.send({
        message: 'All polling unit result',
        status: true,
        data: result,
        total: count,
        currentPage: page
      });
    } catch (error) {
      res.status(httpStatus.CREATED).send({ message: error.message, status: false});
    }
  });

  export default handler