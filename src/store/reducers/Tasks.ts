import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Task from '../../models/Task'
import * as enums from '../../utils/enums/Task'

type TasksState = {
  itens: Task[]
}

const initialState: TasksState = {
  itens: [
    new Task(
      'Estudar Java',
      enums.Priority.IMPORTANTE,
      enums.Status.PENDENTE,
      'Estudar Spring Boot',
      1
    ),
    new Task(
      'Estudar JavaScript',
      enums.Priority.NORMAL,
      enums.Status.CONCLUIDA,
      'Estudar Map, Filter e Reduce',
      2
    ),
    new Task(
      'Estudar Back-end',
      enums.Priority.URGENTE,
      enums.Status.PENDENTE,
      'Esdudar Java com Spring',
      3
    ),
    new Task(
      'Estudar Spring',
      enums.Priority.IMPORTANTE,
      enums.Status.PENDENTE,
      'Revisar Spring Framework',
      4
    )
  ]
}

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    remove: (state, action: PayloadAction<number>) => {
      state.itens = [
        ...state.itens.filter((task) => task.id !== action.payload)
      ]
    },
    edit: (state, action: PayloadAction<Task>) => {
      const taskIndex = state.itens.findIndex((t) => t.id === action.payload.id)

      if (taskIndex >= 0) {
        state.itens[taskIndex] = action.payload
      }
    }
  }
})

export const { remove, edit } = tasksSlice.actions
export default tasksSlice.reducer
