import { useState } from "react";
import { Button } from "./components/UI/Button/Button";

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "Сделайть сегодня что небудь",
      body: "Это заметка была создана для работы и напоминание что и к чему должно меня привести",
    },
    {
      id: 2,
      title: "Сделайть сегодня что небудь",
      body: "Это заметка была создана для работы и напоминание что и к чему должно меня привести",
    },
    {
      id: 3,
      title: "Сделайть сегодня что небудь",
      body: "Это заметка была создана для работы и напоминание что и к чему должно меня привести",
    },
  ]);

  const [input, setInputs] = useState("");

  const [body, setBody] = useState("");

  function createTodo() {
    const newTodo = {
      id: Date.now(),
      title: input,
      body: body,
    };
    setTodos([...todos, newTodo]);
    setInputs("");
    setBody("");
  }

  return (
    <div className="App">
      <input
        type="text"
        value={input}
        onChange={(e) => {
          setInputs(e.target.value);
        }}
        placeholder="Новый пост"
      />
      <input
        type="text"
        value={body}
        onChange={(e) => {
          setBody(e.target.value);
        }}
        placeholder="Новое описание"
      />

      <Button onClick={createTodo}>Добавить пост</Button>

      {todos.map(({ id, title, body }) => (
        <div key={id}>
          <sub>{id}</sub>
          <h1>{title}</h1>
          <p>{body}</p>
          <Button>Удалить</Button>
        </div>
      ))}
    </div>
  );
}

export default App;
