import { FiEdit  } from "react-icons/fi";
import { MdDelete } from "react-icons/md";

const List = ({id, title, removeItem, editItem}) => {
    return (
        <div className="list-item">
            <p>{title}</p>
            <div className="btn-container">
                <FiEdit className="edit-btn" onClick={() => editItem(id)}/>
                <MdDelete className="delete-btn" onClick={() => removeItem(id)}/>
            </div>
        </div>
    )
}

export default List