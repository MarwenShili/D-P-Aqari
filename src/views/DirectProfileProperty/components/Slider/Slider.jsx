import React, { Component } from 'react';
import Slider from 'react-slick';
import img from '../../../../assets/images/ListSale/Img1.png';
import arrLeft from '../../assets/icons/arrLeft.svg';
import arrRight from '../../assets/icons/arrRight.svg';
import './_Slider.scss';
const SampleNextArrow = () => {
  return (
    <div className='arr'>
      <img src={arrRight} alt='' />
    </div>
  );
};
const SamplePrevArrow = () => {
  return (
    <div className='arr'>
      <img src={arrLeft} alt='' />
    </div>
  );
};
export default function SliderImages({ images }) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };
  return (
    <Slider {...settings}>
      <div className='item_carousel'>
        <img className='img_item' src={img} alt='' />
      </div>
      <div className='item_carousel'>
        <img className='img_item' src={img} alt='' />
      </div>
      <div className='item_carousel'>
        <img className='img_item' src={img} alt='' />
      </div>
      <div className='item_carousel'>
        <img className='img_item' src={img} alt='' />
      </div>
      <div className='item_carousel'>
        <img className='img_item' src={img} alt='' />
      </div>
      <div className='item_carousel'>
        <img className='img_item' src={img} alt='' />
      </div>
    </Slider>
  );
}
