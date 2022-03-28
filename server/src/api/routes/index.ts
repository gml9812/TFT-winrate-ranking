import express from "express";

import { winRateRouter } from "./win-rate";

const router = express.Router();

router.use("/win-rate", winRateRouter);

export { router as routes };
