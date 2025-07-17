import { ChangeEvent, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import * as S from './styles'
import {BotaoSalvar, Botao} from '../../styles/index'
import * as enums from '../../utils/enunms/Tarefa'
import { remover, editar, alteraStatus } from '../../store/reducers/tarefas'
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

  function alteraStatusTarefa(evento: ChangeEvent<HTMLInputElement>){
    console.log(evento.target.checked)
    dispath(alteraStatus({
      id,
      finalizado: evento.target.checked
    }))
  }

  return (
    <S.Card>
      <label htmlFor={titulo}>
        <input type='checkbox' id={titulo} checked={status === enums.Status.CONCLUIDA} onChange={alteraStatusTarefa} />
        <S.Titulo>
          {estaEditando && <em>Editando:</em>}
          {titulo}
        </S.Titulo>
      </label>
      <S.Tag parametro='prioridade' prioridade={prioridade}>{prioridade}</S.Tag>
      <S.Tag parametro='status' status={status}>{status}</S.Tag>
      <S.Descricao  value={descricao} onChange={(evento) => setDescricao(evento.target.value)} disabled={!estaEditando}/>
      <S.BarraAcoes>
        {estaEditando ? (
          <>
            <BotaoSalvar onClick={() => {
              dispath(editar({
                descricao,
                prioridade,
                status,
                titulo,
                id
              }))
              setEstaEditando(false)
            }}>Salvar</BotaoSalvar>
            <S.BotaoCancelarRemover onClick={cancelarDescricao}>Cancelar</S.BotaoCancelarRemover>
          </>
        ) : (
          <>
            <Botao onClick={() => setEstaEditando(true)}>Editar</Botao>
            <S.BotaoCancelarRemover onClick={() => dispath(remover(id))}>Remover</S.BotaoCancelarRemover>
          </>
        ) }
      </S.BarraAcoes>
    </S.Card>
  )
}

export default Tarefa
