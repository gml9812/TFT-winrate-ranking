import type { NextPage } from "next";
import styled from "styled-components";

const Button = styled.button`
  border: 4px solid black;
`;

const Home: NextPage = () => {
  return <Button type="button">hello</Button>;
};

export default Home;
