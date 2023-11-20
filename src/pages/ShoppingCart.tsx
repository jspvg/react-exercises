/* TASK 
Build a shopping cart that displays the total price when adding items.
Requirements:
- Implement the Add to Cart logic, add an item to the cart when the
  button is clicked
- Implement the + and - buttons so that you can add or remove items from the cart
- Implement the total sum at the bottom of the page
*/

import { useReducer } from "react";

const items = [
  {
    name: "apple",
    price: 0.39,
  },
  {
    name: "banana",
    price: 0.79,
  },
  {
    name: "cherry tomatoes",
    price: 3.99,
  },
];

type Item = {
  name: string;
  quantity?: number;
  price: number;
};

type CartAction =
  | { type: "add_item"; item: Item }
  | { type: "increment_quantity"; itemName: string }
  | { type: "decrement_quantity"; itemName: string };

const cartReducer = (state: Item[], action: CartAction): Item[] => {
  switch (action.type) {
    case "add_item":
      return [...state, { ...action.item, quantity: 1 }];
    case "increment_quantity":
      return state.map((item) =>
        item.name === action.itemName
          ? { ...item, quantity: (item.quantity || 0) + 1 }
          : item
      );
    case "decrement_quantity":
      return state
        .map((item) =>
          item.name === action.itemName
            ? { ...item, quantity: Math.max(0, (item.quantity || 0) - 1) }
            : item
        )
        .filter((item) => item.quantity !== 0);
  }
  return state;
};

const ShoppingCart = () => {
  const [cart, dispatch] = useReducer(cartReducer, []);

  const handleAddToCart = (newItem: Item) => {
    const alreadyExists = cart.find((item) => item.name === newItem.name);
    if (alreadyExists) {
      dispatch({ type: "increment_quantity", itemName: newItem.name });
    } else {
      dispatch({ type: "add_item", item: newItem });
    }
  };

  const handleIncrement = (itemName: string) => {
    dispatch({ type: "increment_quantity", itemName: itemName });
  };

  const handleDecrement = (itemName: string) => {
    dispatch({ type: "decrement_quantity", itemName: itemName });
  };

  const total = cart
    .reduce((prev, item) => prev + item.price * item.quantity!, 0)
    .toFixed(2);

  return (
    <div>
      <h1>Shopping Cart</h1>
      <div className="cart">
        <div className="items">
          <h2>Items</h2>
          {items.map((item) => (
            <div key={item.name}>
              <h3>{item.name}</h3>
              <p>${item.price}</p>
              <button onClick={() => handleAddToCart(item)}>Add to Cart</button>
            </div>
          ))}
        </div>
        <div>
          <h2>Cart</h2>
          {cart.map((item) => (
            <div key={item.name}>
              <h3>{item.name}</h3>
              <p>
                <button onClick={() => handleDecrement(item.name)}>-</button>
                {item.quantity}
                <button onClick={() => handleIncrement(item.name)}>+</button>
              </p>
              <p>Subtotal: ${(item.quantity! * item.price).toFixed(2)}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="total">
        <h2>Total: {total}</h2>
      </div>
    </div>
  );
};

export default ShoppingCart;
