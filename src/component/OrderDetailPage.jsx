import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const OrderDetailScreen = () => {
  const params = useParams();
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);
  
  const fetchOrderDetails = async () => {

    try {
      const response = await axios.get(`http://127.0.0.1:8000/api/order/${params.orderId}/`);
      setOrder(response.data);
    } catch (error) {
      alert(error) 
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOrderDetails();
  }, [params.orderId]);

  if (loading) {
    return <p>Loading...</p>;
  }
  if (!order) {
    return <p>Unexpected error occurred.</p>;
  }

  return (
    <div style={{ padding: '16px' }}>
      <h1>Order Details</h1>
      <p>Order ID: {order.id}</p>
      <p>Total: ${order.total}</p>
      <p>Tax: ${order.tax}</p>
      <p>Paid: {order.is_paid ? 'Yes' : 'No'}</p>
      <p>Delivered: {order.is_delivered ? 'Yes' : 'No'}</p>
      <p>Shipping Address: {order.shipping_address}</p>
    </div>
  );
};

export default OrderDetailScreen;
