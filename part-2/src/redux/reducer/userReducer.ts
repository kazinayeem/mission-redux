import { Reducer } from "react";

const initialState = { value: 0 };
interface Action {
  type: string;
  payload?: any;
}

interface AppState {
  value: number;
}
const appReducer: Reducer<AppState, Action> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case value:
      
      break;
  
    default:
      break;
  }
};

export default counterReducer;
