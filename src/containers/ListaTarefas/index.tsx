import Tarefa from '../../components/Tarefa'
import { Container } from './styles'

const tarefas = [
  {
    titulo: 'Finalizar Front-end',
    descricao: 'Chegar em 65% do curso',
    prioridade: 'importante',
    status: 'pendente'
  },
  {
    titulo: 'Encontrar um emprego',
    descricao: 'Começar a receber um salário',
    prioridade: 'urgente',
    status: 'pendente'
  },
  {
    titulo: 'Emagrecer',
    descricao: 'Chegar aos 95 quilos',
    prioridade: 'importante',
    status: 'pendente'
  },
  {
    titulo: 'Mudar de apartamento',
    descricao: 'Iniciar nova vida',
    prioridade: 'urgente',
    status: 'pendente'
  },
  {
    titulo: 'Limpar a casa',
    descricao: 'Ambiente agradável',
    prioridade: 'normal',
    status: 'concluída'
  }
]

const ListaTarefas = () => (
  <Container>
    <p>2 tarefas marcadas como: &quot;categoria&ldquo; e &quot;termo&ldquo;</p>
    <ul>
      {tarefas.map((t) => (
        <li key={t.titulo}>
          <Tarefa
            descricao={t.descricao}
            titulo={t.titulo}
            prioridade={t.prioridade}
            status={t.status}
          />
        </li>
      ))}
    </ul>
  </Container>
)

export default ListaTarefas
