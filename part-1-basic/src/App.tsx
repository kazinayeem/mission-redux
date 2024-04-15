import { useSelector } from "react-redux";
import { ListGroup } from "react-bootstrap";
import { AppState, Todo } from "./redux/reducer/reducer";
function App() {
  
  const { todos } = useSelector((state: AppState) => state);

  return (
    <div className="container">
      <h1>Basic row redux</h1>
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
    </div>
  );
}
export default App;
