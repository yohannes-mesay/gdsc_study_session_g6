import { useState } from 'react';

function Details({ data, onBackClick, addToCart }) {
  const [quantity, setQuantity] = useState(1);
  const handleQuantityChange = (e) => {
    const newQuantity = parseInt(e.target.value, 10);
    setQuantity(isNaN(newQuantity) ? 1 : newQuantity);
  };
  console.log(data);
  console.log("quantitiy: ", quantity);
  return (
    <div className='details'>
      <img src={data.image} alt={data.name} />
      <div className='text'>
        <h2>{data.name}</h2>
        <p>{data.details}</p>
        <h3>{data.price}</h3>
        <label htmlFor="quantity">Quantity:</label>
        <input
          type="number"
          id="quantity"
          value={quantity}
          onChange={handleQuantityChange}
          min="1"
        />
        <button className='btndetail' onClick={() => addToCart(data, quantity)}>Add to Cart</button>
        <button onClick={onBackClick}>Back to Shop</button>
      </div>
    </div>
  );
}

export default Details;
