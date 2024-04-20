export const ADD = "ADD"
export const REMOVE = "REMOVE"
export const ADDTODO = "ADDTODO"



export interface TodoTypeApi {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
  }
  