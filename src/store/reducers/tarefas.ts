import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import Tarefa from '../../models/Tarefa'
import * as enums from '../../utils/enunms/Tarefa'

type TarefaState = {
  itens: Tarefa[]
}
const initialState: TarefaState = {
  itens: [
    {
      id: 1,
      descricao: 'Estudar modulo 1',
      prioridade: enums.Prioridade.IMPORTANTE,
      status: enums.Status.PENDENTE,
      titulo: 'Estudar JavaScript'
    },
    {
      id: 2,
      descricao: 'Fazer praticas da aula 3',
      prioridade: enums.Prioridade.URGENTE,
      status: enums.Status.CONCLUIDA,
      titulo: 'Estudar TypeScript'
    },
    {
      id: 3,
      descricao: 'Estudar React',
      prioridade: enums.Prioridade.IMPORTANTE,
      status: enums.Status.PENDENTE,
      titulo: 'Estudar React'
    }
  ]
}

const tarefasSlice = createSlice({
  name: 'tarefas',
  initialState,
  reducers: {
    remover: ( state, action: PayloadAction<number> ) => {
      state.itens = state.itens.filter(tarefa => tarefa.id !== action.payload)
    },
    editar: (state, action: PayloadAction<Tarefa>) => {
      const indexDaTarefa = state.itens.findIndex((t) => t.id === action.payload.id)
      if(indexDaTarefa >= 0){
        state.itens[indexDaTarefa] = action.payload
      }
    },
    cadastrar: (state, action: PayloadAction<Omit<Tarefa, 'id'>>) => {
      const tarefaJaExite = state.itens.find(tarefa => tarefa.titulo.toLowerCase() === action.payload.titulo.toLowerCase())
      if(tarefaJaExite){
        alert('Já existe uma tarefa com esse nome')
      } else {
        const ultimaTarefa = state.itens[state.itens.length - 1]

        const tarefaNova = {
          ...action.payload,
          id: ultimaTarefa ? ultimaTarefa.id++ : 1
        }
        state.itens.push(tarefaNova)
      }
    },
    alteraStatus: (state, action: PayloadAction<{id: number; finalizado: boolean}>) => {
      const indexDaTarefa = state.itens.findIndex((t) => t.id === action.payload.id)
      if(indexDaTarefa >= 0){
        state.itens[indexDaTarefa].status = action.payload.finalizado ? enums.Status.CONCLUIDA : enums.Status.PENDENTE
      }
    }
  }
})

export const { remover, editar, cadastrar, alteraStatus } = tarefasSlice.actions

export default tarefasSlice.reducer
