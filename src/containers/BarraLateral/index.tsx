import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from 'react-router-dom'

import FiltroCard from "../../components/FiltroCard"
import * as S from './styles'
import {Campo, Botao} from '../../styles/index'
import { RootReducer } from "../../store"
import { alteraTermo } from "../../store/reducers/filtro"
import * as emuns from '../../utils/enunms/Tarefa'

type Props = {
  mostrarFiltros: boolean
}

const BarraLateral = ({mostrarFiltros}: Props ) => {
  const navigate = useNavigate()
  const dispath = useDispatch()
  const { termo } = useSelector((state: RootReducer) => state.filtro)
  return (
    <S.Aside>
      <div>
        {mostrarFiltros ? (
          <>
            <Campo type="text" placeholder="Buscar" value={termo} onChange={evento => dispath(alteraTermo(evento.target.value))}/>
            <S.Filtros>
              <FiltroCard valor={emuns.Status.PENDENTE} criterio='status' legenda="pendentes" />
              <FiltroCard valor={emuns.Status.CONCLUIDA} criterio='status' legenda="concluídas"  />
              <FiltroCard valor={emuns.Prioridade.URGENTE} criterio='prioridade' legenda="urgentes"  />
              <FiltroCard valor={emuns.Prioridade.IMPORTANTE} criterio='prioridade' legenda="importantes"  />
              <FiltroCard valor={emuns.Prioridade.NORMAL} criterio='prioridade' legenda="normal"  />
              <FiltroCard criterio='todas' legenda="todas"  />
            </S.Filtros>
          </>
        ) : (
          <Botao onClick={() => navigate('/')}>Voltar a lista de tarefas</Botao>
        )}
      </div>
  </S.Aside>
  )
}

export default BarraLateral
