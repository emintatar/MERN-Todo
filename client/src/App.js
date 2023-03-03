import React, { useState, useEffect } from "react";
import axios from "axios";
import "./style.css";
import Header from "./components/Header";
import Form from "./components/Form";
import Todos from "./components/Todos";

function App() {
  const [itemText, setItemText] = useState("");
  const [allTodos, setAllTodos] = useState([]);
  const [isUpdating, setIsUpdating] = useState("");
  const [updatedItemText, setUpdatedItemText] = useState("");

  const API_URL = "http://localhost:5000/api/items";

  const updateTodo = async (e) => {
    e.preventDefault();
    try {
      const result = await axios.put(`${API_URL}/${isUpdating}`, {
        item: updatedItemText,
      });
      setIsUpdating("");
      setUpdatedItemText("");
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  const renderUpdateForm = () => (
    <form className="updateForm">
      <input
        onChange={(e) => setUpdatedItemText(e.target.value)}
        value={updatedItemText}
        className="updateNewInput"
        type="text"
        placeholder="Update Todo Item"
      />
      <button onClick={updateTodo} className="updateNewBtn" type="submit">
        Update
      </button>
    </form>
  );
  const addTodo = async (e) => {
    e.preventDefault();

    try {
      const result = axios.post(API_URL, {
        item: itemText,
      });
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  const updateItemText = (e) => {
    setItemText(e.target.value);
  };

  const deleteTodo = async (id) => {
    try {
      const result = await axios.delete(`${API_URL}/${id}`);
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  const gelAllTodos = async () => {
    try {
      const result = await axios.get(API_URL);
      setAllTodos(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    gelAllTodos();
  }, [allTodos]);

  return (
    <div className="App">
      <Header />
      <Form
        addTodo={addTodo}
        updateItemText={updateItemText}
        itemText={itemText}
      />
      <Todos
        allTodos={allTodos}
        deleteTodo={deleteTodo}
        setIsUpdating={setIsUpdating}
        isUpdating={isUpdating}
        renderUpdateForm={renderUpdateForm}
      />
    </div>
  );
}

export default App;
