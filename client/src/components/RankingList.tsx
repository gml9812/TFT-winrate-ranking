import styled from 'styled-components';
import { RankingHead } from '.';

const Container = styled.div`
  font-size: 0;
  line-height: 1;
  color: #7e807d;
  font-family: Dinot, '\5FAE\8F6F\96C5\9ED1';
  margin-top: 0.39rem;
`;

const RankingBody = styled.div``;
const RankingItem = styled.div``;

export const RankingList = () => {
  return (
    <Container>
      <RankingHead />
      <RankingBody>
        <RankingItem></RankingItem>
      </RankingBody>
    </Container>
  );
};
