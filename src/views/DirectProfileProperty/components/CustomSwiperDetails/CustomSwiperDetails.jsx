import { useRef } from 'react';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';

import { ReactComponent as DefaultLeftIcon } from './Vector (16).svg';
import { ReactComponent as DefaultRightIcon } from './Vector (15).svg';

const CustomSwiperDetails = ({ items, setPreviewImg }) => {
  const rtl = document.body.dir === 'rtl';

  const swiperRef = useRef();

  return (
    <>
      <div className='btn btn-left' onClick={() => swiperRef.current?.slidePrev()}>
        {rtl ? <DefaultRightIcon /> : <DefaultLeftIcon />}
      </div>
      <Swiper
        rtl={rtl}
        slidesPerView={1}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
      >
        {items?.map((el, index) => (
          <SwiperSlide key={index}>
            <img
              src={el}
              alt='img'
              onClick={() => setPreviewImg(el)}
              style={{ cursor: 'pointer' }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className='btn btn-right' onClick={() => swiperRef.current?.slideNext()}>
        {rtl ? <DefaultLeftIcon /> : <DefaultRightIcon />}
      </div>
    </>
  );
};

export default CustomSwiperDetails;
