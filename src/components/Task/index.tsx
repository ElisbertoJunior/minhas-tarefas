import { useState, useEffect, ChangeEvent } from 'react'
import { useDispatch } from 'react-redux'
import * as S from './styles'
import { remove, edit, handleStatus } from '../../store/reducers/Tasks'
import TaskClass from '../../models/Task'
import { SaveButton } from '../../styles'
import { Button } from '../../styles/index'
import * as enums from '../../utils/enums/Task'

type Props = TaskClass

const Task = ({
  description: originalDescription,
  title,
  priority,
  status,
  id
}: Props) => {
  const dispatch = useDispatch()
  const [isEditing, setIsEditing] = useState(false)
  const [description, setDescription] = useState('')

  useEffect(() => {
    if (originalDescription.length > 0) {
      setDescription(originalDescription)
    }
  }, [originalDescription])

  const editionCancel = () => {
    setIsEditing(false)
    setDescription(originalDescription)
  }

  const handleStatusTask = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(handleStatus({ id, finished: event.target.checked }))
  }

  return (
    <S.Card>
      <label htmlFor={title}>
        <input
          type="checkbox"
          id={title}
          onChange={handleStatusTask}
          checked={status === enums.Status.CONCLUIDA}
        />

        <S.Title>
          {isEditing && <em>Ediando: </em>}
          {title}
        </S.Title>
      </label>
      <S.Tag parameter="priority" priority={priority}>
        {priority}
      </S.Tag>
      <S.Tag parameter="status" status={status}>
        {status}
      </S.Tag>
      <S.Description
        disabled={!isEditing}
        value={description}
        onChange={({ target }) => setDescription(target.value)}
      />
      <S.ActionBar>
        {isEditing ? (
          <>
            <SaveButton
              onClick={() => {
                dispatch(
                  edit({
                    description,
                    title,
                    priority,
                    status,
                    id
                  })
                )
                setIsEditing(false)
              }}
            >
              Salvar
            </SaveButton>
            <S.CancelButton onClick={editionCancel}>Cancelar</S.CancelButton>
          </>
        ) : (
          <>
            <Button onClick={() => setIsEditing(true)}>Editar</Button>
            <S.CancelButton onClick={() => dispatch(remove(id))}>
              Remover
            </S.CancelButton>
          </>
        )}
      </S.ActionBar>
    </S.Card>
  )
}

export default Task
