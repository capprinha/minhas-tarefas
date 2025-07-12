import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import * as S from './styles'
import * as enums from '../../utils/enunms/Tarefa'
import { remover, editar } from '../../store/reducers/tarefas'
import TarefaClass from '../../models/Tarefa'


type Props = TarefaClass
const Tarefa = ( { descricao: descricaoOriginal, titulo, status, prioridade, id } : Props) => {
  const dispath = useDispatch()
  const [ estaEditando, setEstaEditando ] = useState(false)
  const [ descricao, setDescricao ] = useState('')

  useEffect(() => {
    if(descricaoOriginal.length > 0){
      setDescricao(descricaoOriginal)
    }
  },[descricaoOriginal])

  function cancelarDescricao(){
    setEstaEditando(false);
    setDescricao(descricaoOriginal);
  }

  return (
    <S.Card>
      <S.Titulo>{titulo}</S.Titulo>
      <S.Tag parametro='prioridade' prioridade={prioridade}>{prioridade}</S.Tag>
      <S.Tag parametro='status' status={status}>{status}</S.Tag>
      <S.Descricao  value={descricao} onChange={(evento) => setDescricao(evento.target.value)} disabled={!estaEditando}/>
      <S.BarraAcoes>
        {estaEditando ? (
          <>
            <S.BotaoSalvar onClick={() => {
              dispath(editar({
                descricao,
                prioridade,
                status,
                titulo,
                id
              }))
              setEstaEditando(false)
            }}>Salvar</S.BotaoSalvar>
            <S.BotaoCancelarRemover onClick={() =>cancelarDescricao }>Cancelar</S.BotaoCancelarRemover>
          </>
        ) : (
          <>
            <S.Botao onClick={() => setEstaEditando(true)}>Editar</S.Botao>
            <S.BotaoCancelarRemover onClick={() => dispath(remover(id))}>Remover</S.BotaoCancelarRemover>
          </>
        ) }
      </S.BarraAcoes>
    </S.Card>
  )
}

export default Tarefa
