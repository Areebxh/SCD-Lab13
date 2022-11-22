import logo from './logo.svg';
import './App.css';

function App() {
  const fruits = ["Apple","Banana","Mango"]
  return (
    <div data-testid = "comp" className="App">
      <h1>Hello World</h1>
      <ul data-testid = "List">
      {fruits.map((user) => (
        <li>{user}</li>
      ))}
       
      </ul>
    </div>
  );
}

export default App;
