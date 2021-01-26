const mongoose = require("mongoose");

const itemSchema = mongoose.Schema(
  {
    code_id: {
      type: Number,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    item_value: {
      type: Number,
      required: true,
    },
    discount: {
      type: Number,
      required: true,
    },
    total_value: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
    },
    situation: {
      type: String,
      default: "Under Analysis",
    },
    date: {
      type: Date,
      default: Date.now,
      $dateToParts: { date: "$date" },
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("items", itemSchema);
