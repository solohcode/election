import httpStatus from "http-status";
import router from "next-connect";
import { getLoggedInUser } from "../middleware/auth";
// const Agent = require("../models/user.model");
import multer from 'multer';
import importExcelData2MongoDB from "../services/ExcelFileImport";
import { createUser } from "../services/user.service";
// import { createUser } from "@/store/admin/action";
// import importExcelData2MongoDB from "../services/ExcelFileImport";

var storage = multer.diskStorage({  
  destination: (req, file, cb)=>{  
    cb(null,'./public/uploads');  
  },  
    filename:(req, file, cb)=>{  
    cb(null,file.originalname);  
  }  
});
var upload = multer({storage: storage});

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
    const loggedinUser = await getLoggedInUser(req.headers.authorization);
    if (loggedinUser.user_type !== 'admin')
      return res.json({ status: false, message: `Only admin can access this route` }); 
    next();
  }).use(upload.single("file"))
  .post(async (req, res) => {
    try {
      // const { body } = req;
      const result = await importExcelData2MongoDB('./public/uploads/' + req.file.filename);
      // console.log(result)
      result.agent.forEach(async(d) => {
        await createUser(d);
      })
      res.status(httpStatus.CREATED).send({ message: "New agent created", status: true});
    } catch (error) {
      res.send({ message: error.message, status: false});
    }
  })

  export default handler
  export const config = {
    api: {
      bodyParser: false, // Disallow body parsing, consume as stream
    },
  };