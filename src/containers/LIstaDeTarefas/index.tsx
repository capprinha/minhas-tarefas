import Tarefa from "../../components/Tarefa"
import { Container } from "./styles"

import * as enums from '../../utils/enunms/Tarefa'

const tarefas = [
  {
    titulo: 'Estudar TypeScript',
    descricao: 'Ver a aula 3 da EBAC',
    prioridade: enums.Prioridade.IMPORTANTE,
    status: enums.Status.PENDENTE
  },
  {
    titulo: 'Pagar conta de internet',
    descricao: 'Ver fatura no e-mail',
    prioridade: enums.Prioridade.URGENTE,
    status: enums.Status.CONCLUIDA
  },
  {
    titulo: 'Ir pra academia',
    descricao: 'Fazer treino pesado',
    prioridade: enums.Prioridade.IMPORTANTE,
    status: enums.Status.PENDENTE
  }
]

const ListaDeTarefas = () => (
  <Container>
    <p>2 tarefas marcadas como: "categoria" e "terno"</p>
    <ul>
      {tarefas.map(t =>
      <li key={t.titulo}>
        <Tarefa descricao={t.descricao} status={t.status} titulo={t.titulo} prioridade={t.prioridade}/>
      </li>
      )}
    </ul>
  </Container>
)

export default ListaDeTarefas
