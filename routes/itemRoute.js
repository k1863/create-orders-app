const express = require("express");
const router = express.Router();
const Item = require("../models/itemModel");

//Gets all order items
router.get("/", async (req, res) => {
  try {
    const orders = await Item.find();
    res.json(orders);
  } catch (err) {
    res.json({ message: err });
  }
});

//Creates an order item
router.post("/", async (req, res) => {
  const orderItem = new Item({
    code_id: req.body.code_id,
    quantity: req.body.quantity,
    item_value: req.body.item_value,
    discount: req.body.discount,
    total_value: req.body.total_value,
    description: req.body.description,
    situation: req.body.situation,
  });

  try {
    const savedItem = await orderItem.save();
    res.json(savedItem);
  } catch (err) {
    res.json({ message: err });
  }
});

//Find individual item
router.get("/:itemId", async (req, res) => {
  try {
    const item = await Item.findById(req.params.itemId);
    res.json(item);
  } catch (err) {
    res.json({ message: err });
  }
});

//Delete individual item
router.delete("/:itemId", async (req, res) => {
  try {
    const removedItem = await Item.remove({ _id: req.params.itemId });
    res.json(removedItem);
  } catch (err) {
    res.json({ message: err });
  }
});

router.patch("/:itemId", async (req, res) => {
  try {
    const updatedItem = await Item.updateOne({ _id: req.params.itemId });

    res.json(updatedItem);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
