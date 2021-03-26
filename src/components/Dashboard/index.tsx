import { Summary } from "../Summary";
import TransactionsTable from "../TransactionsTable";
import { Container } from "./styles";

export function Dashboard() {
  const link =
    "https://portallac.unimedjf.coop.br:8443/LaboratorioWeb/loginPaciente.action?nmUsuario=329&dsSenha=NEny_2106";

  return (
    <Container>
      <Summary />
      <TransactionsTable />
    </Container>
  );
}
