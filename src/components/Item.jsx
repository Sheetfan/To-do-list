
export default function Item({id,name,completed,completeTask,deleteItem,undoTask}){
    return(
        <div key={id}>
            <p className="name">{name}</p>
            
            {!completed&&<button className="check" onClick={() => completeTask(id)}><i className="fa fa-check" aria-hidden="true"></i></button>}
            {completed&&<button className="undo" onClick={() => undoTask(id)}>undo</button>}
            <button className="times" onClick={() => {deleteItem(id)}}><i className="fa fa-times" aria-hidden="true"></i></button>
            
        </div>
    )
}