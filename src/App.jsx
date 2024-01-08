import { useState } from 'react';
import './App.scss';
import "./font-awesome-4.7.0/css/font-awesome.min.css";
import Textbox from './components/Textbox';
import ItemList from './components/ItemList';

function App() {
  let [items,setItems] = useState([
    { id: 1, name: 'Item 1', completed:false},
    { id: 2, name: 'Item 2', completed:false},
    { id: 3, name: 'Item 3', completed:false},
  ]);

  return (
    <div className="main-container">
      <Textbox items = {items} setItems = {setItems}/>
      <ItemList items = {items} setItems = {setItems}/>
    </div>
  )
}

export default App;
