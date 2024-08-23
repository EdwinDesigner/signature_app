import { Router } from "express";
import { createSignature } from "../controllers/signature.controller.js";

const router = Router();

router.post("/", createSignature);

export default router;