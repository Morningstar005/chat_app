import express from "express";
import { login, logout, signup } from "../controller/auth.controller.js";
const router = express.Router();

router.post("/signup",signup)
router.post("/login",login)
router.post("/loginOut",logout)
export default router;