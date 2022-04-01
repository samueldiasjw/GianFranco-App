import { useState } from "react";
import { CardGradient, Description, PasswordInput, PasswordWrapper, Popup, PopupHeader, PopupImg, PopupInner, Role, UserImage, WrapperCard } from "./usercard.styled";
import { useNavigate } from "react-router-dom";


function UserCard(props) {
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  function submitHandler(event) {
    event.preventDefault();

    navigate("/dashboard");
  }

  return (
    <>
      {showPopup ? (
        <Popup>
          <PopupInner>
            <PopupHeader>
              <p onClick={togglePopup}>x</p>
            </PopupHeader>
            <PopupImg src="https://www.w3schools.com/howto/img_avatar.png" alt="User Photo in Popup" />
            <PasswordWrapper onSubmit={submitHandler}>
              <h3>Password:</h3>
              <PasswordInput type="password" pattern="[0-9]*" inputMode="numeric"></PasswordInput>
              <button>
              </button>
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
