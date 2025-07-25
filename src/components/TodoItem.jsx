import { useState } from "react";
import { AiFillDelete, AiOutlineSave } from "react-icons/ai";
import { MdEdit, MdCancel } from "react-icons/md";

function TodoItem({ index, todoName, todoDate, todoStatus, onDeleteTodo, onEditTodo}) {
    const [isEditing, setIsEditing] = useState(false);
    const [editedName, setEditedName] = useState(todoName);
    const [editedDate, setEditedDate] = useState(todoDate);
    const [editedStatus, setEditedStatus] = useState(todoStatus);

    const handleEditClick = () => {
        setIsEditing(true);
    };

    return (
        <div className="container">
            {isEditing ? (
                <div className="row kg-row">
                    <div className="col-4">
                        <input
                            type="text"
                            value={editedName}
                            onChange={(e) => setEditedName(e.target.value)}
                        />
                    </div>
                    <div className="col-3">
                        <select
                            value={editedStatus}
                            onChange={(e) => setEditedStatus(e.target.value)}
                        >
                            <option value="pending">Pending</option>
                            <option value="completed">Completed</option>
                            <option value="in-progress">In Progress</option>
                            <option value="on-hold">On Hold</option>
                        </select>
                    </div>
                    <div className="col-3">
                        <input
                            type="date"
                            value={editedDate}
                            onChange={(e) => setEditedDate(e.target.value)}
                        />
                    </div>
                    <div className="col-2 d-flex gap-2">
                        <button
                            type="button"
                            className="btn btn-dark kg-button"
                            onClick={() => {
                                onEditTodo(index, editedName, editedDate, editedStatus);
                                setIsEditing(false);
                            }}
                        >
                            <AiOutlineSave />
                        </button>
                        <button
                            type="button"
                            className="btn btn-secondary kg-button"
                            onClick={() => setIsEditing(false)}
                        >
                            <MdCancel />
                        </button>
                    </div>
                </div>
            ) : (
                <div className="row kg-row">
                    <div className="col-4">
                        <span>{todoName}</span>
                    </div>
                    <div className="col-3">
                        <span>{todoStatus}</span>
                    </div>
                    <div className="col-3">
                        <span>{todoDate}</span>
                    </div>
                    <div className="col-2 d-flex gap-2">
                        <button
                            type="button"
                            className="btn btn-dark kg-button"
                            onClick={handleEditClick}
                        >
                            <MdEdit />
                        </button>
                        <button
                            type="button"
                            className="btn btn-danger kg-button"
                            onClick={() => onDeleteTodo(index)}
                        >
                            <AiFillDelete />
                        </button>
                    </div>
                </div>
            )}

            {/* <div className="row kg-row">
                <div className="col-4">
                    {isEditing ? 
                        <input type="text" value={editedName} onChange={(e) => setEditedName(e.target.value)} /> : 
                        <span>{todoName}</span>
                    }
                </div>
                <div className="col-3">
                    {isEditing ? 
                        <select value={editedStatus} onChange={(e) => setEditedStatus(e.target.value)}>
                            <option value="pending">Pending</option>
                            <option value="completed">Completed</option>
                            <option value="in-progress">In Progress</option>
                            <option value="on-hold">On Hold</option>
                        </select> : 
                        <span>{todoStatus}</span>
                    }
                </div>
                <div className="col-3">
                    {isEditing ? 
                        <input type="date" value={editedDate} onChange={(e) => setEditedDate(e.target.value)} /> : 
                        <span>{todoDate}</span>
                    }
                </div>
                <div className="col-2 d-flex gap-2">
                    {isEditing ?
                        <button type="button" className="btn btn-dark kg-button" onClick={() => {
                            onEditTodo(index, editedName, editedDate, editedStatus);
                            setIsEditing(false);
                        }}> 
                            <AiOutlineSave />
                        </button> :
                        <button type="button" className="btn btn-dark kg-button" onClick={handleEditClick}>
                            <MdEdit />
                        </button>
                    }
                    <button type="button" className="btn btn-danger kg-button" onClick={() => onDeleteTodo(index)}>
                        <AiFillDelete />
                    </button>
                </div>
            </div> */}
        </div>
    )
}

export default TodoItem;