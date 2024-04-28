import React, { useState } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addTodo } from "./redux/action/action";
import { Todo } from "./redux/reducer/reducer";
import { nanoid } from 'nanoid'
const AddTodo = () => {
  const dispatch = useDispatch();
  const id = nanoid()
  
  const [todo, setTodo] = useState<Todo>({
    id: "",
    text: "",
    color: "",
    completed: false, // Corrected to default to false
  });

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked } = event.target;

    // Update the state based on the input type
    if (name === "completed") {
      setTodo({ ...todo, completed: checked });
    } else {
      setTodo({
        ...todo,
        id : id,
        [name]: value,
      });
    }  
  };

  const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    dispatch(addTodo(todo));
      
  };

  return (
    <div>
      <Form onSubmit={onSubmitHandler}>
        <Form.Group className="mb-3">
          <Form.Label>Title</Form.Label>
          <Form.Control
            onChange={onChangeHandler}
            name="text"
            type="text"
            placeholder="Enter your text"
          />
        </Form.Group>

        <InputGroup className="mb-3">
          <Form.Label>isCompleted</Form.Label>
          <InputGroup.Checkbox
            type="checkbox"
            checked={todo.completed}
            name="completed"
            onChange={onChangeHandler}
          />
        </InputGroup>

        <Button type="submit">ADD TODO</Button>
      </Form>
    </div>
  );
};

export default AddTodo;
