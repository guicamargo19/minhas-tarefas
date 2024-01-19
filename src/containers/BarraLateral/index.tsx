import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { alteraTermo } from '../../store/reducers/filtro'
import FiltroCard from '../../components/FiltroCard'
import * as enums from '../../utils/enums/Tarefa'
import * as S from './styles'

const BarraLateral = () => {
  const dispatch = useDispatch()
  const { termo } = useSelector((state: RootReducer) => state.filtro)

  return (
    <S.Aside>
      <div>
        <S.Campo
          type="text"
          placeholder="Buscar"
          value={termo}
          onChange={(evento) => dispatch(alteraTermo(evento.target.value))}
        />
        <S.Filtros>
          <FiltroCard
            criterio="status"
            legenda="pendentes"
            valor={enums.Status.PENDENTE}
          />
          <FiltroCard
            criterio="status"
            legenda="concluídas"
            valor={enums.Status.CONCLUIDA}
          />
          <FiltroCard
            criterio="prioridade"
            legenda="urgentes"
            valor={enums.Prioridade.URGENTE}
          />
          <FiltroCard
            criterio="prioridade"
            legenda="importantes"
            valor={enums.Prioridade.IMPORTANTE}
          />
          <FiltroCard
            criterio="prioridade"
            legenda="normal"
            valor={enums.Prioridade.NORMAL}
          />
          <FiltroCard criterio="todas" legenda="todas" />
        </S.Filtros>
      </div>
    </S.Aside>
  )
}

export default BarraLateral
