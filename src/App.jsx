import React, { useState } from "react";
import { InputTodo } from "./components/inputTodo";
import { TodoArea } from "./components/todoArea";
import "./styles.css";

export default function App() {
  const [numAll, setNumAll] = useState(0);
  const [numIncomplete, setNumIncomplete] = useState(0);
  const [numComplete, setNumComplete] = useState(0);
  const [todoText, setTodoText] = useState("");
  const [incompleteTodos, setIncompleteTodos] = useState([
    { label: "task1", checked: false, open: false },
    { label: "task2", checked: false, open: false },
    { label: "task3", checked: false, open: false }
  ]);
  const [updateText, setUpdateText] = useState();

  const onChangeTodoText = (event) => setTodoText(event.target.value);

  const onChangeEditText = (event) => {
    setUpdateText(event.target.value);
  };

  const countCompletes = (newTodos) => {
    setNumAll(newTodos.length);
    const numComplete = newTodos.filter((todo) => todo.checked).length;
    setNumComplete(numComplete);
    setNumIncomplete(newTodos.length - numComplete);
  };

  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodos = [
      ...incompleteTodos,
      { label: todoText, checked: false, open: false }
    ];
    setIncompleteTodos(newTodos);
    setTodoText("");

    countCompletes(newTodos);
  };

  const onChangeCount = (e) => {
    const newTodos = incompleteTodos.map((todo) => {
      const newTodo = { ...todo };
      if (newTodo.label === e.target.value) {
        newTodo.checked = !newTodo.checked;
      }
      return newTodo;
    });
    setIncompleteTodos(newTodos);
    countCompletes(newTodos);
  };

  const onClickEdi = (index) => {
    const newTodos = [...incompleteTodos];
    newTodos[index].open = !newTodos[index].open;
    setUpdateText(incompleteTodos[index].label);
    setIncompleteTodos(newTodos);
  };

  const onClickUpdate = (index) => {
    const newTodos = [...incompleteTodos];
    newTodos[index].open = !newTodos[index].open;
    newTodos[index].label = updateText;
    setIncompleteTodos(newTodos);
  };

  const onClickDelete = (index) => {
    alert("本当によろしいですか？");
    const newTodos = [...incompleteTodos];
    newTodos.splice(index, 1);
    setIncompleteTodos(newTodos);
    countCompletes(newTodos);
  };

  return (
    <div className="App">
      <InputTodo
        todoText={todoText}
        onChange={onChangeTodoText}
        onClick={onClickAdd}
      />
      <p>全てのタスク：{numAll}</p>
      <p>完了したタスク：{numComplete}</p>
      <p>未完了のタスク：{numIncomplete}</p>
      <TodoArea
        todos={incompleteTodos}
        onChangeCount={onChangeCount}
        onClickEdit={onClickEdi}
        onClickDelete={onClickDelete}
        onClickUpdate={onClickUpdate}
        updateText={updateText}
        onChange={onChangeEditText}
      />
    </div>
  );
}
