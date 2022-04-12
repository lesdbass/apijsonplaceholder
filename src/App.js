import './App.css';

import React, { useState,useEffect } from 'react'
import axios from 'axios';
import { Routes, Route } from 'react-router-dom';
import UserList from './Component/UserList';
import User from './Component/User';
function App() {
  const [users,setUsers]=useState([])

  const getUsers=() => {
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then(rep=>{setUsers(rep.data)
    });
  }
   

  useEffect(() => {
      getUsers()
   }
  ,[])


  return (
    
     <Routes>
        <Route path="/"  element={<UserList users={users} /> }/>
        <Route path="/user/:id" element={<User />} />

    </Routes>
  );
}

export default App;
