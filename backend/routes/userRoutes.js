import express from "express";
import protectRoute from "../middleware/protectedRoute.js";
import { getUsersForSideBar } from "../controller/user.controller.js";

const router  = express.Router();

router.get("/",protectRoute,getUsersForSideBar);


export default router;

