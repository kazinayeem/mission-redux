import  { useEffect } from "react";
import { useDispatch } from "react-redux";
import { FetchTodo } from "./redux/action/action";
import { TodoTypeApi } from "./redux/actionType/Type";
import { useSelector } from "react-redux";
import { AppState } from "./redux/reducer/reducer";
import { ListGroup } from "react-bootstrap";

const GetApi = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/")
      .then((res) => res.json())
      .then((todo: TodoTypeApi[]) => {
    
        dispatch(FetchTodo(todo))
        
      })
      .catch((e) => {
        console.log(e);
      });
  }, [dispatch]);

  const { data } = useSelector((state: AppState) => state);

console.log(data);

 

  return <div className="container ">
    <h1>Get Api</h1>
    <ListGroup>
        {data.map((todo: TodoTypeApi, index : number) => (
          <ListGroup.Item
            key={todo.id}
            
          >
         ID : {index+ 1}  || {todo.title}
          </ListGroup.Item>
        ))}
      </ListGroup>
  </div>;
};

export default GetApi;
