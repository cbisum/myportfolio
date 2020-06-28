import React from 'react'
import './About.scss'
import bgProfile from '../../Assets/img.png'
import rocket from '../../Assets/img2.png'

function About() {

  const deletepic = () => {
    const ele = document.querySelector('.rocketpic')

    if (window.location.pathname === '/About')
      ele.style.opacity = 0;

  }

  return (
    <div className='about'>
    
      <div className='left_inner_div'>
        <img alt='img' className='A_BGI' src={bgProfile} />
      </div>
    

      
        <div className='right_inner_div'>
              <div className='rocket'>
                <img alt='img' onLoad={()=>{
                  setTimeout(deletepic,5800)
                }} className='rocketpic' atl='rocket' src={rocket} />
              </div>
            <div className='right_inner_inner_div'>
            <h1>About Me</h1>
             <p>Meticulous and passionate Software Developer with a strong academic background and some commercial experience. Ability to think through a problem coupled with the confidence to make ideas heard. Strong professional with a Bachelor of Information Technology focused on Web Development from Federation University Australia. Aspired to be a leader in the field of software development.</p>
            <button >
               <a atl='link' href='https://drive.google.com/file/d/1YiF7oBsL9ZuxH9tqysBD6juuPlZ_xbYR/view?usp=sharing' target='blank'>
               <i className="material-icons">cloud_download</i>
                <span className="tooltiptext">Download Resume</span>
               </a>
            </button> 

            </div>
        </div>
    </div>
  )
}

export default About
