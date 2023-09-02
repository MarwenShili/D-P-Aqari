import { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { ReactComponent as DefaultLeftIcon } from "./Vector (16).svg";
import { ReactComponent as DefaultRightIcon } from "./Vector (15).svg";
import { Image } from "antd";
const CustomSwiperDetails = ({ items, setPreviewImg, activeImg }) => {
  const rtl = document.body.dir === "rtl";

  const swiperRef = useRef();

  useEffect(() => {
    swiperRef.current?.on("slideChange", () => {
      setPreviewImg(null);
    });
  }, [setPreviewImg]);

  return (
    <div className="slider_one_element">
      <div
        className="btn btn-left"
        onClick={() => {
          setPreviewImg(null);
          swiperRef.current?.slidePrev();
        }}
      >
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
            <Image
              src={activeImg || el}
              alt="img"
              style={{ cursor: "pointer" }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div
        className="btn btn-right"
        onClick={() => {
          setPreviewImg(null);
          swiperRef.current?.slideNext();
        }}
      >
        {rtl ? <DefaultLeftIcon /> : <DefaultRightIcon />}
      </div>
    </div>
  );
};

export default CustomSwiperDetails;
