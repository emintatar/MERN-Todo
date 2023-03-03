import React from "react";

const Form = ({ addTodo, updateItemText, itemText }) => {
  return (
    <form className="form">
      <input
        onChange={updateItemText}
        value={itemText}
        type="text"
        placeholder="Add Todo Item "
      />
      <button onClick={addTodo} type="submit">
        Add
      </button>
    </form>
  );
};

export default Form;
