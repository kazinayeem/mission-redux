import { useSelector } from "react-redux";
import { ListGroup } from "react-bootstrap";
import { AppState, Todo } from "./redux/reducer/reducer";
import { useDispatch } from "react-redux";
import { increment } from "./redux/action/action";
import AddTodo from "./AddTodo";
import GetApi from "./GetApi";
function App() {

  
  const dispatch = useDispatch();
  const { todos, counter } = useSelector((state: AppState) => state);

  // const increment = () => {
  //   dispatch({
  //     type: "ADD",
  //   });
  // };

  const decriment = () => {
    dispatch({
      type: "ADD",
    });
  };

  const extra = () => {
    dispatch({
      type: "EXTRS",
      payload: 2,
    });
  };

  return (
    <div className="container">
      <h1>Basic row redux</h1>
      <GetApi/>
      <ListGroup>
        {todos.map((todo: Todo) => (
          <ListGroup.Item
            key={todo.id}
            style={{
              textDecoration: todo.completed ? "line-through" : "none",
              backgroundColor: todo.color || "transparent",
            }}
          >
            {todo.text}
          </ListGroup.Item>
        ))}
      </ListGroup>
      <AddTodo />
      <hr />

      <div className="container">
        <button
          className="btn btn-danger"
          onClick={() => dispatch(increment())}
        >
          ADD
        </button>
        <h1>couter : {counter} </h1>
        <button className="btn btn-danger" onClick={decriment}>
          REMOVE
        </button>

        <button className="btn btn-danger" onClick={extra}>
          ADD 2
        </button>
      </div>
    </div>
  );
}
export default App;
