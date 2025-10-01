// import React from 'react'
//  import { useState } from 'react'

// export const AuthContext = React.createContext({
// token: '',
// isLoggedIn:false,
// login:(token) => {},
// logout: () =>{}
// })

  
// const AuthContextProvider = (props) =>{
// const [token,setToken] = useState(null)
// const userIsLoggedIn = !!token;
// const loginHandler =() =>{
//     setToken(token)
// }
// const logoutHandler =() =>{
//     setToken(null)
// }

// const contextValue = {
//     token: token,
//     isLoggedIn: userIsLoggedIn,
//     login: loginHandler,
//     logout: logoutHandler
// }
// return( 
// <AuthContext.Provider value= {contextValue}>
//     {props.children}
// </AuthContext.Provider>
// )
// };



//  export default AuthContextProvider;

// import React, { useState } from "react";

// export const AuthContext = React.createContext({
//   token: "",
//   isLoggedIn: false,
//   login: (token) => {},
//   logout: () => {},
// });

// const AuthContextProvider = (props) => {
//   const [token, setToken] = useState(null);

//   const userIsLoggedIn = !!token;

//   const loginHandler = (token) => {
//     setToken(token);
//     console.log(token);
//   };

//   const logoutHandler = () => {
//     setToken(null);
//   };

//   const contextValue = {
//     token: token,
//     isLoggedIn: userIsLoggedIn,
//     login: loginHandler,
//     logout: logoutHandler,
//   };

//   return (
//     <AuthContext.Provider value={contextValue}>
//       {props.children}
//     </AuthContext.Provider>
//   );
// };

// export default AuthContextProvider;


// AuthContext.jsx
import React, { useState, useEffect } from "react";

export const AuthContext = React.createContext({
  token: "",
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {},
});

const AuthContextProvider = (props) => {
  const [token, setToken] = useState(localStorage.getItem("token")); // restore from localStorage

  const userIsLoggedIn = !!token;

  const loginHandler = (token) => {
    setToken(token);
    localStorage.setItem("token", token); // persist
  };

  const logoutHandler = () => {
    setToken(null);
    localStorage.removeItem("token"); // clear
  };

  const contextValue = {
    token: token,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
