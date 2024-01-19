import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Tarefa from '../../models/Tarefa'
import * as enums from '../../utils/enums/Tarefa'

const tarefasSlice = createSlice({
  name: 'tarefas',
  initialState: [
    new Tarefa(
      'Estudar inglês',
      enums.Prioridade.IMPORTANTE,
      enums.Status.PENDENTE,
      '',
      1
    ),
    new Tarefa(
      'Estudar Back-end',
      enums.Prioridade.IMPORTANTE,
      enums.Status.PENDENTE,
      'Integração Front e Back-end',
      2
    ),
    new Tarefa(
      'Estudar Django',
      enums.Prioridade.NORMAL,
      enums.Status.PENDENTE,
      '',
      3
    ),
    new Tarefa(
      'Estudar Redux',
      enums.Prioridade.IMPORTANTE,
      enums.Status.PENDENTE,
      '',
      4
    ),
    new Tarefa(
      'Estudar TypeScript',
      enums.Prioridade.NORMAL,
      enums.Status.CONCLUIDA,
      '',
      5
    )
  ],
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state = state.filter((tarefa) => tarefa.id !== action.payload)
    }
  }
})

export const { remover } = tarefasSlice.actions
export default tarefasSlice.reducer
