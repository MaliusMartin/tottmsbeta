'use client'
import React, {useState, useEffect} from 'react'

interface Teacher{
  id: number;
  sname: string | null;
}

export default function Navbar() {

  const [teacher, setTeacher] = useState<Teacher | null>(null);

  const fetchData = async function(){
    const res = await fetch('http://127.0.0.1:8000/tottmsapi/teachers/');
    const data = await res.json();
    setTeacher(data);
  }
  useEffect(() => {
    fetchData();
  }, []);

  const greeting = teacher?.sname ? `Hi ${teacher.sname}` : 'Hi User';

  return (
    <div className="navbar bg-base-100 fixed top-0 w-full">
  <div className="flex-1">
    <a className="btn btn-ghost normal-case text-xl">{greeting} </a>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
      <li><details>
          <summary> 
            Resources
          </summary>
           <ul className="p-2 bg-base-100">
               
                <li><a href='#'>Pre-appform</a></li>
                <li><a href="#">user manual</a></li>
                <li><a href="#">Others</a></li>

           </ul>
          </details></li>
      <li>
        <details>
          <summary>
            Account
          </summary>
          <ul className="p-2 bg-base-100">
            <li><a href="#">Profile</a></li>
            <li><a href="#">Settings</a></li>
            <li><a href="/login">Logout</a></li>
          </ul>
        </details>
      </li>
    </ul>
  </div>
</div>
  );
}

 