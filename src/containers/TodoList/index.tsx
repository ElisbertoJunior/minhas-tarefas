import { useSelector } from 'react-redux/es/exports'
import Task from '../../components/Task'
import * as S from './styles'
import { RootReducer } from '../../store'

const TodoList = () => {
  const { itens } = useSelector((state: RootReducer) => state.tasks)
  const { term } = useSelector((state: RootReducer) => state.filter)

  const filterTasks = () => {
    return itens.filter(
      ({ title }) => title.toLowerCase().search(term.toLowerCase()) >= 0
    )
  }

  return (
    <S.Container>
      <p>2 tarefas marcadas como: &quot;categoria&quot; &quot;{term}&quot;</p>
      <ul>
        {filterTasks().map(({ description, priority, status, title, id }) => (
          <li key={title}>
            <Task
              id={id}
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
