import type { NextPage } from 'next';
import styled from 'styled-components';

const Button = styled.button`
  border: 4px solid black;
`;

const Home: NextPage = ({ posts }) => {
  console.log(posts);
  return <Button type="button">hello</Button>;
};

export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch('http://localhost:3000/api/win-rate/top');
  const posts = await res.json();

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      posts,
    },
  };
}

export default Home;
