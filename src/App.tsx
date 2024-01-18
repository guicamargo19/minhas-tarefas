import BarraLateral from './containers/BarraLateral'
import ListaTarefas from './containers/ListaTarefas'
import EstiloGlobal, { Container } from './styles'

function App() {
  return (
    <>
      <EstiloGlobal />
      <Container>
        <BarraLateral />
        <ListaTarefas />
      </Container>
    </>
  )
}

export default App
