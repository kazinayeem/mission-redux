/* eslint-disable @typescript-eslint/no-explicit-any */
import { Reducer } from "redux";
import { ADD, ADDTODO, REMOVE } from "../actionType/Type";

export interface Todo {
  id: string | number;
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
  payload?: any;
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
        counter: state.counter + 1,
      };
    case REMOVE:
      return {
        ...state,
        counter: state.counter - 1,
      };
    case "EXTRS":
      return {
        ...state,
        counter: state.counter + action.payload,
      };
    case ADDTODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    default:
      return state;
  }
};

export default appReducer;
