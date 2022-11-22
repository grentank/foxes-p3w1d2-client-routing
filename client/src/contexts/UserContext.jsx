import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const UserContext = createContext();

function UserContextProvider({ children }) {
  const [user, setUser] = useState(null);

  const loginHandler = (e) => {
    e.preventDefault();
    axios.post('/auth/login', Object.fromEntries(new FormData(e.target)))
      .then((res) => setUser(res.data));
  };

  useEffect(() => {
    setTimeout(() => {
      axios.get('/auth/check')
        .then((res) => setUser(res.data));
    }, 500);
  }, []);

  const logoutHandler = () => {
    axios.get('/auth/logout')
      .then(() => setUser({}));
  };

  return (
    <UserContext.Provider value={{ user, loginHandler, logoutHandler }}>
      {children}
    </UserContext.Provider>
  );
}

export { UserContextProvider, UserContext };
