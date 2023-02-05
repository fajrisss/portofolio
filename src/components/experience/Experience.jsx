import React from 'react'
import './experience.css'
import {AiFillCheckCircle} from 'react-icons/ai'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>what skils i have</h5>
      <h2>my experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>frontend development</h3>
          <div className="experience__content">
            <article className="experience__detail">
              <AiFillCheckCircle className="experience__details-icon"/>
              <div>
                <h4>HTML</h4>
                <small className="text-light">experienced</small>
              </div>
            </article>
            <article className="experience__detail">
              <AiFillCheckCircle className="experience__details-icon"/>
              <div>
                <h4>CSS</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__detail">
              <AiFillCheckCircle className="experience__details-icon"/>
              <div>
                <h4>JavaScript</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__detail">
              <AiFillCheckCircle className="experience__details-icon"/>
              <div>
                <h4>Bootsrap</h4>
                <small className="text-light">experienced</small>
              </div>
            </article>
            <article className="experience__detail">
              <AiFillCheckCircle className="experience__details-icon"/>
              <div>
                <h4>React</h4>
                <small className="text-light">experienced</small>
              </div>
            </article>
          </div>
        </div>
        <div className="experience__backend">
        <h3>backend development</h3>
        <div className="experience__content">
            <article className="experience__detail">
              <AiFillCheckCircle className="experience__details-icon"/>
              <div>
                <h4>HTML</h4>
                <small className="text-light">experienced</small>
              </div>
            </article>
            <article className="experience__detail">
              <AiFillCheckCircle className="experience__details-icon"/>
              <div>
                <h4>CSS</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__detail">
              <AiFillCheckCircle className="experience__details-icon"/>
              <div>
                <h4>JavaScript</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__detail">
              <AiFillCheckCircle className="experience__details-icon"/>
              <div>
                <h4>Bootsrap</h4>
                <small className="text-light">experienced</small>
              </div>
            </article>
            <article className="experience__detail">
              <AiFillCheckCircle className="experience__details-icon"/>
              <div>
                <h4>React</h4>
                <small className="text-light">experienced</small>
              </div>
            </article>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Experience