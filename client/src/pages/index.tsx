import { useState, useEffect } from 'react';
import { requests } from '../utils';
import { API } from '../commons';
import { DATA } from '../mockDataBase';

// 100초마다 API에 POST 날린다. POST받은 API는 db 업데이트한다.

interface HomePageProps {
  posts: {
    summonerName: string;
    averagePlacement: number;
  }[];
}

const Home = ({ posts }: HomePageProps) => {
  return (
    <div>
      {posts.map((post, index) => {
        return (
          <div key={index}>
            {post.summonerName}
            {post.averagePlacement}
          </div>
        );
      })}
    </div>
  );
};

export async function getStaticProps() {
  console.log(DATA.INDEX);
  // 전체 challenger 리스트 받아오기
  const krChallenger = await requests(
    `https://kr.api.riotgames.com/tft/league/v1/challenger`,
    API.HEADER,
  );
  const krChallengerEntries = krChallenger.entries;
  krChallengerEntries.sort((a: { summonerName: string }, b: { summonerName: string }) =>
    a.summonerName > b.summonerName ? 1 : b.summonerName > a.summonerName ? -1 : 0,
  );

  // 이번 차례에 검색할 플레이어 받아오기
  const searchPlayer = krChallengerEntries[DATA.INDEX];

  DATA.INDEX = DATA.INDEX === 300 ? 0 : DATA.INDEX + 1;

  // summoner Id로 검색
  const { summonerId } = searchPlayer;

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

  // DB 수정
  DATA.DATABASE.push({
    summonerName: searchPlayer.summonerName,
    averagePlacement: placements.reduce((prev: number, curr: number) => prev + curr) / 20,
  });
  DATA.DATABASE.sort((a, b) => a.averagePlacement - b.averagePlacement);

  console.log(DATA.DATABASE); //

  return {
    props: {
      posts: DATA.DATABASE,
    },
    revalidate: 100,
  };
}

export default Home;
