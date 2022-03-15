import type { NextApiRequest, NextApiResponse } from 'next';
import { requests } from '../../../utils';

type Data = {
  name: string;
};

interface UserInfo {
  summonerId: string;
  summonerName: string;
  leaguePoints: number;
}

const header = {
  'User-Agent':
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.51 Safari/537.36',
  'Accept-Language': 'ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7,ja;q=0.6',
  'Accept-Charset': 'application/x-www-form-urlencoded; charset=UTF-8',
  Origin: 'https://developer.riotgames.com',
  'X-Riot-Token': 'RGAPI-18e353ba-86f6-41eb-a4e6-ff4550018c6a',
};

const patchVersion = `Version 12.5.425.9171 (Feb 25 2022/17:50:27) [PUBLIC] <Releases/12.5>`;

// 300(kr챌 수) x 20(최근게임수) = 6000회

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const krChallenger = await requests(
    `https://kr.api.riotgames.com/tft/league/v1/challenger`,
    header,
  );

  /*
  const summonerId = krChallenger.entries[0].summonerId;

  const response = await fetch(`http://localhost:3000/api/win-rate/${summonerId}`);
  const placements = await response.json();
  */

  const krChallengerEntries = krChallenger.entries.slice(0, 3);

  console.log(krChallengerEntries);

  const placements = await Promise.all(
    krChallengerEntries.map((challenger: { summonerId: string }) => {
      return fetch(`http://localhost:3000/api/win-rate/${challenger.summonerId}`);
      /*
      return async () => {
        const response = await fetch(`http://localhost:3000/api/win-rate/${challenger.summonerId}`);
        return await response.json();
      };
      */
    }),
  );

  const test = await placements[0].json();

  if (req.method === 'GET') res.status(200).json(test);
}
