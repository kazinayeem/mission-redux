/* eslint-disable @typescript-eslint/no-explicit-any */
import { Reducer } from "redux";
import { ADD, REMOVE } from "../actionType/Type";

// Define types for todo item and filter
export interface Todo {
  id: number;
  text: string;
  completed: boolean;
  color?: string;
}

interface Filters {
  status: string;
  colors: string[];
}

// Define the state type
export interface AppState {
  todos: Todo[];
  filters: Filters;
  counter: number;
}

// Define action types
interface Action {
  type: string;
  payload?: any; // You can define specific payload types for different action types
}

// Define the initial state
const initialState: AppState = {
  todos: [
    { id: 0, text: "Learn React", completed: true },
    { id: 1, text: "Learn Redux", completed: false, color: "purple" },
    { id: 2, text: "Build something fun!", completed: false, color: "blue" },
  ],
  filters: {
    status: "All",
    colors: [],
  },
  counter: 0,
};

// Define the reducer function
const appReducer: Reducer<AppState, Action> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case ADD:
      return {
        ...state,
         counter : state.counter + 1
      };
      case  REMOVE :
        return{
          ...state,
          counter : state.counter - 1
        }
      case "EXTRS":
        return{
          ...state,
          counter : state.counter + action.payload
        }
    default:
      return state;
  }
};

export default appReducer;
