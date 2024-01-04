import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.scss';
import "./font-awesome-4.7.0/css/font-awesome.min.css";
import Tabs from './components/Tabs';
import ItemList from './components/ItemList';

function App() {
  const incompletedItems = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' },
  ];
  const completedItems = [ 
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' },
  ];


  return (
    <div className="main-container">
      <div className="textbox-group">
        <input type="text" name="" id="" /><button><i className="fa fa-plus" aria-hidden="true"></i></button>
      </div>
      <Tabs/>
      <ItemList completedItems={completedItems } incompletedItems={incompletedItems}/>
    </div>
  )
}

export default App;
