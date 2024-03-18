import React from 'react'
import './Intro.css'
import bg from '../../Assets/mypic.jpg'
import btnImg from '../../Assets/hireme.png'
import { Link } from 'react-scroll'
const Intro = () => {
  return (
   <section id="intro">
    <div className="introContent">
        <span className="hello">Hello,</span>
        <span className="introText">I'm <span className="introName">Tushar</span><br/>Website Developer</span>
        <p className='introPara'>I am a skilled web designer/developer with experience<br/> in creating visual appealing and user friendly websites.</p>
      <Link>
        <button className="btn"><img src={btnImg} alt="" className='btnImg'/>Hire Me</button>
      </Link>
    </div>
   
    <img src={bg} alt="profile" className='bg'/>
   
  
   </section>
  )
}

export default Intro;
