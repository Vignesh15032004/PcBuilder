import React from "react"
import "./Footer.css"
import { Link } from "react-router-dom"


const Footer = () => {
  return (
    <>
      <footer>
        <div className='container grid'>
          <div className='box'>
            <h2>ABOUT US</h2>
            <p classname="text">BuildPC is the first truly remarkable, innovative, high-performance
          online PC builder, PC Maker tool, PC parts compatibility checker to
          build custom PC, assemble PC, custom desktops, custom gaming rigs,
          custom workstation, custom media center, and high power custom
          workstations to provides the juice for all your needs.</p>
            <p>Chose each and every part according to your choice, our advanced
          algorithms under the hood check compatibility of every part with each
          other to make sure you won't spend money on wrong parts. With a
          passion to build custom high-performance computers and custom build
          PC's BuildPC.in is the best place to build your dream workstation,
          gaming rigs, and custom computers.</p>
            <div className='icon flex_space'>
              <i className='fab fa-facebook-f'></i>
              <i className='fab fa-twitter'></i>
              <i className='fab fa-linkedin'></i>
              <i className='fab fa-instagram'></i>
              <i className='fab fa-pinterest'></i>
              <i className='fab fa-youtube'></i>
            </div>
          </div>

          <div className='box'>
            <h2>NAVIGATION</h2>
            <ul>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/About'>About us</Link>
              </li>
              <li>
                <Link to='/Service'>Service</Link>
              </li>
              <li>
                <Link to='/Contact'>Contact Us</Link>
              </li>
              <li>
                <Link to='/Skills'>Skills</Link>
              </li>
            </ul>
          </div>

          <div className='box'>
          <h3>Visit our location</h3>
            <p>ABC Street,Dubai MainRoad<br/> CA 98765,<br/> USA.</p>
            <br />

            <h3>Reach us</h3>
            <span>pcbuilderofficials@gmail.com</span>
            <br />
            <span>+91 6369684058 / +91 9362861717 / +91 9585223129</span>
            <br />
          </div>
        </div>
      </footer>
      <div className='legal'>
        <p>© 2023 All Rights Reserved.</p>
      </div>
    </>
  )
}

export default Footer