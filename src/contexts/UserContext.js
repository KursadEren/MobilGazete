import React, { createContext, useState } from 'react';
import { getUsers } from '../services/userService'; // Kullanıcıları almak için hizmet

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [users, setUsers] = useState(getUsers());
  const [currentUser, setCurrentUser] = useState(null);

  const login = ({ email, password }) => {
    const user = users.find(u => u.email === email && u.password === password);
    if (user) {
      setCurrentUser(user);
      return true;
    }
    return false;
  };

  const logout = () => {
    setCurrentUser(null);
  };

  return (
    <UserContext.Provider value={{ users, currentUser, setCurrentUser, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
