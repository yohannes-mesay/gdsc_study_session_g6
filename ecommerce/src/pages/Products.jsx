import React from 'react';

function Products({ data, onClick }) {
  return (
    <div className="product" onClick={() => onClick(data)}>
      <img src={data.image} alt={data.name} />
      <div>
      <h2>{data.name}</h2>
      <h2>{data.price}</h2>
      </div>
    </div>
  );
}

export default Products;
