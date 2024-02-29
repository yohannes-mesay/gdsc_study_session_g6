import React from "react";

function BoughtItems({ cartItems }) {
  return (
    <div className="bought-items">
      <h1>Bought Items</h1>
      {cartItems.map((item, index) => (
        <div key={index} className="bought-item">
          <img src={item.image} alt={item.name} />
          <div className="bought-text">
            <h3>{item.name}</h3>
            <p>Quantity: {item.quantity}</p>
            <p>Price: ${parseFloat(item.price.replace(/[^0-9.]/g, '')).toFixed(2)}</p>
            <h1>Perchase Completed!</h1>
          </div>
        </div>
      ))}
    </div>
  );
}

export default BoughtItems; 
