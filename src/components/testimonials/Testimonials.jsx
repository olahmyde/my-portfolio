import React from 'react'
import './testimonials.css';
import avatar1 from '../../assets/avatar1.jpg';
import avatar2 from '../../assets/avatar2.jpg';
import avatar3 from '../../assets/avatar3.jpg';
import avatar4 from '../../assets/avatar4.jpg';

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        <SwiperSlide className='testimonial'>
          <div className="client__avatar">
            <img src={avatar1} alt='Avatar one' />
          </div>
          <h5 className="client__name">Alexandra Onyebuchi</h5>
          <small className='client__review'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis, temporibus unde! Amet non sapiente quasi nemo soluta necessitatibus aliquam distinctio corporis quaerat eligendi, ut saepe fugit dolore eveniet rerum. Explicabo!
          </small>
        </SwiperSlide>

        <SwiperSlide className='testimonial'>
          <div className="client__avatar">
            <img src={avatar2} alt='Avatar two' />
          </div>
          <h5 className="client__name">John Snow</h5>
          <small className='client__review'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis, temporibus unde! Amet non sapiente quasi nemo soluta necessitatibus aliquam distinctio corporis quaerat eligendi, ut saepe fugit dolore eveniet rerum. Explicabo!
          </small>
        </SwiperSlide>

        <SwiperSlide className='testimonial'>
          <div className="client__avatar">
            <img src={avatar3} alt='Avatar three' />
          </div>
          <h5 className="client__name">Tobe Nwigwe</h5>
          <small className='client__review'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis, temporibus unde! Amet non sapiente quasi nemo soluta necessitatibus aliquam distinctio corporis quaerat eligendi, ut saepe fugit dolore eveniet rerum. Explicabo!
          </small>
        </SwiperSlide>

        <SwiperSlide className='testimonial'>
          <div className="client__avatar">
            <img src={avatar4} alt='Avatar four' />
          </div>
          <h5 className="client__name">Anthonette Jared</h5>
          <small className='client__review'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis, temporibus unde! Amet non sapiente quasi nemo soluta necessitatibus aliquam distinctio corporis quaerat eligendi, ut saepe fugit dolore eveniet rerum. Explicabo!
          </small>
        </SwiperSlide>
      </Swiper>
    </section>
  )
}

export default Testimonials