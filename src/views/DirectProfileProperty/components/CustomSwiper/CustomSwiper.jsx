import { useRef } from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";

import { ReactComponent as DefaultLeftIcon } from "../../../../assets/icons/landing/left.svg";
import { ReactComponent as DefaultRightIcon } from "../../../../assets/icons/landing/right.svg";

const ImagesCustomSwiper = ({ items, setPreviewImg }) => {
  const rtl = document.body.dir === "rtl";

  const swiperRef = useRef();

  return (
    <>
      <div className="btn" onClick={() => swiperRef.current?.slidePrev()}>
        {rtl ? <DefaultRightIcon /> : <DefaultLeftIcon />}
      </div>
      <Swiper
        rtl={rtl}
        slidesPerView={2}
        spaceBetween={12}
        breakpoints={{
          2560: {
            slidesPerView: items?.length > 3 ? 4 : items?.length,
          },
          1440: {
            slidesPerView: items?.length > 3 ? 4 : items?.length,
          },
          1024: {
            slidesPerView: items?.length > 3 ? 4 : items?.length,
          },
          768: {
            slidesPerView: items?.length > 3 ? 4 : items?.length,
          },
          500: {
            slidesPerView: items?.length > 2 ? 3 : items?.length,
          },
          425: {
            slidesPerView: items?.length > 1 ? 2 : items?.length,
          },
        }}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
      >
        {items?.map((el, index) => (
          <SwiperSlide key={index}>
            <img
              src={el}
              alt="img"
              onClick={() => setPreviewImg(el)}
              style={{ cursor: "pointer" }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="btn" onClick={() => swiperRef.current?.slideNext()}>
        {rtl ? <DefaultLeftIcon /> : <DefaultRightIcon />}
      </div>
    </>
  );
};

export default ImagesCustomSwiper;
