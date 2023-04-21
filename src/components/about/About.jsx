import React from 'react';
import './about.css';
import techie from '../../assets/techie.png';
import {FaAward} from 'react-icons/fa';
import {FiUsers} from 'react-icons/fi';
import {VscFolderActive} from 'react-icons/vsc';

const About = () => {
  return (
    <section id='about'>
      <h5 id='about'> Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about_container">
        <div className="about__me">
          <div className="about__me-image">
            <img className="about--image" src={techie} alt='About Me'/>
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            
            <article className="about__card">
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>3+ Years working</small>
            </article>
            
            <article className="about__card">
              <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>50+ Worldwide</small>
            </article>
            
            <article className="about__card">
              <VscFolderActive className='about__icon'/>
              <h5>Projects</h5>
              <small>10+ Completed projects</small>
            </article>
            
          </div>
        
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum cumque sed magni voluptas, qui amet tempora laudantium repellat eaque! Assumenda nostrum nobis pariatur, eaque praesentium tenetur qui obcaecati autem aliquid?
          </p>
          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About