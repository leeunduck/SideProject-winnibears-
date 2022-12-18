import styled from 'styled-components';
import Logo from '../assets/Logo1.jpeg';
import HeaderHover from './HeaderHover';

function Header() {
  return (
    <HeaderContainer>
      <Navigation>
        <CLogo />

        <CMenu />
      </Navigation>
    </HeaderContainer>
  );
}

/* Header Container */
const HeaderContainer = styled.header`
  box-shadow: 0px 2px 10px rgb(0 0 0 / 10%);
`;

const Navigation = styled.nav`
  margin: auto;
  width: 117.501rem;
  display: grid;
  grid-template-columns: 1fr 7fr 1fr;
  align-items: center;
`;

function CLogo() {
  return (
    <div>
      <a href="http://localhost:3000/">
        <SLogoI src={Logo} alt="Logo" />
      </a>
    </div>
  );
}

const SLogoI = styled.img`
  width: 18rem;
  height: 9rem;
  position: relative;
`;

/* Menu */
function CMenu() {
  return (
    <SMenuD>
      <SMenuU>
        <HeaderHover />
      </SMenuU>
    </SMenuD>
  );
}

const SMenuD = styled.div`
  width: 60rem;
  height: 9rem;
  justify-self: end;
  display: flex;
  justify-content: center;
  margin-right: 4rem;
  position: relative;
  bottom: 0.4rem;
`;

const SMenuU = styled.ul`
  display: flex;
  justify-content: flex-end;
  width: 60rem;
  height: 9rem;
`;
export default Header;
