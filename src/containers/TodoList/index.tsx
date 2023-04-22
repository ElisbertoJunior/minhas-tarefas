import Task from '../../components/Task'
import * as S from './styles'
import * as enums from '../../utils/enums/Task'

const tasks = [
  {
    title: 'Estudar TypeScript',
    description: 'Assistir modulo 31',
    priority: enums.Priority.IMPORTANTE,
    status: enums.Status.CONCLUIDA
  },
  {
    title: 'Estudar TypeScript',
    description: 'Assistir modulo 31',
    priority: enums.Priority.IMPORTANTE,
    status: enums.Status.PENDENTE
  },
  {
    title: 'Estudar TypeScript',
    description: 'Assistir modulo 31',
    priority: enums.Priority.NORMAL,
    status: enums.Status.PENDENTE
  },
  {
    title: 'Estudar TypeScript',
    description: 'Assistir modulo 31',
    priority: enums.Priority.URGENTE,
    status: enums.Status.CONCLUIDA
  },
  {
    title: 'Estudar TypeScript',
    description: 'Assistir modulo 31',
    priority: enums.Priority.IMPORTANTE,
    status: enums.Status.PENDENTE
  }
]

const TodoList = () => {
  return (
    <S.Container>
      <p>2 tarefas marcadas como: &quot;categoriae&quot; &quot;termo&quot;</p>
      <ul>
        {tasks.map(({ description, priority, status, title }) => (
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
