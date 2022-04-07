import DashboardButton from "../../components/DashboardButton";
import { ButtonsContainer, DashboardTitle, DashboardWrapper } from "./dashboard.styled";
import ImgCalendar from "../../images/dashboard-calendar.svg";
import ImgWorksheet from "../../images/dashboard-worksheet.svg";
import ImgReport from "../../images/dashboard-report.svg";

function Dashboard() {
  return (
    <DashboardWrapper>
      <DashboardTitle>DASHBOARD</DashboardTitle>
      <ButtonsContainer>
        <DashboardButton name={"Agenda"} image={ImgCalendar} />
        <DashboardButton name={"Folha de Obra"} image={ImgWorksheet} />
        <DashboardButton name={"Relatório"} image={ImgReport} />
        <DashboardButton name={"..."} />
        <DashboardButton name={"..."} />
        <DashboardButton name={"..."} />
      </ButtonsContainer>
    </DashboardWrapper>
  );
}

export default Dashboard;
