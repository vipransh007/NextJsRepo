"use client"

import React, { useEffect, useState } from 'react';

const URL = "https://jsonplaceholder.typicode.com/posts";


const ClientComp = () => {
  const [postData, setPostData] = useState([]);

  const fetchData = async () => {
    const res = await fetch(URL);
    const data = await res.json();
    setPostData(data);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <button 
        className= 'bg-orange-400 p-4'
        onClick={() => alert("hie")}
      >
        Click me Bro
      </button>

      <ul className='grid grid-cols-3 gap-5'>
        {postData.map((currElem: any) => {
          return <li key={currElem.id}>{currElem.body}</li>
        })}
      </ul>
    </div>
  )
}

export default ClientComp;