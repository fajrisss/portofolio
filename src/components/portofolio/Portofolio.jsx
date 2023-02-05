import React from 'react'
import './portofolio.css'
import IMG1 from '../../assetes/portfolio1.jpg'
import IMG2 from '../../assetes/portfolio2.jpg'
import IMG3 from '../../assetes/portfolio3.jpg'
import IMG4 from '../../assetes/portfolio4.jpg'
import IMG5 from '../../assetes/portfolio5.png'
import IMG6 from '../../assetes/portfolio6.jpg'

// ========DEKLARASI DATA YANG AKAN DIMASUKKAN =============

const data =[
  {
    id: 1,
    image: IMG1,
    tittle: 'crypto curency dashboard & financial visualization',
    github: 'https://github.com',
    demo: 'https://dribbble.com'
  },
  {
    id: 2,
    image: IMG2,
    tittle: 'chart teplates & infographics in figma',
    github: 'https://github.com',
    demo: 'https://dribbble.com'
  },
  {
    id: 3,
    image: IMG3,
    tittle: 'figma dashboard UI kit for data design web apps',
    github: 'https://github.com',
    demo: 'https://dribbble.com'
  },
  {
    id: 4,
    image: IMG4,
    tittle: 'maintaning tasks and traking progress',
    github: 'https://github.com',
    demo: 'https://dribbble.com'
  },
  {
    id: 5,
    image: IMG5,
    tittle: 'chart template & inphograpics in figma',
    github: 'https://github.com',
    demo: 'https://dribbble.com'
  },
  {
    id: 6,
    image: IMG6,
    tittle: 'chart template & infographics in figma',
    github: 'https://github.com',
    demo: 'https://dribbble.com'
  },
]

const Portofolio = () => {
  return (
    <section id='portofolio'>
      <h5>my recent work</h5>
      <h2>portfolio</h2>

      <div className="container portfolio__container">

{/* ======= MEMANGGIL DATA YANG SUDAH DISEBUTKAN DENGAN MEMANFAATKAN UNIK ID ========== */}
        {
          data.map(({id, image, title, github, demo }) =>{
            return(
              <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
              <a href={github} className='btn' target='_blank' rel="noreferrer">github</a>
              <a href={demo} className="btn btn-primary" target='_blank' rel="noreferrer">live demo</a>
              </div>
            </article>
            )
          })
        }

      </div>
    </section>
  )
}

export default Portofolio