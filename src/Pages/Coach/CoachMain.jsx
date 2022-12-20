import styled from 'styled-components';
import Colors from '../../constants/Color';

function CoachMain() {
  return (
    <div>
      <TitleContainer>
        <SubTitle>
          <Title>COACHES</Title>코칭 스텝
        </SubTitle>
      </TitleContainer>
      <ContentContainer>
        <div>Content</div>
        <div>Content2</div>
      </ContentContainer>
    </div>
  );
}

/* 코칭 스텝 제목 */
const TitleContainer = styled.div`
  width: 100%;
  height: 11.3rem;
  background-color: ${Colors.white};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SubTitle = styled.div`
  width: 18rem;
  font-size: 1.4rem;
  border-bottom: 0.2rem solid ${Colors.border};
  padding-bottom: 1.5rem;
`;

const Title = styled.span`
  font-size: 2.4rem;
  font-weight: 700;
  margin-right: 1.5rem;
`;

/* Coach Container */
const ContentContainer = styled.div`
  margin: 5rem auto;
  margin-bottom: 10rem;
  display: grid;
  grid-template-rows: 70rem 33rem;
  grid-gap: 5rem;
`;

/* 감독 타이틀 */

export default CoachMain;
