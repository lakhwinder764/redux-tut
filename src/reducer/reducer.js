import React from 'react'

const initialState=10;
const ChangeNumber = (state=initialState,action) => {
  switch(action.type){
      case "INCREMENT":
          return state+1;
          
      case "DECREMENT":
          return state-1;
          
      default:
          return state;
          
  }
}


export default ChangeNumber;




