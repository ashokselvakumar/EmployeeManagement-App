import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const slides = [
    {
      image: 'https://media.istockphoto.com/id/1465568487/photo/colleagues-watching-something-on-laptop-while-at-the-office.jpg?s=1024x1024&w=is&k=20&c=nAKXjxF54Qv8ECp36cst-6j1lv0BK6ypvRykn1OaWkw=',
      text: 'Effective Employee Management',
      text2: 'Building a High-Performing Team',
    },
    {
      image: 'https://media.istockphoto.com/id/1487231759/photo/diverse-colleagues-working-together-on-digital-tablet.jpg?s=1024x1024&w=is&k=20&c=guiVCax1dVp1ZUu8_FaM2EqG6DqiAghVmn5zw21edMA=',
      text: 'Setting Clear Expectations',
      text2:'Define roles and responsibilities , Communicate performance goals',
      
    },
    {
      image: 'https://media.istockphoto.com/id/1473508665/photo/administration-teamwork-office-documents-or-people-review-financial-data-finance-funding-or.jpg?s=1024x1024&w=is&k=20&c=7S4FyaQ0_TBEf4mRFuguACbapN2U2u8Kt_DyB-laGUc=',
      text: 'Recognizing and Appreciating Your Team',
      text2:'Acknowledge achievements and milestones , Celebrate individual and team successes',
    },
    // Add more slides as needed
  ];

  return (
    <Slider {...settings}>
      {slides.map((slide, index) => (
        <div key={index} className="slide-container">
          <img src={slide.image} alt={`slide-${index}`} />
          <div className="text-overlay">
            <h2>{slide.text}</h2>
            <h4>{slide.text2}</h4>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default Carousel;
