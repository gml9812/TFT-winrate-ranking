import express from "express";

import { home, test1, test2 } from "../controllers/test";

const router = express.Router();

router.get("/", home);
router.get("/test1", test1);
router.get("/test2", test2);

export { router as testRouter };
