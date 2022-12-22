import styled from 'styled-components';
import Colors from '../../constants/Color';
import HeadCoach from '../../assets/HeadCoach.jpeg';

function CoachMain() {
  return (
    <div>
      <TitleContainer>
        <SubTitle>
          <Title>COACHES</Title>코칭 스텝
        </SubTitle>
      </TitleContainer>
      <ContentContainer>
        <HeadCTitle>감독</HeadCTitle>
        <HeadCContent>
          <HeadIMG src={HeadCoach} alt="HeadCoach" />
          <div />
        </HeadCContent>
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
  width: 120rem;
  margin: 5rem auto;
  margin-bottom: 10rem;
  display: grid;
  grid-template-rows: 4rem 71.7rem 50rem;
  grid-gap: 2.5rem;
`;

/* 감독 */
const HeadCTitle = styled.div`
  height: 4rem;
  background-color: ${Colors.blue1_logo};
  color: ${Colors.white};
  font-size: 2rem;
  display: flex;
  align-items: center;
  padding-left: 1rem;
`;

const HeadCContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const HeadIMG = styled.img`
  max-width: 90%;
  max-height: 90%;
  object-fit: cover;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default CoachMain;
