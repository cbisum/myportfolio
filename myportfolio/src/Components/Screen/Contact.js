import React, { useState } from 'react'
import './Contact.scss'
import linkedin from '../../Assets/linkedin.png'
import twitter from '../../Assets/twitter.png'
import github from '../../Assets/github.png'
import dev from '../../Assets/dev.png'



function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [body, setBody] = useState('')


  const sendData =()=>{
    fetch('/sendmail',{
      method:'post',
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        name,
        email,
        subject,
        body
      })
    })
    .then(res=>res.json())
    .then(data=>{
      const x = document.getElementById("snackbar");
      x.innerText =data.message
      x.className = "show";
      setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
      // alert(data.message)
      setName('')
      setEmail('')      
      setSubject('')      
      setBody('')

   
    }).catch((error)=>{
      console.log(error)
    })
  }

  return (
    <div className='contact_container'>

        <div className='contact_level'>
          <span>Contact Me</span>
        </div>

    <div className='contact_information'>

      <div className='contact_left' >
          <div className='contact_left_message'>
          <span>If you have anything related to Web or Mobile related Task or have an offer please send me a message. </span>
          </div>

          <div className='contact_left_icons'>
            <a target='blank' href='https://www.linkedin.com/in/cbisum/' alt='img'><img alt='img' src={linkedin} /></a>

            
            <a target='blank' href='https://twitter.com/Cbisum_' alt='img'><img alt='img' src={twitter} /></a>

            <a target='blank' href='https://github.com/cibisum' alt='img'><img alt='img' src={github} /></a>


            <a target='blank' href='https://dev.to/cbisum' alt='img'><img alt='img' src={dev} /></a>

          
            
          </div>
          
          
      </div>

      <div className='contact_right'>
      <h1>Send me a message</h1>
        <input 
        type='text' 
        value={name} 
        onChange={(e)=>{
          setName(e.target.value)
        }}
        placeholder='Name' />
       
        <input 
        required
        type='email' 
        onChange={(e)=>{
          setEmail(e.target.value)
        }}
        value={email} 
        placeholder='Email *' />
    
        <input 
        type='text' 
        value={subject} 
        onChange={(e)=>{
          setSubject(e.target.value)
        }}
        placeholder='Subject' />

        <textarea 
        value={body} 
        placeholder='Message *'
        onChange={(e)=>{
          setBody(e.target.value)
        }} 
        name="w3review" 
        rows="8" 
        cols="30" />
        <button onClick={sendData}>
          Send
        </button>
      </div>
    
    </div>
    
    <div id="snackbar"></div>
    </div>
  )
}

export default Contact
