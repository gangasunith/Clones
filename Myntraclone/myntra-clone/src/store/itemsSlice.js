import { createSlice} from '@reduxjs/toolkit'
import { DEFAULT_ITEMS } from "../data/item"
const itemsSlice= createSlice({
name:'items',
initialState:DEFAULT_ITEMS,
reducers:{
  addInitialItems:(store,action)=>{
    console.log("reducer",store,action)
    return store
  }
}
})


export const itemsActions=itemsSlice.actions

export default itemsSlice;

 