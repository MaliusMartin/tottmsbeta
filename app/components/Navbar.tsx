'use client'
import React from 'react'
// import styles  from './navbar.module.css';



export default function Navbar() {
  return (
    <div className="navbar bg-base-100">
  <div className="flex-1">
    <a className="btn btn-ghost normal-case text-xl">Hi User</a>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
      <li><a href="#">Logout</a></li>
      <li>
        <details>
          <summary>
            Account
          </summary>
          <ul className="p-2 bg-base-100">
            <li><a href="#">Profile</a></li>
            <li><a href="#">Settings</a></li>
          </ul>
        </details>
      </li>
    </ul>
  </div>
</div>
  );
}

 