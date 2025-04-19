import React, { useState } from 'react'
import './About.css'
import about_img from '../../assets/images/about_image.png'
// import './About'

const About = () => {

    const [toggle, setToggle] = useState('experience');

    function updateToggle(id){
        setToggle(id);
    }


  return (
    <div className='about container' id='about'>
        <h1 className='h1'>About</h1>
        <div className='about-body'>
            <div className='about-left'>
                <div className='about-img'>
                    <img src={about_img} alt='' />
                </div>
            </div>
            <div className='about-right'>
                <h3>Who Am I</h3>
                <p>
                I’m a full-stack developer with a passion for crafting efficient and scalable web applications. With a background in Information and Communication Technology and hands-on experience in both front-end and back-end development, I enjoy creating digital solutions that are both functional and visually appealing.
                </p>
                <div className='about-section'>
                    <div className='btn-container'>
                        <button onClick={()=>updateToggle('experience')} className={toggle === "experience" ? "tab-btn active" : "tab-btn"} datatype='experience'>Experience</button>
                        <button onClick={()=>updateToggle('education')} className={toggle === "education" ? "tab-btn active" : "tab-btn"} datatype='eduction'>Education</button>

                    </div>
                    <article className={toggle === "experience" ?  "content active" : "content"} id='experience'>
                        <h4>Experience</h4>
                        <p>2+ years of experience in web development</p>
                        <p>2+ years of experience in IT assistant</p>

                    </article>
                    <article className={toggle === "education" ?  "content active" : "content"} id='education'>
                        <h4>Education</h4>
                        <p>HND in Information and Communication Technology</p>

                    </article>
                </div>
            </div>
        </div>

    </div>
  )
}
export default About