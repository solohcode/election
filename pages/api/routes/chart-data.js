import { createRouter } from "next-connect";
import { getLoggedInUser } from "../middleware/auth";
const Results = require("../models/election_result.model");
const Party = require("../models/parties.model");
require("../models/polling_units.model");
require("../models/parties.model");
const router = createRouter();

router
  .use(async (req, res, next) => {
    await next();
  })
  .get(async (req, res) => {
    try {
      // const {type = 'presidential'} = req.query;
      const parties = await Party.find();
      const pres = await Results.find({election_type: 'presidential'})
      // const gov = await Results.find({election_type: 'governor'})
      // const sen = await Results.find({election_type: 'senator'})
      // const rep = await Results.find({election_type: 'representative'})
      // const ass = await Results.find({election_type: 'assembly'})
      // .populate('party').populate('polling_unit');
      let grandTotalPres = 0
      const result1 = parties.map(e => {
        let totalScore = 0;
        pres.forEach((p) => {
          if(e.logo === p.party.logo){
            totalScore += Number(p.score);
          }
        });
        grandTotal += totalScore
        return totalScore
      });
      const sortablePres = result1.sort((a, b) => b - a).slice(0,2);
      const leadingPres = sortablePres.reduce((x, y) => x+y, 0)
      const chart = {
        pres: [...sortablePres, grandTotalPres - leadingPres],
        gov: [...sortablePres, grandTotalPres - leadingPres],
        sen: [...sortablePres, grandTotalPres - leadingPres],
        rep: [...sortablePres, grandTotalPres - leadingPres],
        ass: [...sortablePres, grandTotalPres - leadingPres],
      }
      res.send({
        data: chart,
        status: true
      });
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