import Head from "./components/AppHeading";
import TodoEnter from "./components/Todo-Input";
import Item1 from "./components/Todo-Item1";
import Item2 from "./components/Todo-Item2";
import "./App.css";

function App() {
  return (
    <center class="todo-container text-center container">
      <Head></Head>
      <TodoEnter></TodoEnter>
      <Item1></Item1>
      <Item2></Item2>
    </center>
  );
}

export default App;
