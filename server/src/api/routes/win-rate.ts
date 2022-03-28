import express from "express";

import { topPlayers } from "../controllers/win-rate";

const router = express.Router();

router.get("/top-players", topPlayers);

export { router as winRateRouter };
