import {HomepageHeader, Circle, WrapperLogo, ImgLogo} from "./homepage.styled";
import logo from '../../images/gianfranco-logo.png';

function Homepage() {
  return (
      <HomepageHeader>
          <Circle>
            <WrapperLogo>
                <ImgLogo src={logo} onClick={console.log("CLICA")} alt="App Logo" />
            </WrapperLogo>
          </Circle>
      </HomepageHeader>
  );
}

export default Homepage;
