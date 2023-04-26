import { useSelector } from 'react-redux/es/exports'
import Task from '../../components/Task'
import * as S from './styles'
import { RootReducer } from '../../store'

const TodoList = () => {
  const { itens } = useSelector((state: RootReducer) => state.tasks)
  const { term, criterion, value } = useSelector(
    (state: RootReducer) => state.filter
  )

  const filterTasks = () => {
    let filterTasks = itens
    if (term !== undefined) {
      filterTasks = filterTasks.filter(
        ({ title }) => title.toLowerCase().search(term.toLowerCase()) >= 0
      )

      if (criterion === 'priority') {
        filterTasks = filterTasks.filter((item) => item.priority === value)
      } else if (criterion === 'status') {
        filterTasks = filterTasks.filter((item) => item.status === value)
      }

      return filterTasks
    } else {
      return itens
    }
  }

  return (
    <S.Container>
      <p>2 tarefas marcadas como: &quot;categoria&quot; &quot;{term}&quot;</p>
      <ul>
        <li>{term}</li>
        <li>{criterion}</li>
        <li>{value}</li>
      </ul>
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
