import BarraLateral from '../../containers/BarraLateral'
import ListaTarefas from '../../containers/ListaTarefas'
import BotaoAdicionar from '../../components/BotaoAdicionar'

const Home = () => (
  <>
    <BarraLateral mostrarFiltros />
    <ListaTarefas />
    <BotaoAdicionar />
  </>
)

export default Home
