import SideBar from './containers/SideBar'
import TodoList from './containers/TodoList'
import { Container } from './styles'
import GlobalStyle from './styles'

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Container>
        <SideBar />
        <TodoList />
      </Container>
    </>
  )
}

export default App
