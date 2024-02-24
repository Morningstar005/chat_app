import express from "express"
import {getMessage, sendMessage} from "../controller/Message.Controller.js"
import protectRoute from "../middleware/protectedRoute.js";
const router = express.Router();

router.post("/send/:id",protectRoute,sendMessage);
router.get("/:id",protectRoute,getMessage);

export default router;