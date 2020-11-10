import dotenv from 'dotenv';
import { mongoose } from '../models';

dotenv.config();

const connectionString = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}/${process.env.DB}?retryWrites=true&w=majority`;
export const connectDb = () => {
    mongoose
    .connect(connectionString, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log("Successfully connect to MongoDB.");
        initializeDb();
    })
    .catch(err => {
        console.error("Connection error", err);
        process.exit();
    });
}

const initializeDb = () => {

};