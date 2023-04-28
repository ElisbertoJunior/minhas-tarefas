import SideBar from '../../containers/SideBar'
import TodoList from '../../containers/TodoList'
import AddButton from '../../components/AddButton'

const Home = () => {
  return (
    <>
      <SideBar />
      <TodoList />
      <AddButton />
    </>
  )
}

export default Home
