import React from 'react'
import { Link } from 'react-router-dom'
import '../css/nav.css'


function Nav() {
  
  return (
    <>
    <div className='top'>
        <h1 className='heading'><span className='the'>The</span><span className='siren'>Siren</span></h1>
        <div className='nav '>   
            <Link to='/' style={{ textDecoration: 'none' }}><span className='txt'>Home</span></Link>
            <Link to='/food' style={{ textDecoration: 'none' }}><span className='txt'>Food</span></Link>
            <Link to='/technology' style={{ textDecoration: 'none' }}><span className='txt' >Technology</span></Link>
            <Link to='/bollywood' style={{ textDecoration: 'none' }}><span className='txt' >Bollywood</span></Link>
            <Link to='/hollywood' style={{ textDecoration: 'none' }}><span className='txt' >Hollywood</span></Link>
            <Link to='/fitness' style={{ textDecoration: 'none' }}><span className='txt' >Fitness</span></Link>
        </div>
    </div>

    <div>
      <hr className='hrline'/>
    </div>
   </>
  )
}

export default Nav;
