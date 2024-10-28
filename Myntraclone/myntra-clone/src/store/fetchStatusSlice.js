import { createSlice} from '@reduxjs/toolkit'
import itemsSlice from './itemsSlice'
const fetchStatusSlice= createSlice({
name:'fetchStatus',
initialState:{
  fetchDone:false,
  currentlyFetching:false,
},
reducers:{
  markFetchDone:(state)=>{
    return state.fetchDone=true;
  },
  markFetchingStarted:(state)=>{
    return state.currentlyFetching=true
  },
  markFetchingFinished:(state)=>{
    return state.currentlyFetching=false
  },
}
})


export const fetchStatusSliceActions=itemsSlice.actions

export default fetchStatusSlice;

 