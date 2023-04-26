import { useDispatch, useSelector } from 'react-redux'
import * as S from './styles'
import { handleFilter } from '../../store/reducers/filter'
import * as enums from '../../utils/enums/Task'
import { RootReducer } from '../../store'

export type Props = {
  subtitle: string
  criterion: 'priority' | 'status' | 'todas'
  value?: enums.Priority | enums.Status
}

const FilterCard = ({ subtitle, criterion, value }: Props) => {
  const dispatch = useDispatch()
  const { filter, tasks } = useSelector((state: RootReducer) => state)

  const checkIsActive = () => {
    const sameCriterion = filter.criterion === criterion
    const sameValue = filter.value === value

    return sameCriterion && sameValue
  }

  const countTasks = () => {
    if (criterion === 'todas') return tasks.itens.length
    if (criterion === 'priority') {
      return tasks.itens.filter((item) => item.priority === value).length
    }
    if (criterion === 'status') {
      return tasks.itens.filter((item) => item.status === value).length
    }
  }

  const filterCard = () =>
    dispatch(
      handleFilter({
        criterion,
        value
      })
    )

  const active = checkIsActive()
  const counter = countTasks()
  return (
    <S.Card active={active} onClick={filterCard}>
      <S.Counter>{counter}</S.Counter>
      <S.Label>{subtitle}</S.Label>
    </S.Card>
  )
}

export default FilterCard
