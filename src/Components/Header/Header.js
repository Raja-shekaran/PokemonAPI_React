import React from 'react'
import mylogo from './logo.svg'
import "./Header.css"

function Header() {
    return (
        <div className='header'>
            <img  className="mx-auto" src={mylogo} width={300}/>
            <h1 className="text-xl font-medium text-center">Pokédex</h1>
        </div>
    );
  }

export default Header
