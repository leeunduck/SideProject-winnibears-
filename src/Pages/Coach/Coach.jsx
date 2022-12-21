import Footer from '../../components/Footer';
import Header from '../../components/Header';
import CoachMain from './CoachMain';
import SLayoutContainer from '../../components/LayoutContainer';

function Coach() {
  return (
    <SLayoutContainer>
      <Header />

      <CoachMain />

      <Footer />
    </SLayoutContainer>
  );
}

export default Coach;
