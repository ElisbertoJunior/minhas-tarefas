import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import * as S from './styles'
import { remove, edit } from '../../store/reducers/Tasks'
import TaskClass from '../../models/Task'

type Props = TaskClass

const Task = ({
  title,
  priority,
  status,
  description: originalDescription,
  id
}: Props) => {
  const [isEditing, setIsEditing] = useState(false)
  const [description, setDescription] = useState('')
  const dispatch = useDispatch()

  useEffect(() => {
    if (originalDescription.length > 0) {
      setDescription(originalDescription)
    }
  }, [originalDescription])

  const editionCancel = () => {
    setIsEditing(false)
    setDescription(originalDescription)
  }

  return (
    <S.Card>
      <S.Title>{title}</S.Title>
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
            <S.SaveButton
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
            </S.SaveButton>
            <S.CancelButton onClick={editionCancel}>Cancelar</S.CancelButton>
          </>
        ) : (
          <>
            <S.Button onClick={() => setIsEditing(true)}>Editar</S.Button>
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
