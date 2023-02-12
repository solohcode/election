import httpStatus from "http-status";
import router from "next-connect";
import { getLoggedInUser } from "../middleware/auth";
const User = require("../models/user.model");
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
  .put(
    async (req, res) => {
      try {
        const { ward, memberId, pvc, gender, photo, dob, phone, polling_unit } = req.body;
        const user = await getLoggedInUser(req.headers.authorization);
        const result = await User.update(
          {id : user.id},
          {$set: { ward, memberId, pvc, gender, photo, dob, polling_unit, isUserUpdate: true, phone }
        });
        if(!result) return res.json({ status: false, message: "user data update failed"})
        return res.json({ status: true, message: "user data updated successfully"})
      } catch (error) {
        return res.json({ status: false, message: error.message});
      }
    }
  )
  .get(async (req, res) => {
    try {
      const user = await getLoggedInUser(req.headers.authorization);
      const result = await User.findOne({_id: user.id})
      if (!result?.isUserUpdate) return res.json({ status: false, message: "user data not yet updated"})
      res.send({message: 'user data is updated', status: true});
    } catch (error) {
      res.status(httpStatus.CREATED).send({ message: error.message, status: false});
    }
  });

  export default handler