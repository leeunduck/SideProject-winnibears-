import styled from 'styled-components';
import Colors from '../../constants/Color';
import HeadCoach from '../../assets/HeadCoach.jpeg';
import Background from '../../assets/Logo2.jpeg';

function CoachMain() {
  return (
    <main>
      <TitleContainer>
        <SubTitle>
          <Title>COACHES</Title>코칭 스텝
        </SubTitle>
      </TitleContainer>

      <ContentContainer>
        <HeadCTitle>감독</HeadCTitle>
        <HeadCContent>
          <HeadIMG src={HeadCoach} alt="HeadCoach" />
          <Content>
            <CoachTitle>HEAD COACH</CoachTitle>
            <CoachName>강준규</CoachName>

            <CoachBox>
              <CoachEntitle>이력</CoachEntitle>
              <div>U-16 청소년 국가대표</div>
              <div>U-18 청소년 국가대표</div>
              <div>U-20 국가대표</div>
            </CoachBox>

            <CoachBox>
              <CoachEntitle>학력</CoachEntitle>
              <div>경희초등학교</div>
              <div>경희중학교</div>
              <div>경복고등학교</div>
              <div>경희대학교 스포츠지도학과 졸업</div>
            </CoachBox>

            <CoachBox>
              <CoachEntitle>경력</CoachEntitle>
              <div>前 레오스타즈 어린이 아이스하키팀 코치</div>
              <div>前 서울블랙이글스 어린이 아이스하키팀 코치</div>
              <div>前 블랙나이츠 어린이 아이스하키팀 코치</div>
              <div>前 미래로 어린이 아이스하키팀 코치</div>
              <div>前 경희초등학교 아이스하키팀 코치</div>
              <div>前 코리아셀렉트 초등대표팀 코치</div>
            </CoachBox>

            <CoachBox>
              <div>現 위니베어스 어린이 아이스하키팀 감독</div>
              <div>現 솔라베어스 어린이 아이스하키팀 코치</div>
              <div>現 와이번즈 어린이 아이스하키팀 코치</div>
              <div>現 티렉스 어린이 아이스하키팀 코치</div>
              <div>現 목운초 어린이 아이스하키팀 코치</div>
              <div>現 토탈하키제이 골리 코치</div>
            </CoachBox>
          </Content>
        </HeadCContent>
        <div>Content2</div>
      </ContentContainer>
    </main>
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
  padding: 0 8rem;
`;

const HeadIMG = styled.img`
  max-width: 85%;
  max-height: 85%;
  object-fit: cover;
`;

const Content = styled.div`
  background-image: url(${Background});
`;

/* 본문 폰트 */

const CoachTitle = styled.div`
  font-size: 2rem;
`;

const CoachName = styled.div`
  font-size: 3.5rem;
  font-weight: 500;
  margin: 1.5rem 0;
`;

const CoachBox = styled.div`
  margin: 2rem 0;
  line-height: 2rem;
  font-size: 1.8rem;
`;

const CoachEntitle = styled.div`
  font-size: 1.5rem;
  font-weight: 550;
  border-left: 0.2rem solid ${Colors.black};
  padding-left: 0.5rem;
  margin: 1rem 0;
`;
export default CoachMain;
