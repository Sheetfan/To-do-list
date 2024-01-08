import { useState } from 'react';
export default function Textbox({items,setItems}){
    let [newName,setNewName] = useState("");
    
    function addItem(){
        if (newName.trim() !== '') {
            let newId = Date.now();
            let newItem = {
                id:newId,
                name:newName,
                completed:false
            }
            setItems((prevItems) => [...prevItems,newItem]);
            setNewName("");
        }
        
    }
    return(
        <div className="textbox-group">
            <input 
            type="text" 
            name="" 
            id="" 
            value={newName}
            onChange={(e) => setNewName(e.target.value)}/>
            <button onClick={addItem}><i className="fa fa-plus" aria-hidden="true"></i></button>
        </div>
    );
}