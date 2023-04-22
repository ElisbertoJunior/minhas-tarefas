import { describe } from 'node:test'
import Task from '../../components/Task'
import * as S from './styles'

const tasks = [
  {
    title: 'Estudar TypeScript',
    description: 'Assistir modulo 31',
    priority: 'importante',
    status: 'pendente'
  },
  {
    title: 'Estudar TypeScript',
    description: 'Assistir modulo 31',
    priority: 'importante',
    status: 'pendente'
  },
  {
    title: 'Estudar TypeScript',
    description: 'Assistir modulo 31',
    priority: 'importante',
    status: 'pendente'
  },
  {
    title: 'Estudar TypeScript',
    description: 'Assistir modulo 31',
    priority: 'importante',
    status: 'pendente'
  },
  {
    title: 'Estudar TypeScript',
    description: 'Assistir modulo 31',
    priority: 'importante',
    status: 'pendente'
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
