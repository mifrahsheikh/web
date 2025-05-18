import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Product.css'; 

const ProductScreen = () => {
  const [products, setProducts] = useState([]);

  const navigate = useNavigate();

  const token = localStorage.getItem('access');
  if (!token) {
    navigate('/sign-in');
    return;
  }

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/all-products/', {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        });
        setProducts(response.data);
      } catch (error) {
        console.error(error);
      } 
    };
  
    fetchProducts(); 
  }, []);

  const deleteProduct = async (id) => {
    try {
      await axios.delete(`http://127.0.0.1:8000/api/delete-product/${id}/`, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });
      setProducts(products.filter((product) => product.id !== id)); 
    } catch (error) {
      print(error)
    }
  };


  return (
    <div className="product-container">
      <h1>Products</h1>
      {products.length === 0 ? (
        <p>No products found.</p>
      ) : (
        <div className="product-grid">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <h3>{product.name}</h3>
              <p>Price: ${product.price}</p>
              <p>Category: {product.category}</p>
              <p> User ID: {product.user}</p>
              <button className="delete-btn" onClick={() => deleteProduct(product.id)}>
                Delete
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductScreen;
