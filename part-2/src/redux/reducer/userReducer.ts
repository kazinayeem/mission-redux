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
) => {};

export default counterReducer;
