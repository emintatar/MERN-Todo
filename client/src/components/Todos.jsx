import React from "react";
import TodoItem from "./TodoItem";

const Todos = ({
  allTodos,
  deleteTodo,
  setIsUpdating,
  isUpdating,
  renderUpdateForm,
}) => {
  return (
    <div className="todos">
      {allTodos.map((todo, index) => (
        <TodoItem
          key={index}
          todo={todo}
          deleteTodo={deleteTodo}
          setIsUpdating={setIsUpdating}
          isUpdating={isUpdating}
          renderUpdateForm={renderUpdateForm}
        />
      ))}
    </div>
  );
};

export default Todos;
