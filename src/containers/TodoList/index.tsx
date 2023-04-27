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

  const displayResult = (amount: number) => {
    let message = ''
    const complement =
      term !== undefined && term.length > 0 ? `e "${term}"` : ``
    if (criterion === 'todas') {
      message = `${amount} tarefa(s) encontradas como todas. ${complement}`
    } else {
      message = `${amount} tarefa(s) encontradas como: "${`${value}`}" ${complement}`
    }

    return message
  }

  const tasks = filterTasks()
  const message = displayResult(tasks.length)

  return (
    <S.Container>
      <S.Result>{message}</S.Result>

      <ul>
        {tasks.map(({ description, priority, status, title, id }) => (
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
