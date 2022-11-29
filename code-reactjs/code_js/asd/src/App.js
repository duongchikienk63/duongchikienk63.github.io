
import { useStore, actions } from "./store";

function App() {



  return (
    <div>
      <input
        value={todoInput}
        placeholder="Enter todo...."
        onChange={(e) => {
          dispatch(actions.setTodoInput(e.target.value));
        }}
      />
    </div>
  );
}

export default App;
