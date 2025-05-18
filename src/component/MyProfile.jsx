import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Profile.css';

const ProfileScreen = () => {
  const [orders, setOrders] = useState([]);
  
  const navigate = useNavigate();
  const token = localStorage.getItem('access'); 
  useEffect(() => {
  const fetchUserOrders = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/order/', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setOrders(response.data);
    } catch (error) {
      console.error('Error fetching orders:', error);
      alert(error);
    } 
  };

    fetchUserOrders();
  }, []);

 
  if (!orders.length) {
    return <p>No orders found.</p>;
  }

  return (
    <div>
      <h1 className="center-text">My Orders</h1>
      <div className="orders-container">
        {orders.map((order) => (
          <div key={order.id} className="order-card">
            <h3>Order #{order.id}</h3>
            <p>Total: ${order.total}</p>
            <p>Status: {order.is_paid ? 'Paid' : 'Not Paid'}</p>
            <p className="order-date">
              Order Date: {new Date(order.order_date).toLocaleString()}
            </p>
            <button
              className="view-details-button"
              onClick={() => navigate(`/order/${order.id}`)}>
              View Details
            </button>
          </div>
        ))}
      </div>
      <div className="button-container">
        <button
          className="product-button"
          onClick={() => navigate('/products')} 
        >
          Go to Product Screen
        </button>
        <button
          className="logout-button"
          onClick={() => navigate('/logout')} 
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default ProfileScreen;
