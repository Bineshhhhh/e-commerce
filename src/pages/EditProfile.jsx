import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { useUser } from '../context/UserContext'; 
import '../pages/CSS/EditProfile.css'; 

const EditProfile = () => {
  const { user, setUser } = useUser(); // Get user data and setter from context
  const [editedUser, setEditedUser] = useState({ ...user });
  const navigate = useNavigate(); // Initialize useNavigate

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedUser((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handle profile picture change
  const handleProfilePictureChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setEditedUser((prevState) => ({
        ...prevState,
        profilePicture: URL.createObjectURL(file),
      }));
    }
  };

  // Handle save profile updates
  const handleSaveProfile = (e) => {
    e.preventDefault();
    setUser(editedUser); // Update the user data in the context
    console.log("Profile updated:", editedUser);
    // Optionally, send updated data to the backend

    // Redirect to profile page
    navigate('/profile');
  };

  return (
    <div className="edit-profile">
      <h1>Edit Profile</h1>

      <form onSubmit={handleSaveProfile}>
        <div className="form-item">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={editedUser.name}
            onChange={handleChange}
          />
        </div>

        <div className="form-item">
          <label>Username:</label>
          <input
            type="text"
            name="username"
            value={editedUser.username}
            onChange={handleChange}
          />
        </div>

        <div className="form-item">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={editedUser.email}
            onChange={handleChange}
          />
        </div>

        <div className="form-item">
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={editedUser.password}
            onChange={handleChange}
          />
        </div>

        <div className="form-item">
          <label>Profile Picture:</label>
          <input
            type="file"
            name="profilePicture"
            accept="image/*"
            onChange={handleProfilePictureChange}
          />
          {editedUser.profilePicture && (
            <div className="profile-picture-preview">
              <img
                src={editedUser.profilePicture}
                alt="Profile Preview"
                style={{ width: '100px', height: '100px', objectFit: 'cover', marginTop: '10px' }}
              />
            </div>
          )}
        </div>

        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
};

export default EditProfile;
