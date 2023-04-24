import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Task from '../../models/Task'
import * as enums from '../../utils/enums/Task'

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: [
    new Task(
      'Estudar Java',
      enums.Priority.IMPORTANTE,
      enums.Status.PENDENTE,
      'Estudar modulo 2',
      1
    ),
    new Task(
      'Estudar JavaScript',
      enums.Priority.IMPORTANTE,
      enums.Status.CONCLUIDA,
      '',
      2
    ),
    new Task(
      'Estudar Back-end',
      enums.Priority.URGENTE,
      enums.Status.PENDENTE,
      '',
      3
    ),
    new Task(
      'Estudar Spring',
      enums.Priority.IMPORTANTE,
      enums.Status.PENDENTE,
      '',
      4
    )
  ],
  reducers: {
    remove: (state, action: PayloadAction<number>) => {
      state = state.filter((task) => task.id !== action.payload)
    }
  }
})

export const { remove } = tasksSlice.actions
export default tasksSlice.reducer
