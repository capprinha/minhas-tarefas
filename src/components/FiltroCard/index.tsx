import { useDispatch, useSelector } from 'react-redux'
import * as S from './styles'
import { alteraFiltro } from '../../store/reducers/filtro'
import * as enums from '../../utils/enunms/Tarefa'
import { RootReducer } from '../../store'

export type Props = {
  legenda: string
  criterio: 'prioridade' | 'status' | 'todas'
  valor?: enums.Prioridade | enums.Status

}
const FiltroCard = ({ legenda, criterio, valor }: Props) => {
  const dispath = useDispatch()
  const { filtro, tarefas } = useSelector((state: RootReducer) => state)

  const verificaEstaAtivo = () => {
    const mesmoCriterio = filtro.criterio === criterio
    const mesmoValor = filtro.valor === valor

    return mesmoCriterio && mesmoValor
  }

  const contarTarefas = () => {
    if(criterio === 'todas') return tarefas.itens.length
    if(criterio === 'prioridade'){
      return tarefas.itens.filter((item) => item.prioridade === valor).length
    }
    if(criterio === 'status'){
      return tarefas.itens.filter((item) => item.status === valor).length

    }
  }

  const filtrar = () => {
    dispath(alteraFiltro({
      criterio,
      valor
    }))
  }

  const contator = contarTarefas()
  const ativo = verificaEstaAtivo()
  return (
  <S.Card ativo={ativo} onClick={filtrar}>
    <S.Contator>{contator}</S.Contator>
    <S.Label>{legenda}</S.Label>
  </S.Card>
)
}

export default FiltroCard
