import { Router } from "express";
import multer from "multer";
import { createSignature } from "../controllers/signature.controller.js";

const router = Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, file.fieldname + '-' + uniqueSuffix + '.' + file.originalname.split('.').pop())
  }
})

const upload = multer({ storage: storage })

// const cpUpload = upload.fields([{ name: 'xml', maxCount: 1 }, { name: 'signature', maxCount: 1 }])
router.post("/", createSignature);

export default router;