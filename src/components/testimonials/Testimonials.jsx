import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assetes/avatar1.jpg'
import AVTR2 from '../../assetes/avatar2.jpg'
import AVTR3 from '../../assetes/avatar3.jpg'
import AVTR4 from '../../assetes/avatar4.jpg'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar: AVTR1,
    name: 'tina snow',
    riview: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur, neque. Quam reiciendis deleniti tempore hic maiores ut quas laudantium neque inventore, praesentium explicabo. Odit, minus atque aut provident nostrum tenetur.'
  },
  {
    avatar: AVTR2,
    name: 'andy gumilang',
    riview: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur, neque. Quam reiciendis deleniti tempore hic maiores ut quas laudantium neque inventore, praesentium explicabo. Odit, minus atque aut provident nostrum tenetur.'
  },
  {
    avatar: AVTR3,
    name: 'dendy kuswono',
    riview: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur, neque. Quam reiciendis deleniti tempore hic maiores ut quas laudantium neque inventore, praesentium explicabo. Odit, minus atque aut provident nostrum tenetur.'
  },
  {
    avatar: AVTR4,
    name: 'nana the little',
    riview: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur, neque. Quam reiciendis deleniti tempore hic maiores ut quas laudantium neque inventore, praesentium explicabo. Odit, minus atque aut provident nostrum tenetur.'
  },
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>review from client</h5>
      <h2>testimoni</h2>

      <Swiper className="container testimonials__container"
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
      >

      {
        data.map(({avatar, name, riview, index}) =>{
          return(
            <SwiperSlide key={index} className="testimonials">
            <div className="client__avatar">
              <img src={avatar} alt={name} />
            </div>
            <h5 className="client__name">{name}</h5>
            <small className="client__riview">{riview}</small>
          </SwiperSlide>
          )
        })
      }

      </Swiper>
    </section>
  )
}

export default Testimonials