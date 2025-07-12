import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import Tarefa from '../../models/Tarefa'
import * as enums from '../../utils/enunms/Tarefa'

const tarefasSlice = createSlice({
  name: 'tarefas',
  initialState: {
    itens: [
      new Tarefa('Estudar JavaScript', enums.Prioridade.IMPORTANTE, enums.Status.PENDENTE, '', 1),
      new Tarefa('Estudar TypeScript', enums.Prioridade.URGENTE, enums.Status.CONCLUIDA, '', 2),
      new Tarefa('Estudar React', enums.Prioridade.IMPORTANTE, enums.Status.PENDENTE, '', 3)
    ]
  },
  reducers: {
    remover: ( state, action: PayloadAction<number> ) => {
      state.itens = state.itens.filter(tarefa => tarefa.id !== action.payload)
    },
    editar: (state, action: PayloadAction<Tarefa>) => {
      const indexDaTarefa = state .itens.findIndex(t => t.id === action.payload.id)
      if(indexDaTarefa >= 0){
        state.itens[indexDaTarefa] = action.payload
      }
    }
  }
})

export const { remover, editar } = tarefasSlice.actions

export default tarefasSlice.reducer
