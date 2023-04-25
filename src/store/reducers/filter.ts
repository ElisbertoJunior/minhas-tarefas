import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import * as enums from '../../utils/enums/Task'

type FilterState = {
  term: string
  criterion: 'priority' | 'status' | 'todas'
  value?: enums.Priority | enums.Status
}

const initialState: FilterState = {
  term: '',
  criterion: 'todas'
}

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    handleTerm: (state, action: PayloadAction<string>) => {
      state.term = action.payload
    }
  }
})

export const { handleTerm } = filterSlice.actions
export default filterSlice.reducer
