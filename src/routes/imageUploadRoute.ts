import express from "express";
const router = express.Router();
import {
  cloudinaryUploadImage,
  s3UploadImage,
} from "../controllers/imageUploadController.js";

router.post("/image-upload-cloudinary", cloudinaryUploadImage);
router.post("/image-upload-s3", s3UploadImage);

export default router;
