import {HomepageHeader, Circle, WrapperLogo, ImgLogo} from "./homepage.styled";
import logo from '../../images/gianfranco-logo.png';
import { useState } from "react";
import { Link } from "react-router-dom";

function Homepage() {
  const [ripple, setRiple] = useState(true);

  return (
      <HomepageHeader>
          <Circle activateRipple={ripple}>
            <Link to={"/users"}>
              <WrapperLogo onClick={() => setRiple(!ripple)}>
                  <ImgLogo src={logo} alt="App Logo" />
              </WrapperLogo>
            </Link>
          </Circle>
      </HomepageHeader>
  );
}

export default Homepage;
