import express from "express";

import { test, signOut, createId } from "../controllers/user";

const router = express.Router();

router.get("/test", test);
router.get("/signOut", signOut);
router.post("/", createId);

export { router as userRouter };
