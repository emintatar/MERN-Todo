const express = require("express");
const router = express.Router();
const TodoItem = require("../models/TodoItem");

router.get("/api/items", async (req, res) => {
  try {
    const todoItems = await TodoItem.find();
    res.status(200).json(todoItems);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.post("/api/items", async (req, res) => {
  const todoItem = new TodoItem({
    item: req.body.item,
  });

  try {
    const savedItem = await todoItem.save();
    res.status(200).json(savedItem);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.put("/api/items/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const updatedItem = await TodoItem.findByIdAndUpdate(id, {
      $set: req.body,
    });

    if (!updatedItem)
      return res.status(404).send("The item with the given ID was not found.");
    else {
      res.status(200).json(updatedItem);
    }
  } catch (err) {
    console.log(err);
  }
});

router.delete("/api/items/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const deletedItem = await TodoItem.findByIdAndDelete(id);
    if (!deletedItem)
      return res.status(404).send("The item with the given ID was not found.");
    else {
      res.status(200).json(deletedItem);
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
