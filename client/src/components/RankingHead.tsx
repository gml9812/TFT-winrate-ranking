import styled from 'styled-components';

const Container = styled.div`
  display: -webkit-flex;
  text-align: center;
  height: 0.53rem;
  width: 100%;
  background-color: #202831;
  font-size: 0.14rem;
  color: #fff5e0;
  line-height: 0.53rem;
`;

const Col = styled.div`
  width: 7.56%;
  flex: none;
`;

export const RankingHead = () => {
  return (
    <Container>
      <Col>순위</Col>
      <Col>이름</Col>
      <Col>LP</Col>
      <Col>20게임 평균 등수</Col>
    </Container>
  );
};
