import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";

const required = "This field is required";

// Error Component
const errorMessage = (error) => {
  return <div className="invalid-feedback">{error}</div>;
};

export default function OrderForm({ onSubmit }) {
  let history = useHistory();
  const { register, handleSubmit, watch, errors, setValue } = useForm();

  const submitHandler = handleSubmit((data) => {
    console.log(data);
    onSubmit(data);
    history.push("/");
  });

  const Quantity = watch("quantity");
  const itemValue = watch("item_value");
  const discount = watch("discount");
  useEffect(() => {
    const totalValue = parseInt(Quantity * (itemValue - discount));
    setValue("total_value", totalValue);
  });

  return (
    <form onSubmit={submitHandler}>
      <input
        name="code_id"
        ref={register({ required: true, maxLength: 80 })}
        placeholder="Code"
        type="number"
      />
      {errors.orderCode &&
        errors.orderCode.type === "required" &&
        errorMessage(required)}
      <input
        name="quantity"
        ref={register({ required: true, maxLength: 80 })}
        placeholder="Quantity"
        type="number"
      />
      {errors.quantity &&
        errors.quantity.type === "required" &&
        errorMessage(required)}
      <input
        name="item_value"
        ref={register({ required: true, maxLength: 80 })}
        placeholder="Unit Value"
        type="number"
      />
      {errors.unitValue &&
        errors.unitValue.type === "required" &&
        errorMessage(required)}
      <input
        name="discount"
        ref={register({ required: true, maxLength: 80 })}
        placeholder="Discount"
        type="number"
      />
      {errors.discount &&
        errors.discount.type === "required" &&
        errorMessage(required)}
      <input
        name="total_value"
        ref={register({ required: true, maxLength: 80 })}
        placeholder="Total Value"
        type="number"
      />
      {errors.totalValue &&
        errors.totalValue.type === "required" &&
        errorMessage(required)}
      <textarea placeholder="Description" name="description" ref={register} />
      <select className="mt-2" name="situation" ref={register}>
        <option value="">Situation...</option>
        <option value="Under Analysis">Under Analysis</option>
        <option value="Approved">Approved</option>
        <option value="Cancelled">Cancelled</option>
      </select>

      <button className="button" type="submit">
        Create Order
      </button>
    </form>
  );
}
