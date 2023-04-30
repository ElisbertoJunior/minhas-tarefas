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
    },
    register: (state, action: PayloadAction<Omit<Task, 'id'>>) => {
      const taskExists = state.itens.find(
        (t) => t.title.toLowerCase() === action.payload.title.toLowerCase()
      )

      if (taskExists) {
        alert('Ja existe uma terefa com esse nome')
      } else {
        const lastTask = state.itens[state.itens.length - 1]

        const newTask = {
          ...action.payload,
          id: lastTask ? lastTask.id + 1 : 1
        }
        state.itens.push(newTask)
      }
    },
    handleStatus: (
      state,
      action: PayloadAction<{ id: number; finished: boolean }>
    ) => {
      const taskIndex = state.itens.findIndex((t) => t.id === action.payload.id)

      if (taskIndex >= 0) {
        state.itens[taskIndex].status = action.payload.finished
          ? enums.Status.CONCLUIDA
          : enums.Status.PENDENTE
      }
    }
  }
})

export const { remove, edit, register, handleStatus } = tasksSlice.actions
export default tasksSlice.reducer
