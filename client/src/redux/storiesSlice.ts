import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from './store'


interface StoryState {
  value: {}
}

const initialState: StoryState = {
  value: {},
}

export const storiesSlice = createSlice({
  name: 'story',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setStories:(state,action)=>{
        state.value = action.payload 
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    
    },
  },
)

export const { setStories } = storiesSlice.actions

// Other code such as selectors can use the imported `RootState` type


export default storiesSlice.reducer