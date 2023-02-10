import { createRouter } from "next-connect";
import { getLoggedInUser } from "../middleware/auth";
const Results = require("../models/election_result.model");
const Party = require("../models/parties.model");
require("../models/polling_units.model");
require("../models/parties.model");
const router = createRouter();

router
  .use(async (req, res, next) => {
    if (!req.headers.authorization) return res.status(401).end("User not authorized");
    await getLoggedInUser(req.headers.authorization);
    await next();
  })
  .post(
    async (req, res) => {
      try {
        const { body } = req;
        const user = await getLoggedInUser(req.headers.authorization);
        const checkResult = await Results.find({user: user.id, election_type: body[0].election_type});
        if(checkResult.length) {
          return res.json({status: false, message: 'you have already submit result for this election type'});
        }else{
          await Results.create(body);
          return res.json({status: true, message: 'result created'});
        }
      } catch (error) {
        return res.json({ status: false, message: error.message});
      }
    }
  )
  .get(async (req, res) => {
    try {
      const {type = 'presidential'} = req.query;
      const parties = await Party.find();
      const pres = await Results.find({election_type: type})
      .populate('party').populate('polling_unit');
      let grandTotal = 0
      const result = parties.map(e => {
        let totalScore = 0;
        pres.forEach((p) => {
          if(e.logo === p.party.logo){
            totalScore += Number(p.score);
          }
        });
        grandTotal += totalScore
        return {
          logo: e.logo,
          name: e.name,
          slogan : e.slogan,
          totalScore
        };
      });
      // console.log(result)
      const sortable = result.sort((a, b) => b.totalScore - a.totalScore);
      res.send({data: {data: sortable, grandTotal}, status: true});
    } catch (error) {
      res.status(500).send({ message: error.message, status: false});
    }
  })

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