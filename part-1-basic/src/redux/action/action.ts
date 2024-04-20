import { ADDTODO, TodoTypeApi } from "../actionType/Type";
import { Todo } from "../reducer/reducer";

export const increment = () => {
  return {
    type: "ADD",
  };
};


export const addTodo = (todo : Todo) => {
    return{
      type : ADDTODO,
      payload  : todo
    }
}



export const FetchTodo = (todo : TodoTypeApi[]) => {
  return{
    type : "SUCCESS",
    payload  : todo
  }
}
