import { useDispatch, useSelector } from "react-redux"

import FiltroCard from "../../components/FiltroCard"
import * as S from './styles'
import { RootReducer } from "../../store"
import { alteraTermo } from "../../store/reducers/filtro"
import * as emuns from '../../utils/enunms/Tarefa'

const BarraLateral = () => {

  const dispath = useDispatch()
  const { termo } = useSelector((state: RootReducer) => state.filtro)
  return (
    <S.Aside>
      <div>
        <S.Campo type="text" placeholder="Buscar" value={termo} onChange={evento => dispath(alteraTermo(evento.target.value))}/>
        <S.Filtros>
          <FiltroCard valor={emuns.Status.PENDENTE} criterio='status' legenda="pendentes" />
          <FiltroCard valor={emuns.Status.CONCLUIDA} criterio='status' legenda="concluídas"  />
          <FiltroCard valor={emuns.Prioridade.URGENTE} criterio='prioridade' legenda="urgentes"  />
          <FiltroCard valor={emuns.Prioridade.IMPORTANTE} criterio='prioridade' legenda="importantes"  />
          <FiltroCard valor={emuns.Prioridade.NORMAL} criterio='prioridade' legenda="normal"  />
          <FiltroCard criterio='todas' legenda="todas"  />
        </S.Filtros>
      </div>
  </S.Aside>
  )
}

export default BarraLateral
