//Multer S3 middleware

import multer from "multer";
import multerS3 from "multer-s3";
import { bucketName, s3Client } from "../config";

//the uploaded image file is uploaded to S3 bucket
export const uploadMiddlware = multer({
    storage: multerS3({
      s3: s3Client,
      bucket: bucketName,
      //acl: 'public-read',
      key: function (req: any, file: any, cb: any) {
        //the uploaded imageName will be renamed in below format
        const fileName = `productImage/${Date.now().toString()}-${
          file.originalname
        }`;


        console.log("Uploading file:", fileName);
        console.log("Bucket:", bucketName);
        cb(null, fileName);
      },
    }),
  });