import { configureStore } from '@reduxjs/toolkit'
import mangaReducer from '../features/manga/mangaSlice'

export const store = configureStore({
  reducer: {
    manga: mangaReducer,
  },
})