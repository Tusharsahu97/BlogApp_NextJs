import React, { useRef } from 'react';
import './Contact.css'
import WallmartImg from '../../Assets/walmart.png'
import AdobeImg from '../../Assets/adobe.png'
import MicrosoftImg from '../../Assets/microsoft.png'
import FacebookImg from '../../Assets/facebook.png'
import FacebookIcon from '../../Assets/facebook-icon.png'
import TwitterIcon from '../../Assets/twitter.png'
import YoutubeIcon from '../../Assets/youtube.png'
import InstaIcon from '../../Assets/instagram.png'
import emailjs from '@emailjs/browser'



const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ufasdrl', 'template_amy5bg7', form.current, 'ZBrJ7G_SeG-6PJYaFyUou')
      .then((result) => {
          console.log(result.text);
          e.target.reset();
          alert('Email sent !');
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
   <section id="contactPage">
   {/* <div id="clients">
    <h1 className="contactPageTitle">My Clients</h1>
    <p className="clientDesc">
        I have had the opportunity to work with a diverse group of companies.
        Some of the notable companies I have worked with includes
    </p>
    <div className="clientImgs">
        <img src={WallmartImg} alt="" className="clientImg" />
        <img src={AdobeImg} alt="" className="clientImg" />
        <img src={MicrosoftImg} alt="" className="clientImg" />
        <img src={FacebookImg} alt="" className="clientImg" />
    </div>
   </div> */}
     <div id="contact">
        <h1 className="title">Contact Me</h1>
        <span className='desc'>Please fill out the form below to discuss any work opportunities.</span>
        <form ref={form} className='contactForm'  onSubmit={sendEmail}>
            <input type="text" className='name' placeholder='Your Name' name='your_name'/>
            <input type="email" className='email' placeholder='Your Email' name='your_email' />
            <textarea name="message" className='msg' rows="5" placeholder='Your Message'></textarea>
            <button type='submit' value='send' className='submitBtn'>Submit</button>
            <div className="links">
                <img src={FacebookIcon} alt="FacebookIcon" className='link' />
                <img src={TwitterIcon} alt="TwitterIcon" className='link' />
                <img src={YoutubeIcon} alt="YoutubeIcon" className='link' />
                <img src={InstaIcon} alt="InstaIcon" className='link' />
            </div>
        </form>
     </div>
   </section>
  )
}

export default Contact
