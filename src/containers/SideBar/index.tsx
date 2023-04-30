import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import FilterCard from '../../components/FilterCard'
import * as S from './styles'
import { Button, Input } from '../../styles/index'
import { RootReducer } from '../../store'
import { handleTerm } from '../../store/reducers/filter'
import * as enums from '../../utils/enums/Task'

type Props = {
  showFilters: boolean
}

const SideBar = ({ showFilters }: Props) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { term } = useSelector((state: RootReducer) => state.filter)

  return (
    <S.Aside>
      <div>
        {showFilters ? (
          <>
            <Input
              type="text"
              placeholder="Buscar"
              value={term}
              onChange={({ target }) => dispatch(handleTerm(target.value))}
            />
            <S.Filters>
              <FilterCard
                value={enums.Status.PENDENTE}
                criterion="status"
                subtitle={'pendentes'}
              />
              <FilterCard
                value={enums.Status.CONCLUIDA}
                criterion="status"
                subtitle={'concluidas'}
              />
              <FilterCard
                value={enums.Priority.URGENTE}
                criterion="priority"
                subtitle={'urgentes'}
              />
              <FilterCard
                value={enums.Priority.IMPORTANTE}
                criterion="priority"
                subtitle={'importantes'}
              />
              <FilterCard
                value={enums.Priority.NORMAL}
                criterion="priority"
                subtitle={'normal'}
              />
              <FilterCard criterion="todas" subtitle={'todas'} />
            </S.Filters>
          </>
        ) : (
          <Button onClick={() => navigate('/')}>
            Voltar a lista de tarefas
          </Button>
        )}
      </div>
    </S.Aside>
  )
}

export default SideBar
