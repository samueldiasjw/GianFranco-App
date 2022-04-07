import { ButtonImage, WrapperButton } from "./dashboardbutton.styled";

function DashboardButton(props) {
    return (
      <>
            <WrapperButton>
                {
                    props.image ? <ButtonImage src={props.image} alt={props.name + " Image"} /> : ""
                }
                <h3>{props.name}</h3>
            </WrapperButton>
      </>
    );
  }
  
export default DashboardButton;
  