import { useState, useEffect, useCallback, useRef } from 'react';
import { useInfiniteScroll } from '../hooks';
import { RankingList } from '../components';
import { requests } from '../utils';

interface PlayerInfo {
  summonerName: string;
  averagePlacement: number;
}

interface HomePageProps {
  topPlayerList: PlayerInfo[];
}

const ITEMS_IN_PAGE = 36;

const Home = ({ topPlayerList }: HomePageProps) => {
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(0);
  const [error, setError] = useState(false);
  const [showingPlayerList, setShowingPlayerList] = useState<PlayerInfo[]>([
    { summonerName: '', averagePlacement: 1 },
  ]);

  const handleObserver = useCallback(() => {
    setLoading(true);
    setPage((prev) => prev + 1);
  }, []);

  const option = {
    root: null,
    rootMargin: '20px',
    threshold: 0.5,
  };

  //////
  const homeRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    console.log('fa');
    homeRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, []);
  //////

  const [setTarget] = useInfiniteScroll(handleObserver, option);

  useEffect(() => {
    setShowingPlayerList(topPlayerList.slice(0, page * ITEMS_IN_PAGE));
    setLoading(false);
  }, [topPlayerList, page]);

  return (
    <div>
      <h1>평균 등수 순위</h1>
      <h2>버전: 12.6</h2>
      <RankingList />
      <div>
        {showingPlayerList.map((showingPlayer, index) => {
          return (
            <div key={index}>
              {showingPlayer.summonerName}
              {showingPlayer.averagePlacement}
            </div>
          );
        })}
      </div>
      <div ref={homeRef}>test</div>
      {loading && <p>Loading...</p>}
      {error && <p>Error!</p>}
      <div ref={setTarget} />
    </div>
  );
};

export async function getStaticProps() {
  const res = await requests(`http://localhost:10100/api/win-rate/top-players`);

  return {
    props: {
      topPlayerList: res.topPlayerList,
    },
    revalidate: 100,
  };
}

export default Home;
