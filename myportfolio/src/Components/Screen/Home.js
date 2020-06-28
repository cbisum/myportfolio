import React from 'react'
import './Home.scss'
import Particles from 'react-particles-js'
import profile from '../../Assets/profile.jpg'

function Home() {
  return (
    <div className='home'>
   
      <Particles canvasClassName='particle'
        params={{
          "particles": {
            "number": {
              "value": 2,
              "density": {
                "enable": true,
                "value_area": 1000
              }
            },
            "color": {
              "value": "#99ff99"
            },
            "shape": {
              "type": "polygon",
              "stroke": {
                "width": 0,
                "color": "#000"
              },
              "polygon": {
                "nb_sides": 5
              },
            },
            "opacity": {
              "value": 0.2,
              "random": false,
              "anim": {
                "enable": false,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
              }
            },
            "size": {
              "value": 100,
              "random": true,
              "anim": {
                "enable": true,
                "speed": 20,
                "size_min": 50,
                "sync": false
              }
            },
            "line_linked": {
              "enable": false,
              "distance": 200,
              "color": "#ffffff",
              "opacity": 1,
              "width": 2
            },
            "move": {
              "enable": true,
              "speed": 8,
              "direction": "none",
              "random": false,
              "straight": false,
              "out_mode": "out",
              "bounce": false,
              "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
              }
            }
          },
          "interactivity": {
            "detect_on": "canvas",
            "events": {
              "onhover": {
                "enable": true,
                "mode": "grab"
              },
              "onclick": {
                "enable": true,
                "mode": "push"
              },
              "resize": true
            },
            "modes": {
              "grab": {
                "distance": 400,
                "line_linked": {
                  "opacity": 1
                }
              },
              "bubble": {
                "distance": 400,
                "size": 40,
                "duration": 2,
                "opacity": 8,
                "speed": 3
              },
              "repulse": {
                "distance": 200,
                "duration": 0.4
              },
              "push": {
                "particles_nb": 2
              },
              "remove": {
                "particles_nb": 2
              }
            }
          },
          "retina_detect": true
        }} />

        <div className='home1'>
        <div className='lhome'>
          <h1  className='intro'> Hi,</h1>
          <h1  className='intro'> I'm <span className='underline_magic'> Chandra Shrestha,</span></h1>
          <h1  className='intro'> <span className='underline_magic'> Web developer,</span></h1>
          <p className='introp'>Full stack developer / Freelancer</p>
          <a href='/contact' className='contact_me'>Connect Me</a>
        </div>

        <div className='rhome'>
          <img alt='My pic' className='img' src={profile} />
        </div>

        </div>

     
   </div>
  )
}

export default Home
