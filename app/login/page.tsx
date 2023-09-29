'use client'

import React from 'react'




const Loginpage = () => {
  const [checkNumber, setCheckNumber] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleSubmit = () => {
    // TODO: Implement the login functionality
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen font-mono">
    <h1 className="text-4xl  text-black  font-bold mb-10">TOTTMS</h1>
    <h2 className="text-2xl  text-black font-bold mb-4">Login</h2>
    <div className="flex flex-col gap-4">
      <input
        type="text"
        placeholder="Check number"
        value={checkNumber}
        onChange={(e) => setCheckNumber(e.target.value)}
        className="border border-gray-300 rounded-md p-2"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="border border-gray-300 rounded-md p-2"
      />
    </div>
  <div className="pt-10">
 
    <div className="btn-group btn-group-vertical font-bold py-2 px-4 rounded-md mt-4">
  <button className="btn btn-primary"
          type="submit"
          onClick={handleSubmit}>Login</button>
  <a href="/" className="btn">Register</a>
  <button className="btn">reset password </button>
</div>
   
  </div>
  
  </div>
  )
}

export default Loginpage




