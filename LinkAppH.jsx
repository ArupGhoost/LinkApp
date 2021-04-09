import React from 'react'
import { Link } from 'react-router-dom'

export const LinkAppH = () => {
    return (
        <>
           <div className='main'>
               <h1>hii My name is _____</h1>
               <Link to='/name' exact>Click </Link>
              </div>
           <div className='mainS'>
                 <h1>I'm from _________</h1>
              <Link to='/address' exact>Click</Link>
             </div> 
        </>
    )
}

export default LinkAppH;