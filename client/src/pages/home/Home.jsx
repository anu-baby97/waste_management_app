import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import bg from '../../components/images/bg1.jpg'

import "./home.css"


function Home() {
    return (
        <div>
            <Navbar />
            <div class="hero-area hero-bg" style={{ backgroundImage: `url(${bg})` }}>
                <div class="container">
                    <div class="row">
                        <div class="col-lg-9 offset-lg-2 text-center">
                            <div class="hero-text">
                                <div class="hero-text-tablecell">
                                    <h1 class="subtitle">Metal and Non-Metal</h1>
                                    <h1 style={{ color: "green", fontSize:"50px", fontWeight:"900" }}>GO Green</h1>
                                    <h1> Smart Waste Management </h1>
                                    <div class="hero-btns">
                                        <a href="shop.html" class="boxed-btn">Disposal</a>
                                        <a href="contact.html" class="boxed-btn">Recycling</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
