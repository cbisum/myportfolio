import React from 'react'
import './Projects.scss'
import img from '../../Assets/project1.JPG'
import img2 from '../../Assets/project2.JPG'
import img3 from '../../Assets/project3.JPG'
import img4 from '../../Assets/project4.JPG'

function Projects() {
  return (
    <div className='Porject_Container'>
      <div className='name_label'>
        <span>My Projects</span>
      </div>

        <div className='project_list_container'>
          <div className='project'>
            <img alt='porject' src={img}/>
            <div className='project_button'>
              <button><a  alt='link' href='https://cb-pshare.herokuapp.com/' target='blank'>preview</a></button>

              <button><a  alt='link' href='https://github.com/cibisum/pshare-server' target='blank'>Github</a></button>

            </div>
          </div>
          <div className='project'>
            <img alt='porject' src={img2}/>
            <div className='project_button'>
              <button><a alt='link' href='https://cb-corona-app.herokuapp.com/' target='blank'>preview</a></button>

              <button><a  alt='link' href='https://github.com/cibisum/Corona-virus-app' target='blank'>Github</a></button>


            </div>
          </div>
          <div className='project'>
            <img alt='porject' src={img3}/>
            <div className='project_button'>
              <button><a alt='link' href='https://cb-chatapp.herokuapp.com/' target='blank'>preview</a></button>

              <button><a  alt='link' href='https://github.com/cibisum/RealtimeChatapp' target='blank'>Github</a></button>



            </div>
          </div>
          <div className='project'>
            <img alt='porject' src={img4}/>
            <div className='project_button'>
              <button><a alt='link' href='https://cb-weatherapp.herokuapp.com/' target='blank'>preview</a></button>


              <button><a  alt='link' href='https://github.com/cibisum/forecast' target='blank'>Github</a></button>


            </div>
          </div>





        </div>
      
     


    </div>
  )
}

export default Projects
