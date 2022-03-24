import type { NextApiRequest, NextApiResponse } from 'next';
import { requests } from '../../../utils';
import { API } from '../../../commons';

interface Data {
  name: string;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const krChallenger = await requests(
    `https://kr.api.riotgames.com/tft/league/v1/challenger`,
    API.HEADER,
  );

  const krChallengerEntries = krChallenger.entries;

  if (req.method === 'GET') res.status(200).json(krChallengerEntries);
}
