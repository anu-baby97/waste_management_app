import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import bg from '../../components/images/bg1.jpg'

import "./home.css"


function Home() {
    return (
        <div>
            <Navbar />
            <div class="hero-area hero-bg pl-5" >

                <div class="hero-text text-left">
                    <div class="hero-text-tablecell">
                        <h1 style={{width:"50%",fontSize:"60px"}} >Providing the industry-leading solutions you need.</h1><br />
                        <h3 style={{width:"50%",color:"green",fontWeight:"bolder",backgroundColor:"beige",opacity:"0.7",boxShadow:" rgba(0, 0, 0, 0.56) 0px 22px 70px 4px"}}>Our reliable services protect the environment while allowing your home or business to run like clockwork.</h3>

                        {/* <div class="hero-btns">
                            <a href="shop.html" class="boxed-btn">Disposal</a>
                            <a href="contact.html" class="boxed-btn">Recycling</a>
                        </div> */}
                    </div>
                </div>
            </div>
            </div>
    )
}

export default Home
