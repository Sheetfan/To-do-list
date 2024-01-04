
import Item from "./Item";

export default function ItemList({incompletedItems,completedItems}){
    return(
        <div className="itemList">
            {incompletedItems.map(item => <Item key = {item.id} {...item}/>)}
        </div>
    )
}
