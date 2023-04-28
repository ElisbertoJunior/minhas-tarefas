import { Provider } from 'react-redux'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { Container } from './styles'
import GlobalStyle from './styles'

import store from './store'
import Home from './pages/Home'
import Register from './pages/Register'
const routes = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/register',
    element: <Register />
  }
])

const App = () => {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Container>
        <RouterProvider router={routes} />
      </Container>
    </Provider>
  )
}

export default App
