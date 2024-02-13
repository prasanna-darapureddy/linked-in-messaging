import { configureStore } from '@reduxjs/toolkit'
import  linkedInSlice from '../reducers/slice/Slice'


const Store = configureStore({
  reducer: {
    linkedIn: linkedInSlice,
  }
})

export type RootState = ReturnType<typeof Store.getState>
export type AppDispatch = typeof Store.dispatch
export default Store