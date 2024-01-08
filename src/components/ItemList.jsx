import Item from "./Item";
import { useState } from 'react';

export default function ItemList({items,setItems}){
    let [tabs,setTabs] = useState(false);
    const underline = "2px solid #3888FF";
    function deleteItem(itemId){
        let newItems = items.filter(item => item.id !==itemId);
        setItems(newItems);
    }
    function completeTask(itemId){
        const itemIndex = items.findIndex(item => item.id === itemId);
        const updatedItem = { ...items[itemIndex] };

        updatedItem.completed = true;

        const updatedItemsList = [...items];
        updatedItemsList[itemIndex] = updatedItem;

        setItems(updatedItemsList);
    }
    function undoTask(itemId){
        const itemIndex = items.findIndex(item => item.id === itemId);
        const updatedItem = { ...items[itemIndex] };

        updatedItem.completed = false;

        const updatedItemsList = [...items];
        updatedItemsList[itemIndex] = updatedItem;

        setItems(updatedItemsList);
    }
    return(
        <>
            <div className="tabs">
                <span className="tab" style = {{borderBottom:!tabs ? underline:"none"}} onClick={() =>setTabs(false)}>Imcomplete</span><span className="tab" style = {{borderBottom:tabs ? underline:"none"}} onClick={() =>setTabs(true)}>Complete</span>
            </div>
            <div className="itemList">
                {items.map(item => (tabs === item.completed)&&<Item key = {item.id} completeTask = {completeTask} deleteItem = {deleteItem} undoTask = {undoTask} {...item}/>)}
            </div>
        </>  
    )
}
