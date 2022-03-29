import { CardGradient, Description, Role, UserImage, WrapperCard } from "./usercard.styled";

function UserCard(props) {
  return (
    <WrapperCard onClick={() => console.log("CLICKOU")}>
        <CardGradient></CardGradient>
        <UserImage src="https://www.w3schools.com/howto/img_avatar.png"></UserImage>
        <Description>
            {props.name}
            <Role>{props.role}</Role>
        </Description>
    </WrapperCard>
  );
}

export default UserCard;
