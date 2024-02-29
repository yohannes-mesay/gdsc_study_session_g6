import Products from './Products.jsx';
import Details from './Details.jsx';
import data from '../data.js';
import { useState } from 'react';
import BoughtItems from './BoughtItems.jsx';

function ShopCatagories({ addToCart }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedProduct, setSelectedProduct] = useState(null);

  const cdata = data;
  const filteredData = cdata.filter((product) => {
    const categoryMatches = selectedCategory === 'all' || product.category === selectedCategory;
    const searchMatches = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    return categoryMatches && searchMatches;
  });

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  const handleBackToShop = () => {
    setSelectedProduct(null);
  };

  return (
    <div>
      {selectedProduct ? (
        <Details data={selectedProduct} onBackClick={handleBackToShop} addToCart={addToCart} />
      ) : (
        <>
          <div className="search-bar">
            <label className="search">Search:</label>
            <input type="text" className="input-search" value={searchQuery} onChange={handleSearchChange} />
          </div>
          <h3>Shop</h3>
          <p>Here you can filter each product by their category</p>
          <br />
          <div className="filter-bar">
            <label htmlFor="category">Filter by Category:</label>
            <select id="category" value={selectedCategory} onChange={handleCategoryChange}>
              <option value="all">All Categories</option>
              <option value="electronics">Electronics</option>
              <option value="clothing">Clothing</option>
              <option value="homeappliance">Home Appliance</option>
            </select>
          </div>

          <div className="catagories">
            {filteredData.map((product, i) => (
              <Products key={i} data={product} onClick={() => handleProductClick(product)} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default ShopCatagories;
