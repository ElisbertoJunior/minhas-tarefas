import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { FormEvent, useState } from 'react'
import { MainContainer, Title, Input, SaveButton } from '../../styles/index'
import { Form, Options, Option } from './styles'
import * as enums from '../../utils/enums/Task'
import Task from '../../models/Task'
import { register } from '../../store/reducers/Tasks'

const FormTask = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [priority, setPriority] = useState(enums.Priority.NORMAL)

  const registerTask = (event: FormEvent) => {
    event.preventDefault()
    const taskForAdd = new Task(
      title,
      priority,
      enums.Status.PENDENTE,
      description,
      9
    )

    dispatch(register(taskForAdd))
    navigate('/')
  }

  return (
    <MainContainer>
      <Title>Nova Tarefa</Title>
      <Form onSubmit={registerTask}>
        <Input
          value={title}
          onChange={({ target }) => setTitle(target.value)}
          type="text"
          placeholder="Titulo"
        />
        <Input
          as={'textarea'}
          value={description}
          onChange={({ target }) => setDescription(target.value)}
          placeholder="Descrição da tarefa"
        />
        <Options>
          <p>Prioridade</p>
          {Object.values(enums.Priority).map((priority) => (
            <Option key={priority}>
              <input
                value={priority}
                name="priority"
                type="radio"
                onChange={({ target }) =>
                  setPriority(target.value as enums.Priority)
                }
                id={priority}
                defaultChecked={priority === enums.Priority.NORMAL}
              />
              <label htmlFor={priority}>{priority}</label>
            </Option>
          ))}
        </Options>
        <SaveButton type="submit">Cadastrar</SaveButton>
      </Form>
    </MainContainer>
  )
}

export default FormTask
