import React from 'react'
import img2 from '../assets/img2.jpg'
import img3 from '../assets/img3.jpg'
import img4 from '../assets/img4.jpg'
const Content = () => {
  return (
    <main className="content container">
         <div className='hero-content'>
            <h1>Deliver Balanced Sound profile and Reliable Wireless Connection</h1> 
            <p>onepus Z2 offer a compelling combination of great audio performance and effecive noise cancellation at an affordable price</p>
            <div className="hero-button">
                <button className='button1'>SHOP NOW</button>
                <button className='button1'>Category</button>
               
                </div>
                <div className="shopping">
                    <p>Also Available in</p>
                    <div className='icons'>
                       <a href="https://dl.flipkart.com/s/ISN2Q5NNNN"><img src={img3} /></a>
                       <a href="https://amzn.in/d/9sHOSYb"><img src={img4} /></a>
                    </div>
            </div>
            </div>
         <div className='hero-img'>
            <img src={img2}/>
            <h4 className='para'>oneplus Bullets Wireless Z2</h4>
         </div>
    </main>
   
  )
}

export default Content