import SideBar from './containers/SideBar'
import TodoList from './containers/TodoList'
import { Container } from './styles'
import GlobalStyle from './styles'
import { Provider } from 'react-redux'

import store from './store'

const App = () => {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Container>
        <SideBar />
        <TodoList />
      </Container>
    </Provider>
  )
}

export default App
