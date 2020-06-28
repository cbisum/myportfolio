import React, {  useState} from 'react'
import './Navbar.scss'
import {Link} from 'react-router-dom'


function Navbar() {
    const [menuOpen,setMenuOpen] = useState(false)
   

    const toogleFunction=()=>{
        let menuBtn = document.querySelector('.menu-btn')
        let sideNav = document.querySelector('.sidenav')
        
        
    
    if(!menuOpen){
        menuBtn.classList.add('open')
        setMenuOpen(true)
        sideNav.style.top = '104px'
      
    }else{
        menuBtn.classList.remove('open')
        setMenuOpen(false) 
        sideNav.style.top = '-400px'
        
     
    }
   
    }
 


  return (
      <>
      
      <nav>
          <div className='logo'>
              <li><Link className='link' to='/'>CB</Link></li>
          </div>
          
          {/* default nav */}
          <div className='rightnav'>
              <ul>
                  <li><Link  className='link' to='/About'>About Me</Link></li>
                  <li><Link  className='link' to='/Skills'>Skills</Link></li>
                  <li><Link  className='link' to='/projects'>Projects</Link></li>
                  <li><Link  className='link' to='/contact'>Contact</Link></li>
                  <div className='underbar'></div>
              </ul>
          </div>
          <div className='menu-btn' onClick={toogleFunction}>
              <div className='menu-btn_burger'>

              </div>
          </div>
      </nav>

      {/* side nav */}
      <div className='sidenav'>
      <ul>
                  <li><Link  className='link' to='/About'>About Me</Link></li>
                  <li><Link  className='link' to='/Skills'>Skills</Link></li>
                  <li><Link  className='link' to='/projects'>Projects</Link></li>
                  <li><Link className='link' to='/contact'>Contact</Link></li>
                  <div className='underbar'></div>
              </ul>
          </div>
      <div className='animation'>
        
      </div>
      </>
    )
}

export default Navbar
