/* eslint-disable @typescript-eslint/no-explicit-any */
import { ListGroup } from "react-bootstrap";
import AddRedux from "./AddRedux";
import CounterRedux from "./CounterRedux";
import HelloRedux from "./HelloRedux";
import { useSelector } from "react-redux";

export default function ReduxExamples() {
    const { todos } = useSelector((state: any) => state.todosReducer);
    return(
        <div>
            <h1>Redux Examples</h1>
            <HelloRedux />
            <CounterRedux />
            <AddRedux />
            <ListGroup>
        {todos.map((todo: any) => (
          <ListGroup.Item key={todo.id}>
            {todo.title}
          </ListGroup.Item>
        ))}
      </ListGroup>
      <hr />
        </div>
        
    )
}