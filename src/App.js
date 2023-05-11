
import './App.css';
import Form from "./Form"
import ToDo from "./ToDo"
import { useSelector } from 'react-redux';

function App() {
  const items = useSelector(store => store.items)

  console.log(items)
  return (
    <div className="App">
      <Form />
      <ol>
        {items.length > 0 ? items.map(i => <ToDo item={i} key={i.id} />) : ''}
      </ol>
    </div>
  );
}

export default App;
