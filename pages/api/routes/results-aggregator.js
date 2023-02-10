import httpStatus from "http-status";
import { createRouter } from "next-connect";
import { getLoggedInUser } from "../middleware/auth";
const Results = require("../models/election_result.model");
const PollingUnit = require("../models/polling_units.model");
const Party = require("../models/parties.model");
const Ward = require("../models/ward.model");
const router = createRouter();

router
  .use(async (req, res, next) => {
    if (!req.headers.authorization) return res.status(401).end("User not authorized");
    await getLoggedInUser(req.headers.authorization);
    await next();
  })
  .get(async (req, res) => {
    try {
      const {type = 'presidential', by = 'lagWest'} = req.query;
      const data = await Results.find({election_type: type})
      .populate('party').populate('polling_unit');
      const parties = await Party.find();
      let formatedResults = [];
      if(by === 'lagWest') {
        // const lga = [];
        // lga.forEach(lg => {
          // const filteredData = data.filter(el => el?.polling_unit?.local_govt === lg)
          const obj = {dist: "Lag West"};
          const total = {dist: "Total"};
          parties.forEach(element => {
            const filtered = data.filter(f => f?.party?.id === element?.id)
            const score = filtered.reduce((total, num) => Number(total) + Number(num.score), 0);
            obj[element.name] = score;
            let totalPartyScore = total[element.name];
            if (totalPartyScore) total[element.name] = totalPartyScore + score;
            else total[element.name] = score;
          });
          formatedResults.push(obj);
          formatedResults.push(total);
        // })
      } else if (by === 'lga') {
        const lga = ['Alimosho', 'Agege', 'Ajeromi/Ifelodun', 'Amuwo Odofin', 'Badagry', 'Ifako Ijaye', 'Ikeja', 'Mushin', 'Ojo', 'Oshodi Isolo'];
        const total = {lga: "Total"};
        lga.forEach(lg => {
          const obj = {lga: lg};
          const filteredData = data.filter(el => el?.polling_unit?.local_govt === lg)
          parties.forEach(element => {
            const filtered = filteredData.filter(f => f?.party?.id === element?.id)
            const score = filtered.reduce((total, num) => Number(total) + Number(num.score), 0);
            obj[element.name] = score;
            let totalPartyScore = total[element.name];
            if (totalPartyScore) total[element.name] = totalPartyScore + score;
            else total[element.name] = score;
          });
          formatedResults.push(obj);
        })
        formatedResults.push(total);
      } else if (by === 'ward'){
        const ward = await Ward.find();
        const total = {ward: "Total"};
        ward.forEach(w => {
          const obj = {ward: w.name};
          const filteredData = data.filter(el => el?.polling_unit?.ward === w.name)
          parties.forEach(element => {
            const filtered = filteredData.filter(f => f?.party?.id === element?.id)
            const score = filtered.reduce((total, num) => Number(total) + Number(num.score), 0);
            obj[element.name] = score;
            let totalPartyScore = total[element.name];
            if (totalPartyScore) total[element.name] = totalPartyScore + score;
            else total[element.name] = score;
          });
          formatedResults.push(obj);
        })
        formatedResults.push(total);

        // const pu = await PollingUnit.find()
        // pu.forEach(d => {
        //   const obj = {pu: d?.unit_name};
        //   const filteredData = data.filter(el => el?.polling_unit?.id === d?.id)
        //   parties.forEach(element => {
        //     const filtered = filteredData.filter(f => f?.party?.id === element?.id)
        //     const score = filtered.reduce((total, num) => Number(total) + Number(num.score), 0);
        //     obj[element.name] = score;
        //   });
        //   formatedResults.push(obj);
        // })
      } else if (by === 'pollingUnit') {
        // fetch all polling units
        const pu = await PollingUnit.find()
        const total = {pu: "Total"};
        formatedResults = pu.map(p => {
          let obj = {pu: p?.unit_name};
          const partyRes = parties.map(pa => {
            const filteredData = data.find(d => d?.polling_unit?.id === p?.id && d?.party.id === d?.id)
            const score = filteredData?.score || 0;
            let totalPartyScore = total[pa.name];
            if (totalPartyScore) total[pa.name] = totalPartyScore + score;
            else total[pa.name] = score;
            return obj[pa.name] = score;
          })
          partyRes.forEach((e) => {
              const ff = Object(e);
              const keys = Object.keys(ff);
              const values = Object.values(ff);
              obj[keys[0]] = values[0];
          })
          return obj
        })
        formatedResults.push(total);
        // [
        //   {pu:"name", Apc:30, Pdp:28},
        //   {pu:"name", Apc:30, Pdp:28},
        //   {pu:"name", Apc:30, Pdp:28}
        // ]
        // pu.forEach(d => {
        //   const obj = {pu: d?.unit_name};
        //   parties.forEach(el => {
        //     const filteredData = data.find(el => el?.polling_unit?.id === d?.id && el?.party.id === el?.id)
        //     // const filtered = filteredData.filter(f => f?.party?.id === el?.id)
        //     // const score = filtered.reduce((total, num) => Number(total) + Number(num.score), 0);
        //     const score = filteredData?.score || 0;
        //     obj[el.name] = score;
        //     let totalPartyScore = total[el.name];
        //     if (totalPartyScore) total[el.name] = totalPartyScore + score;
        //     else total[el.name] = score;
        //   });
        // })
        // formatedResults.push(obj);
        // formatedResults.push(total);
      }
      res.send({data: formatedResults, status: true});
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