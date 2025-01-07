import React, { createContext, useState, useContext } from 'react';

// Create a context for user data
const UserContext = createContext();

// Create a provider component
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    name: "John Cena",
    username: "Youcantseeme123",
    email: "wheresjonny@example.com",
    profilePicture: "path/to/profile-picture.jpg",
    previouslyPurchased: [1, 2, 3], // IDs of purchased products
  });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

// Custom hook to access user data
export const useUser = () => useContext(UserContext);
