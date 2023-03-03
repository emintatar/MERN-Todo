import React from "react";

const TodoItem = ({
  todo,
  deleteTodo,
  setIsUpdating,
  isUpdating,
  renderUpdateForm,
}) => {
  return (
    <div className="todoItem">
      {isUpdating === todo._id ? (
        renderUpdateForm(todo)
      ) : (
        <>
          <p className="itemContent">{todo.item}</p>
          <button
            onClick={() => setIsUpdating(todo._id)}
            className="updateItemBtn"
          >
            Update
          </button>
          <button
            onClick={() => deleteTodo(todo._id)}
            className="deleteItemBtn"
          >
            Delete
          </button>
        </>
      )}
    </div>
  );
};

export default TodoItem;
