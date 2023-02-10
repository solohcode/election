import httpStatus from "http-status";
import { createRouter } from "next-connect";
import { getLoggedInUser } from "../middleware/auth";
const PollingUnit = require("../models/polling_units.model");
require("../models/states.model");
const router = createRouter();

router
  .use(async (req, res, next) => {
    if (!req.headers.authorization) return res.status(401).end("User not authorized");
    await getLoggedInUser(req.headers.authorization);
    await next();
  })
  .get(async (req, res) => {
    try {
      const { page = 1, limit = 10, type = null } = req.query;
      // {user_id: user.id, account_name: {$regex: search}}
      let data = null;
      if (type && type === 'all'){
        data = await PollingUnit.find()
        .sort({createdAt: -1})
        .populate('state');
      }else{
        data = await PollingUnit.find()
        .sort({createdAt: -1})
        .populate('state')
        .limit(limit * 1)
        .skip((page - 1) * limit);
      }
      const count = await PollingUnit.countDocuments();
      res.send({data, status: true, total: count, currentPage: page });
    } catch (error) {
      res.status(httpStatus.CREATED).send({ message: error.message, status: false});
    }
  })
  .post(async (req, res) => {
    try {
      const { body } = req;
      // const loggedinUser = await getLoggedInUser(req.headers.authorization);
      await PollingUnit.create(body);
      res.status(httpStatus.CREATED).send({ message: "New unit created", status: true});
    } catch (error) {
      res.send({ message: error.message, status: false});
    }
  })
  .put(
    async (req, res) => {
      try {
        const { id, status } = req.body;
        const filter = { _id: id };
        const update = { status };
        const data = await PollingUnit.findOneAndUpdate(filter, update, {
          new: true
        });
        return res.json({ data, status: true, message: `unit updated` });
      } catch (error) {
        return res.json({ status: false, message: error.message});
      }
    }
  )
  .delete(
    async (req, res) => {
      try {
        const { id } = req.body;
        const filter = { _id: id };
        await PollingUnit.findOneAndDelete(filter);
        return res.json({ status: true, message: `unit deleted successfully` });
      } catch (error) {
        return res.json({ status: false, message: error.message});
      }
    }
  );

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