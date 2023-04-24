import { useSelector } from 'react-redux/es/exports'
import Task from '../../components/Task'
import * as S from './styles'
import { RootReducer } from '../../store'

const TodoList = () => {
  const { tasks } = useSelector((state: RootReducer) => state)

  return (
    <S.Container>
      <p>2 tarefas marcadas como: &quot;categoriae&quot; &quot;termo&quot;</p>
      <ul>
        {tasks?.map(({ description, priority, status, title }) => (
          <li key={title}>
            <Task
              title={title}
              description={description}
              priority={priority}
              status={status}
            />
          </li>
        ))}
      </ul>
    </S.Container>
  )
}

export default TodoList
