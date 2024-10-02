import React, { useState, useEffect } from 'react';

const OrderManagement = () => {
  const [orders, setOrders] = useState([]);
  const [newOrder, setNewOrder] = useState("");
  const [filter, setFilter] = useState("");

  
  useEffect(() => {
    const savedOrders = JSON.parse(localStorage.getItem("orders"));
    if (savedOrders) {
      setOrders(savedOrders);
    }
  }, []);

 
  useEffect(() => {
    localStorage.setItem("orders", JSON.stringify(orders));
  }, [orders]);


  const addOrder = () => {
    if (newOrder) {
      const newOrderObj = {
        id: orders.length + 1,
        item: newOrder,
        quantity: 1,
      };
      setOrders([...orders, newOrderObj]);
      setNewOrder("");
    }
  };

  
  const removeOrder = (id) => {
    setOrders(orders.filter(order => order.id !== id));
  };


  const updateQuantity = (id, newQuantity) => {
    if (newQuantity >= 1) {
      setOrders(orders.map(order => 
        order.id === id ? { ...order, quantity: newQuantity } : order
      ));
    }
  };


  const filteredOrders = orders.filter(order => 
    order.item.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <h1>Order Management System</h1>
      
      <div>
        <input 
          type="text" 
          value={newOrder} 
          placeholder="Enter item name" 
          onChange={(e) => setNewOrder(e.target.value)}/><br></br>
        <button onClick={addOrder}>Add Order</button>
      </div>

      <div>
        <input 
          type="text" 
          value={filter} 
          placeholder="Filter orders..." 
          onChange={(e) => setFilter(e.target.value)}
        />
      </div>

      <h2>Current Orders</h2>
      {filteredOrders.length > 0 ? (
        <ul>
          {filteredOrders.map(order => (
            <li key={order.id}>
              {order.item} (Quantity) 
              <input 
                type="number" 
                value={order.quantity} 
                min="1"
                onChange={(e) => updateQuantity(order.id, parseInt(e.target.value))}
              />
              <button onClick={() => removeOrder(order.id)}>Remove</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No orders found.</p>
      )}
    </div>
  );
};

export default OrderManagement;