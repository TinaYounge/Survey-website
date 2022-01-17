import { configureStore } from '@reduxjs/toolkit'
import UserReducer from './UserInfo/UserReducer'

export default configureStore({
    reducer: {
      user: UserReducer
    }
  })