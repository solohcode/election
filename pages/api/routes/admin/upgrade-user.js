import { createRouter } from "next-connect";
import { getLoggedInUser } from "../../middleware/auth";
// import passport from "passport";
const User = require("../../models/user.model");
const router = createRouter();

router
  .use(async (req, res, next) => {
    if (!req.headers.authorization) return res.status(401).end("User not authorized");
    const loggedinUser = await getLoggedInUser(req.headers.authorization);
    if (loggedinUser.user_type !== 'admin')
      return res.json({ status: false, message: `Only admin can access this route` }); 
    await next();
  })
  .put(
    async (req, res) => {
      try {
        const loggedinUser = await getLoggedInUser(req.headers.authorization);
        const { id, user_type} = req.body;
        let ref = {}
        if (user_type === 'admin') ref = {refferal_id: null}
        if (user_type === 'agent') ref = {refferal_id: loggedinUser.id}
        const filter = { _id: id };
        const update = { user_type, ...ref };
        const user = await User.findOneAndUpdate(filter, update, {
          new: true
        });
        return res.json({ user, status: true, message: `this user has been upgraded to ${user_type}` });
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