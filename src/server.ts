import express from 'express';
import { serverConfig } from './config';
import v1Router from './routers/v1/index.router';
import v2Router from './routers/v2/index.router';
import { appErrorHandler, genericErrorHandler } from './middlewares/error.middleware';
import logger from './config/logger.config';
import { attachCorrelationIdMiddleware } from './middlewares/correlation.middleware';
import cors from 'cors';
import cookieParser from "cookie-parser"

const app = express();
const corsOptions = {
     origin:'http://localhost:5173', 
     credentials:true,            //access-control-allow-credentials:true
     optionSuccessStatus:200
  };

app.use(cors(corsOptions));
// Source - https://stackoverflow.com/a/42062978
// Posted by izik f, modified by community. See post 'Timeline' for change history
// Retrieved 2026-10-27, License - CC BY-SA 4.0

app.use(cookieParser())
app.use(express.json());


/**
 * Registering all the routers and their corresponding routes with out app server object.
 */

// import { prisma } from "./lib/prisma";

// app.get("/",async(req,res)=>{

//         // Example: Fetch all records from a table
//         // Replace 'user' with your actual model name
        
//         const allUsers = await prisma.user.findMany({
//         }
//         );


//         res.send(`${JSON.stringify(allUsers)}`)

      
// })




app.use(attachCorrelationIdMiddleware);

app.use('/api/v1', v1Router);
app.use('/api/v2', v2Router); 


/**
 * Add the error handler middleware
 */

app.use(appErrorHandler);
app.use(genericErrorHandler);


app.listen(serverConfig.PORT, () => {
    logger.info(`Server is running on http://localhost:${serverConfig.PORT}`);
    logger.info(`Press Ctrl+C to stop the server.`);
});
