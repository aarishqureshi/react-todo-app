import { useState, useRef } from "react";
import { AiFillDelete, AiOutlineSave } from "react-icons/ai";
import { MdEdit, MdCancel } from "react-icons/md";

function TodoItem({ index, todoName, todoDate, todoStatus, onDeleteTodo, onEditTodo}) {
    const [isEditing, setIsEditing] = useState(false);
    // const [editedName, setEditedName] = useState(todoName);
    // const [editedDate, setEditedDate] = useState(todoDate);
    // const [editedStatus, setEditedStatus] = useState(todoStatus);
    const editedNameRef = useRef();
    const editedDateRef = useRef();
    const editedStatusRef = useRef();

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleEditSubmit = (e) => {
        e.preventDefault();
        const editedName = editedNameRef.current.value;
        const editedDate = editedDateRef.current.value;
        const editedStatus = editedStatusRef.current.value;
        onEditTodo(index, editedName, editedDate, editedStatus);
        setIsEditing(false);
    };

    return (
        <div className="container">
            {isEditing ? (
                <form onSubmit={handleEditSubmit}>
                    <div className="row kg-row">
                        <div className="col-4">
                            <input
                                type="text"
                                ref={editedNameRef}
                                defaultValue={todoName}
                                placeholder="Edit Todo Name"
                            />
                        </div>
                        <div className="col-3">
                            <select
                                ref={editedStatusRef}
                                defaultValue={todoStatus}
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
                                ref={editedDateRef}
                                defaultValue={todoDate}
                            />
                        </div>
                        <div className="col-2 d-flex gap-2">
                            <button
                                type="submit"
                                className="btn btn-dark kg-button"
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
                </form>
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

        </div>
    )
}

export default TodoItem;