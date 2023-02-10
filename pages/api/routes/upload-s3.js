import S3 from "aws-sdk/clients/s3";

const s3 = new S3({
  region: process.env.AWS_S3_REGION,
  accessKeyId: process.env.AWS_S3_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_S3_SECRET_ACCESS_KEY,
  signatureVersion: "v4",
});

export default async (req, res) => {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }
  try {
    let { name, type } = req.body;
    const bucket = process.env.AWS_S3_BUCKET_NAME;
    const fileParams = {
      Bucket: bucket,
      Key: name,
      Expires: 600,
      ContentType: type,
    };
    const url = await s3.getSignedUrlPromise("putObject", fileParams);
    res.status(200).json({ url, name, bucket });
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: err });
  }
};

export const config = {
  api: {
    bodyParser: {
      sizeLimit: "8mb", // Set desired value here
    },
  },
};