'use client';
import React from 'react'
import Appfrom from "../components/Appform";




const Loginpage = () => {
  const [checkNumber, setCheckNumber] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleSubmit = () => {
    // TODO: Implement the login functionality
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen font-mono">
    <h1 className="text-4xl  text-black  font-bold mb-10">TOTTMS</h1>
    <h2 className="text-2xl  text-black font-bold mb-4">Login page</h2>
    <div className="flex flex-col gap-4 text-black">
      <input
        type="text"
        name='checkNumber'
        placeholder="Check number"
        value={checkNumber}
        onChange={(e) => setCheckNumber(e.target.value)}
        className="border border-gray-300 rounded-md p-2"
      />
      <input
        type="password"
        name='password'
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="border border-gray-300 rounded-md p-2"
      />
    </div>
  <div className="py-10">
 
    <div className="btn-group btn-group-vertical font-bold py-2 px-4 rounded-md mt-4">
  <button className="btn btn-primary"
          type="submit"
          onClick={handleSubmit}>Login</button>
  <a href="/" className="btn">Register</a>
  <button className="btn">reset password </button>
</div>

  </div>
  < Appfrom form={{}} />
  </div>
  )
}

export default Loginpage




