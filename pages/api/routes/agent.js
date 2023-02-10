import httpStatus from "http-status";
import { createRouter } from "next-connect";
import { getLoggedInUser } from "../middleware/auth";
const Agent = require("../models/user.model");
const router = createRouter();

router
  .use(async (req, res, next) => {
    if (!req.headers.authorization) return res.status(401).end("User not authorized");
    const loggedinUser = await getLoggedInUser(req.headers.authorization);
    if (loggedinUser.user_type !== 'admin')
      return res.json({ status: false, message: `Only admin can access this route` }); 
    await next();
  })
  .get(async (req, res) => {
    try {
      const { page = 1, limit = 10, search=''  } = req.query;
      const data = await Agent.find({user_type: 'agent'})
      .sort({createdAt: -1})
      .populate('polling_unit')
      .limit(limit * 1)
      .skip((page - 1) * limit);
      const count = await Agent.countDocuments();
      res.send({data, status: true, total: count, currentPage: page });
    } catch (error) {
      res.status(httpStatus.CREATED).send({ message: error.message, status: false});
    }
  })
  .post(async (req, res) => {
    try {
      const { body } = req;
      await Agent.create({...body, user_type: 'agent'});
      res.status(httpStatus.CREATED).send({ message: "New agent created", status: true});
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
        const data = await Agent.findOneAndUpdate(filter, update, {
          new: true
        });
        return res.json({ data, status: true, message: `agent updated successfully` });
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
        await Agent.findOneAndDelete(filter);
        return res.json({ status: true, message: `agent deleted successfully` });
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