import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../features/cartSlice";
import { Link } from "react-router-dom";
export default function Cart() {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();


  const parsePrice = (price) => {
    if (price == null) return 0; 
    return parseFloat(price.toString().replace(/[^0-9.]/g, "")) || 0;
  };


  const total = cartItems.reduce(
    (sum, item) => sum + parsePrice(item.price) * item.quantity,
    0
  );

  return (
    <div className="min-h-[200px] mt-15 p-5">
      <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>

      {cartItems.length === 0 && <p>No products in the cart.</p>}

      {cartItems.map((item) => {
        const price = parsePrice(item.price);
        const subtotal = price * item.quantity;

        return (
          <div
            key={item.id}
            className="flex justify-between items-center border-b py-2"
          >
            <div className="flex items-center gap-3">
              <img
                src={item.image}
                alt={item.name}
                className="w-16 h-16 object-cover"
              />
              <div>
                <p className="font-semibold">{item.name}</p>
                <p>Price: ${price.toFixed(2)}</p>
                <p>Quantity: {item.quantity}</p>
                <p>Subtotal: ${subtotal.toFixed(2)}</p>
              </div>
            </div>
            <button
              onClick={() => dispatch(removeFromCart(item.id))}
              className="bg-red-500 text-white px-2 py-1 rounded"
            >
              Remove
            </button>
          </div>
        );
      })}

      {cartItems.length > 0 && (
        <h3 className="mt-4 font-bold">Total: ${total.toFixed(2)}</h3>
      )}
      <div className=" flex justify-center mt-20">
        <Link to="/shop">
          <button className=" bg-green-500 w-[500px]  h-10 rounded-full flex justify-center items-center">
            Continue Shopping{" "}
          </button>
        </Link>
      </div>
    </div>
  );
}

