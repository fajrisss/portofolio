/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import './about.css'
import Me from '../../assetes/me-about.jpg'
import {GiAchievement} from 'react-icons/gi'
import {HiUserGroup} from 'react-icons/hi'
import {MdTask} from 'react-icons/md'

const About = () => {
  return (
    <section id='about'>
      <h5>Get to know</h5>
      <h2>about me!</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={Me} alt="About Image" />
          </div>
        </div>

          <div className="about__content">
            <div className="about__cards">
              <article className='about__card'>
                <GiAchievement className='about__icon'/>
                <h5>Experience</h5>
                <small>1 year expirience in ReactJS</small>
              </article>

              <article className='about__card'>
                <HiUserGroup className='about__icon'/>
                <h5>Clients</h5>
                <small>3 total client</small>
              </article>

              <article className='about__card'>
                <MdTask className='about__icon'/>
                <h5>Projects</h5>
                <small>5 Completed Projects</small>
              </article>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores vitae fugit distinctio optio totam eligendi ipsam perspiciatis repellat beatae, doloremque numquam voluptatem quisquam harum dolores illo aut! Officiis, aliquid incidunt.</p>

              <a href="#contact" className='btn btn-primary'>Let's Talk</a>
          </div>
        
      </div>
    </section>
  )
}

export default About