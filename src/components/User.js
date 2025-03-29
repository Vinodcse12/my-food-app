import React, { useState } from 'react'

const User = () => {
 const [count] = useState(0);
  return (
    <div className="user-card">
        <h1>{count}</h1>
        <h2>Name: Vinod</h2>
        <h2>Location: Bangalore</h2>
        <h3>Contact: vinod@gmail.com</h3>
    </div>
  )
}

export default User;
