import React from 'react'
import "./HeroPage.css";
import HeroImage from './../Images/HeroImage.png'

function HeroPage() {
  return (
  <>

    <section class="about" id="about">
    
       
    
        <div class="row">
    
            <div class="image">
                <img src={HeroImage} alt=""/>
            </div>
    
            <div class="content">
                <h3>Enjoy Your <br/>
                Delicious Food </h3>
                <p>We Serve Hygiene Food at a affordable Price. Our Chef are Fully Professional and are best at thier work</p>
                <p>Take a bite from our best Deal.</p>
                <a href="#" class="btn">Explore</a>
                <div class="icons-container">
                    <div class="icons">
                        <i class="fas fa-shipping-fast"></i>
                        <span>20 min delivery</span>
                    </div>
                    <div class="icons">
                        <i class="fas fa-dollar-sign"></i>
                        <span>easy payments</span>
                    </div>
                   
                </div>
                {/* <a href="#" class="btn">learn more</a> */}
            </div>
    
        </div>
    
    </section>
    </>
  )
}

export default HeroPage