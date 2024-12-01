import { v2 as cloudinary } from 'cloudinary';
import dotenv from 'dotenv';
dotenv.config();

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,  // Cloudinary cloud name
    api_key: process.env.CLOUDINARY_API_KEY,       // Cloudinary API key
    api_secret: process.env.CLOUDINARY_API_SECRET  // Cloudinary API secret
});

export default cloudinary;