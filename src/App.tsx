import EstiloGlobal, { Container } from './styles'
import BarraLateral from './containers/BarraLateral'
import ListaDeTarefas from './containers/LIstaDeTarefas'

function App() {
  return (
    <>
      <EstiloGlobal />
      <Container>
        <BarraLateral />
        <ListaDeTarefas />
      </Container>
    </>
  )
}

export default App
