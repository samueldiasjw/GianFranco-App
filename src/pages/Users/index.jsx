import UserCard from "../../components/UserCard";
import { UsersContainer } from "./Users.styled";


function Users() {
  return (
      <UsersContainer>
        <UserCard name={"SAMUEL DIAS"} role={"Mecânico"} />
        <UserCard name={"HENRIQUE RESENDE"} role={"Mecânico Chefe"} />
        <UserCard name={"TELMO RESENDE"} role={"Boss"} />
        <UserCard name={"RUBEN SILVA"} role={"Aprendiz"} />
        <UserCard name={"ANDRÉ PEIXOTO"} role={"Estagiário"} />
        <UserCard name={"MONTEIRO"} role={"Estagiário"} />
        <UserCard name={"HUGO FILIPE"} role={"Mecânico"} />
        <UserCard name={"MÁRIO DIAS"} role={"Mecânico"} />
        <UserCard name={"SAMUEL DIAS"} role={"Mecânico"} />
        <UserCard name={"HENRIQUE RESENDE"} role={"Mecânico"} />
        <UserCard name={"TELMO RESENDE"} role={"Mecânico"} />
        <UserCard name={"RUBEN SILVA"} role={"Mecânico"} />
        <UserCard name={"ANDRÉ PEIXOTO"} role={"Mecânico"} />
        <UserCard name={"MONTEIRO"} role={"Mecânico"} />
        <UserCard name={"HUGO FILIPE"} role={"Mecânico"} />
        <UserCard name={"MÁRIO DIAS"} role={"Mecânico"} />
      </UsersContainer>
  );
}

export default Users;
