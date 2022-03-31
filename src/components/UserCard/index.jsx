import { useState } from "react";
import { CardGradient, Description, PasswordWrapper, Popup, PopupHeader, PopupImg, PopupInner, Role, UserImage, WrapperCard } from "./usercard.styled";

function UserCard(props) {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <>
      {showPopup ? (
        <Popup>
          <PopupInner>
            <PopupHeader>
              <p onClick={togglePopup}>x</p>
            </PopupHeader>

            <PopupImg src="https://www.w3schools.com/howto/img_avatar.png" alt="" />
            <PasswordWrapper>
              <h3>Password:</h3>
              <input type="password" pattern="[0-9]*" inputMode="numeric"></input>
            </PasswordWrapper>
          </PopupInner>
        </Popup>
      ) : null}

      <WrapperCard onClick={togglePopup}>
          <CardGradient></CardGradient>
          <UserImage src="https://www.w3schools.com/howto/img_avatar.png" alt="User Photo"></UserImage>
          <Description>
              {props.name}
              <Role>{props.role}</Role>
          </Description>
      </WrapperCard>
    </>
  );
}

export default UserCard;
