import {v2 as cloudinary} from "cloudinary";
import dotenv from "dotenv";
dotenv.config();

cloudinary.config({
    cloud_name:"dwe5afy4r",
    api_key:762543142417586,
    api_secret:"ZKX9drodfcXLs-KN7vm4Wxj0teM"
});
export default cloudinary;
