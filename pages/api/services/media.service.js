import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";

const s3Client = new S3Client({
  region: process.env.AWS_S3_REGION,
  credentials: {
    accessKeyId: process.env.AWS_S3_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_S3_SECRET_ACCESS_KEY,
  }
});


const createUrl = (s3Bucket, itemKey) => `https://${s3Bucket}.s3.us-west-2.amazonaws.com/${itemKey}`;

export const uploadS3Buckect = async (img, key, type) => {
  try {
    const params = {
      Body: img,
      Key: key,
      ACL: "public-read",
      ContentType: type,
      Bucket: process.env.AWS_S3_BUCKET_NAME,
    };
    await s3Client.send(new PutObjectCommand(params));
    const result = createUrl(params.Bucket, params.Key);
    return result
  } catch (error) {
    console.log(error?.message)
    return false
  }  
}

// const bucket = process.env.AWS_S3_BUCKET_NAME;
//     const fileParams = {
//       Bucket: bucket,
//       Key: name,
//       Expires: 600,
//       ContentType: type,
//     };
//     const url = await s3.getSignedUrlPromise("putObject", fileParams);
//     res.status(200).json({ url, name, bucket });