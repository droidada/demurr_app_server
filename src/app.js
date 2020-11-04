import fs from 'fs';
import path from 'path';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import winston from 'winston';
import morgan from 'morgan';
import helmet from 'helmet';
import dotenv from 'dotenv';
import { graphqlHTTP } from 'express-graphql';
import jwt from 'jsonwebtoken';
// import schema from './schema';
import { connectDb } from './util/db.util';
import userRoutes from './routes/user.routes';

dotenv.config();

const app = express();
//app.use(helmet());
app.use(cors({origin: "*"}));
app.use(bodyParser.urlencoded({'extended':'true'}));
app.use(bodyParser.json());                                    
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

connectDb();
//app.use(morgan('combined', { stream: winston.stream }));

// app.use('/auth',authRoutes);
 app.use('/user',userRoutes);

// app.use('/graphql', graphqlHTTP(req => ({
//   schema: schema,
//   graphiql: true,
//   context: {
//     token: req.headers.authorization || ''
//   },
//   customFormatErrorFn: ((err) => {
//     return {
//       code: err?.originalError?.response?.status,
//       message: err?.originalError?.response?.data || err?.message,
//       locations: err?.locations,
//       path: err?.path
//     }
//   }),
// })));

const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`GATEWAY LISTENING ON PORT ${PORT}`);
})
