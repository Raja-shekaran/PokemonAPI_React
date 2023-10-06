import React from 'react'
import mylogo from './logo.svg'

function Header() {
    return (
        <div className='header'>
            <img  className="mx-auto" src={mylogo} width={200}/>
            {/* <h1 className="text-2xl font-medium text-center"></h1> */}
        </div>
    );
  }

export default Header
