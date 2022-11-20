import { configureStore } from '@reduxjs/toolkit'
import TodoList from './redux/TodoList'


const store = configureStore({
  reducer: {
    todo:TodoList
  }
})
export default store
