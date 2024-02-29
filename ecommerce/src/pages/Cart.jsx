import { useState } from "react";
import { Link } from "react-router-dom";
import BoughtItems from "./BoughtItems";

function Cart({ cartItems, removeFromCart }) {
  const [checkout, setCheckout] = useState(false);

  function calculateTotal() {
    return cartItems.reduce((total, item) => {
      return total + parseFloat(item.price.replace(/[^0-9.]/g, '')) * item.quantity;
    }, 0).toFixed(2);
  }

  function handleCheckout() {
    if (cartItems.length !== 0) {
      setCheckout(true);
      removeFromCart([]);
    } else {
      alert('Please first add items to the cart');
    }
  }

  return (
    <div className="cart-contain">
      {checkout ? (
        <BoughtItems cartItems={cartItems} />
      ) : (
        <div className="cart-main">
          <h2>Your Cart</h2>
          <p>
            Not ready to checkout?{" "}
            <Link to="/shopCatagories">
              <strong>Continue</strong>
            </Link>{" "}
            shopping
          </p>

          {cartItems.length === 0 ? (
            <p>Your cart is empty</p>
          ) : (
            <>
              {cartItems.map((item, index) => (
                <div key={index} className="cart-item">
                  <img src={item.image} alt={item.name} />
                  <div className="cart-text">
                    <h3>{item.name}</h3>
                    <p>Quantity: {item.quantity}</p>
                    <button onClick={() => removeFromCart(index)}>Remove</button>
                  </div>
                </div>
              ))}
            </>
          )}
        </div>
      )}
      <div className="order-summary">
        <h3>Order Summary</h3>
        <p>Total: ${calculateTotal()}</p>
        <button onClick={handleCheckout}>Continue to Checkout</button>
      </div>
    </div>
  );
}

export default Cart;
