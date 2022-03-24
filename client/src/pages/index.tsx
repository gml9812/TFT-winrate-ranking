import type { NextPage } from 'next';
import { useState, useEffect } from 'react';
import { requests } from '../utils';
import { DATA } from '../mockDataBase';
import styled from 'styled-components';

// 3분에 한번씩 getstaticprops 작동하고 posts 변화
// posts 작동할 때마다 useEffect 작동(확인필요) => state 바꿈
// state 내용 렌더링

interface HomePageProps {
  posts: {
    summonerName: string;
    averagePlacement: number;
  }[];
}

const Home = ({ posts }: HomePageProps) => {
  const [userByWinRate, setUserByWinRate] = useState([
    {
      userName: '',
      winRate: 0,
    },
  ]);

  useEffect(() => {}, [posts]);

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
  const topPlayers = await requests('http://localhost:3000/api/win-rate/top-players');

  const searchPlayer = topPlayers[DATA.INDEX];

  DATA.INDEX = DATA.INDEX === 300 ? 0 : DATA.INDEX + 1;

  const placements = await requests(
    `http://localhost:3000/api/win-rate/${searchPlayer.summonerId}`,
  );

  /* await Promise.all(
    searchPlayers.map((challenger: { summonerId: string }) => {
      return requests(`http://localhost:3000/api/win-rate/${challenger.summonerId}`);
    }),
  ); */

  DATA.DATABASE.push({
    summonerName: searchPlayer.summonerName,
    averagePlacement: placements.reduce((prev: number, curr: number) => prev + curr) / 20,
  });

  console.log(DATA.INDEX);
  console.log(DATA.DATABASE);

  return {
    props: {
      posts: DATA.DATABASE,
    },
    revalidate: 100,
  };
}

export default Home;
