import { findUser } from "../../modules/database/schema/challengerUser";

export const topPlayers = async (req, res) => {
  const [, topPlayerList] = await findUser({});
  topPlayerList.sort((a, b) => a.averagePlacement - b.averagePlacement);
  res.json({
    topPlayerList,
  });
};
