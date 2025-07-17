import { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import {useNavigate} from 'react-router-dom'

import { MainContainer, Titulo, Campo, BotaoSalvar } from '../../styles/index'
import { Form, Opcoes, Opcao } from './styles'
import * as enums from '../../utils/enunms/Tarefa'

import { cadastrar } from '../../store/reducers/tarefas'

const Formulario = () => {
  const dispath = useDispatch()
  const[ titulo, setTitulo] = useState('')
  const [ descricao, setDescricao] = useState('')
  const [ prioridade, setPrioridade ] = useState(enums.Prioridade.NORMAL)
  const navigate = useNavigate()

  const cadastrarTarefa = (evento: FormEvent) => {
    evento.preventDefault()
    dispath(cadastrar({
      titulo,
      descricao,
      prioridade,
      status: enums.Status.PENDENTE
    }))
    navigate('/')
  }

  return(
    <MainContainer>
      <Titulo>Nova tarefa</Titulo>
      <Form onSubmit={cadastrarTarefa}>
        <Campo value={titulo} onChange={evento => setTitulo(evento.target.value)} type="text"  placeholder="Titulo"/>
        <Campo value={descricao} onChange={evento => setDescricao(evento.target.value)} as='textarea' placeholder="Descrição da tarefa"/>
        <Opcoes>
          <p>Prioridade</p>
          {Object.values(enums.Prioridade).map(prioridade => (
            <Opcao key={prioridade}>
              <input
                value={prioridade}
                name="prioridade"
                type="radio"
                id={prioridade}
                defaultChecked={prioridade === enums.Prioridade.NORMAL}
                onChange={(evento) => setPrioridade(evento.target.value as enums.Prioridade) }/>
                {' '}
                <label htmlFor={prioridade}>{prioridade}</label>
            </Opcao>
          ))}
        </Opcoes>
        <BotaoSalvar type="submit">Cadastrar</BotaoSalvar>
      </Form>
    </MainContainer>
  )
}

export default Formulario
