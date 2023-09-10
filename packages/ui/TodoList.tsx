import * as React from "react";

export function TodoList(props: { todos: any[] }) {
  return (
    <ul>
      {props.todos.length
        ? props.todos.map((todo) => <li key={todo.id}>{todo.text}</li>)
        : "No items added"}
    </ul>
  );
}
