import type { NextApiRequest, NextApiResponse } from 'next';
import { requests } from '../../../utils';
import { API } from '../../../commons';

interface UserInfo {
  summonerId: string;
  summonerName: string;
  leaguePoints: number;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<number[]>) {
  const { summonerId } = req.query;

  const summonerInfo = await requests(
    `https://kr.api.riotgames.com/tft/summoner/v1/summoners/${summonerId}`,
    API.HEADER,
  );

  const summonerPuuid = summonerInfo.puuid;

  const matchNames = await requests(
    `https://asia.api.riotgames.com/tft/match/v1/matches/by-puuid/${summonerPuuid}/ids?count=20`,
    API.HEADER,
  );

  const matchDatas = await Promise.all(
    matchNames.map((match: string) => {
      return requests(`https://asia.api.riotgames.com/tft/match/v1/matches/${match}`, API.HEADER);
    }),
  );

  const placements = matchDatas.map((matchData) => {
    if (matchData.info.game_version !== API.CURRENT_PATCH_VERSION) return 'x';

    const place = matchData.info.participants.filter(
      (participant: { puuid: number }) => participant.puuid === summonerPuuid,
    );

    return place[0].placement;
  });

  if (req.method === 'GET') res.status(200).json(placements);
}
