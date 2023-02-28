import httpStatus from "http-status";
import router from "next-connect";
import { getLoggedInUser } from "../middleware/auth";
const Report = require("../models/report.model");
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
  .post(
    async (req, res) => {
    try {
      const {
        title,
        short_description,
        details,
        image1,
        image2
      } = req.body;
      const user = await getLoggedInUser(req.headers.authorization);
      await Report.create({
        title,
        short_description,
        details,
        reporter: user.id,
        image1,
        image2
      });
      res.status(httpStatus.CREATED).send({ message: "New report created", status: true});
    } catch (error) {
      res.send({ message: error.message, status: false});
    }
    }
  )
  .put(
    async (req, res) => {
      try {
        const { id, short_description, title, details } = req.body;
        const filter = { _id: id };
        const update = { short_description, title, details };
        const data = await Report.findOneAndUpdate(filter, update, {
          new: true
        });
        // console.log(data)
        return res.json({ data, status: true, message: `voters register updated` });
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
        await Report.findOneAndDelete(filter);
        return res.json({ status: true, message: `report deleted successfully` });
      } catch (error) {
        return res.json({ status: false, message: error.message});
      }
    }
  )
  .get(
    async (req, res) => {
      try {
        const {page = 1, limit = 10} = req.query;
        const result = await Report.find()
        .limit(limit * 1)
        .skip((page - 1) * limit);
        const count = await Report.countDocuments();
        res.send({
          message: 'All polling unit report',
          status: true,
          data: result,
          total: count,
          currentPage: page
        });
      } catch (error) {
        res.status(httpStatus.CREATED).send({ message: error.message, status: false});
      }
    }
  );

  export default handler