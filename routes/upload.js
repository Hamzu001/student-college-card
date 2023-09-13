const express = require("express");
const router = express.Router();
const multer = require("multer");
const {
  S3Client,
  PutObjectCommand,
  GetObjectCommand,
} = require("@aws-sdk/client-s3");
const { getSignedUrl } = require("@aws-sdk/s3-request-presigner");

const bucketName = process.env.BUCKET_NAME
const bucketRegion = process.env.AWS_REGION
const accessKey = process.env.AWS_ACCESS_KEY_ID
const secretKey = process.env.AWS_SECRET_ACCESS_KEY
const sessionT = process.env.AWS_SESSION_TOKEN

const s3 = new S3Client({
  region: bucketRegion,
  credentials: {
    accessKeyId: accessKey,
    secretAccessKey: secretKey,
    sessionToken: sessionT,
  },
});

const storage = multer.memoryStorage();
const upload = multer({ storage });

router.post("/", upload.single("file"), async (req, res) => {
  //   console.log({ "req.body": req.body });
  //   console.log({ "req.file": req.file });
  // req.file.buffer
  try {
    const command = new PutObjectCommand({
      Bucket: bucketName,
      Key: req.file.originalname,
      Body: req.file.buffer,
      ContentType: req.file.mimetype,
    });
    await s3.send(command);
    // get it back
    let getUrl = new GetObjectCommand({
      Bucket: bucketName,
      Key: req.file.originalname,
    });

    const url = await getSignedUrl(s3, getUrl, { expiresIn: 3600 });
    //   console.log({imageUrl: url});
    res.send({ imageUrl: url });
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
