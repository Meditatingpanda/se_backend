import * as dotenv from 'dotenv';
dotenv.config();

export default  {
    MONGO_URI: process.env.MONGO_URI || 'mongodb://localhost/instagram',
    NODE:process.env.NODE_ENV || 'development',
    JWT_SECRET:process.env.JWT_SECRET||'somethingsecret'
}