import React from 'react';
import Link from 'next/link';


export default function Home() {
  
  return (
    <div className="grid place-items-center h-screen">
      <div className="bg-black border-5 border-black-500 rounded-md p-9">
        <input className="mb-2 p-2" type="text" placeholder="Input 1" />
        <br/>
        <input className="mb-2 p-2" type="text" placeholder="Input 2" />
        <br />
        <Link href="/add-context">
          <button className="bg-white text-black px-4 py-2 rounded" style={{ marginLeft: '60px' }}>Submit</button>
        </Link>
      </div>
    </div>
  );
}
