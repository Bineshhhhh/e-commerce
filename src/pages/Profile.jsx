import React from 'react';
import { Link } from 'react-router-dom';
import { useUser } from '../context/UserContext'; 
import '../pages/CSS/Profile.css'; 
import all_products from '../components/assets/all_product';

const Profile = () => {
  const { user } = useUser(); // Get user data from context

  // Get the previously purchased items based on product IDs
  const purchasedItems = all_products.filter(product =>
    user.previouslyPurchased.includes(product.id)
  );

  return (
    <div className="profile">
      <h1>User Profile</h1>
      <div className="profile-info">
        <div className="profile-item">
          <strong>Name:</strong> <p>{user.name}</p>
        </div>
        <div className="profile-item">
          <strong>Username:</strong> <p>{user.username}</p>
        </div>
        <div className="profile-item">
          <strong>Email:</strong> <p>{user.email}</p>
        </div>
        <div className="profile-item">
          <strong>Profile Picture:</strong>
          <img src={user.profilePicture} alt="Profile" width="100" height="100" />
        </div>
        <div className="edit-profile-btn">
          <Link to="/edit-profile">
            <button>Edit Profile</button>
          </Link>
        </div>
      </div>

      <div className="order-history">
        <h2>Previously Purchased</h2>
        <div className="order-list">
          {purchasedItems.length === 0 ? (
            <p>No items purchased yet.</p>
          ) : (
            purchasedItems.map((order) => (
              <div key={order.id} className="order-item">
                <img src={order.image} alt={order.name} width="100" height="100" />
                <div className="order-item-info">
                  <h3>{order.name}</h3>
                  <p>Category: {order.category}</p>
                  <p>Price: ${order.new_price}</p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
