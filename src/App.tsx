
import "./App.css"
function App() {
// const [task, setTask] = useState([]);
// const addTask =(e) =>{
  
// }

  return (
    <>
      <div className="flex-container">
        <h1>Todo app</h1>
        <div className="input-user">
          <input id="taskInput" placeholder="Enter task here" type="text" />
          <button className="button" id="addButton">Add</button>
        </div>
        <ul id="taskList">
        </ul>
      </div>
    </>
  );
}
export default App;