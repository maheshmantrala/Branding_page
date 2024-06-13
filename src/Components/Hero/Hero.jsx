import React from 'react'
import img1 from '../../assets/img1.jpg'


import './Hero.css'
const Hero = () => {
  return (
    <div className='hero'>
        <div className='logo'>
    <nav className='container'>
     <img src={img1} />
     <ul className='menu'>
       <li ><a>Menu</a></li>
       <li ><a>Location</a></li>
       <li ><a>About</a></li>
       <li ><a>Contact</a></li>
     </ul>
     <button  className='button1'>Login</button>
    </nav>
    </div>
    
   </div>


  )
}

export default Hero