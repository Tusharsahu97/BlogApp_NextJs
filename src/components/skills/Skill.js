import React from 'react'
import './Skill.css'
import UIDesign from '../../Assets/ui-design.png'
import WebDesign from '../../Assets/website-design.png'
import AppDesign from '../../Assets/app-design.png'
const Skill = () => {
  return (
    <section id='skills'>
       <span className="skillTitle">What I do</span>
       <span className="skillDesc">I am a skilled and passionate web developer with experience in creating visually appealing and user-friendly 
       websites.I have a strong understanding of design and a keen eye for detail.I am proficient in HTML,CSS,JavaScript,React-JS,NextJS as well as backend software such as ExpressJS, Mongodb,PHP,MYSQL.</span>
       <div className="skillBars">
          <div className="skillBar">
            <img src={UIDesign} alt="UIDesign" className='skillBarImg'/>
            <div className="skillBarText">
                <h2>WebSite Design</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, recusandae!</p>
            </div>
          </div>
          {/* <div className="skillBar">
            <img src={WebDesign} alt="WebDesign" className='skillBarImg'/>
            <div className="skillBarText">
                <h2>WebSite Devlopment</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem, libero?</p>
            </div>
          </div> */}
          <div className="skillBar">
            <img src={AppDesign} alt="AppDesign" className='skillBarImg'/>
            <div className="skillBarText">
                <h2>WebSite Devlopment</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus, praesentium!</p>
            </div>
          </div>
       </div>
    </section>
  )
}

export default Skill
