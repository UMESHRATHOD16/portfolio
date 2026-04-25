import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  currentChapter: null,        // null | 'about' | 'skills' | 'projects' | 'contact'
  isAnimating: false,          // page turn in progress?
  animationDirection: 'forward' // 'forward' | 'back'
}

const mangaSlice = createSlice({
  name: 'manga',
  initialState,
  reducers: {
    openChapter: (state, action) => {
      state.currentChapter = action.payload
      state.animationDirection = 'forward'
    },
    closeChapter: (state) => {
      state.currentChapter = null
      state.animationDirection = 'back'
    },
    setAnimating: (state, action) => {
      state.isAnimating = action.payload
    },
  },
})

export const { openChapter, closeChapter, setAnimating } = mangaSlice.actions
export default mangaSlice.reducer