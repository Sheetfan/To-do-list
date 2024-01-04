export default function Item({id,name}){
    return(
        <div key={id}>
            <p className="name">{name}</p>
            <button className="check"><i className="fa fa-check" aria-hidden="true"></i></button>
            <button className="times"><i className="fa fa-times" aria-hidden="true"></i></button>
        </div>
    )
}