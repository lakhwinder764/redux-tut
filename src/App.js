import React from 'react'
import { Decrement, Increment } from './action'
import {useSelector,useDispatch} from "react-redux"
const App = () => {
   const count = useSelector(state => state.ChangeNumber)
   const dispatch=useDispatch();
  return (
    <>
      <h1>{count}</h1>
      <button onClick={()=>dispatch(Increment())}>increment</button>
      <button onClick={()=>dispatch(Decrement())}>Decrement</button>
      
      </>
  )
}

export default App
