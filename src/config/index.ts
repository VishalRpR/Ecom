// This file contains all the basic configuration logic for the app server to work
import dotenv from 'dotenv';

type ServerConfig = {
    PORT: number
}

type DbConfig = {
    DATABASE_URL: string
}

function loadEnv() {
    dotenv.config();
    console.log(`Environment variables loaded`);
}

loadEnv();
export const dbConfig: DbConfig = {
    DATABASE_URL: String(process.env.DATABASE_URL)
}

export const serverConfig: ServerConfig = {
    PORT: Number(process.env.PORT) || 3001
};


import { S3Client } from "@aws-sdk/client-s3";

export const s3Client = new S3Client({
  region: String(process.env.AWS_REGION),
  credentials: {
    accessKeyId: String(process.env.AWS_ACCESS_KEY),
    secretAccessKey: String(process.env.AWS_SECRET_KEY),
  },
});

export const bucketName = String(process.env.AWS_BUCKET_NAME)

