import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProperty } from "../../data/slices/propertySlice";
import { useTranslation } from "react-i18next";
import { Image, Spin } from "antd";
import Specifications from "./components/Specifications/specifications";
import RoomsAndOthers from "./components/RoomsAndOthers/RoomsAndOthers";
import Services from "./components/Services/Services";
import Facilities from "./components/Facilities/Facilities";
import Fourniture from "./components/Fourniture/Fourniture";
import copy from "./assets/icons/copy.svg";
import { useParams } from "react-router-dom";
import Map from "./components/Map/Map";
import ImagesCustomSwiper from "./components/CustomSwiper/CustomSwiper";
import posIcon from "./assets/icons/pos.svg";
import CustomSwiperDetails from "./components/CustomSwiperDetails/CustomSwiperDetails";
import cookies from "js-cookie";
import useWindowSize from "../../hooks/useWindowSize";
import MobileTab from "./components/MobileTab/MobileTab";
import EmptyState from "./components/EmptyState/EmptyState";
import { copyToClipboard } from "../../helpers/CopyToClipboard";
import { FileType } from "../../helpers/filterImages";
import VideoComponent from "./components/VideoDemo/VideoDemo";
import MediaEmptyState from "../../components/MediaEmptyState/MediaEmptyState";
import { openLinkInNewWindow } from "../../helpers/openMediaLink";

const DirectProfileProperty = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const currentLanguageCode = cookies.get("i18next") || "en";
  const { width } = useWindowSize();
  const [previewImg, setPreviewImg] = useState();
  const [images, setImages] = useState([]);
  const [videos, setVideos] = useState([]);
  console.log(videos);
  const [property, setProperty] = useState();
  const data = useSelector((state) => state.property);
  const { ref_no } = useParams();

  useEffect(() => {
    dispatch(
      getProperty({
        lang: currentLanguageCode,
        body: { country_id: null, country_code: "IN", ref_id: ref_no },
      })
    );
  }, [currentLanguageCode]);

  //managing media

  useEffect(() => {
    setProperty(data?.property);
    setPreviewImg(data?.property?.main_image);
    // if (data?.property?.images) {
    //   setImages(data?.property?.images);
    // }
    // if (data?.property?.videos) {
    //   setVideos((prev) => [...prev, ...data?.property?.videos]);
    // }
    // if (data?.property?.url) {
    //   setVideos((prevData) => [...prevData, ...data?.property.url]);
    // }
    // //condition related to : if no images and have videos
    // if (!data?.property?.images || data?.property?.images?.length === 0) {
    //   if (data?.property?.videos) {
    //     setPreviewImg(data?.property.videos[0]);
    //   }
    // }

    //condition related to : if no images and no vr tours and  have one videos
  }, [data]);

  if (data.loading === "loading") {
    return (
      <div className="spin_page">
        <Spin />
      </div>
    );
  }
  if (!property) {
    return (
      <div className="spin_page">
        <EmptyState text={t("property_details.no_data")} />
      </div>
    );
  }

  return (
    <div className="property_details">
      {!property ? (
        <></>
      ) : (
        <div className="content">
          <div className="left">
            <p className="title">{property?.name}</p>
            <span className="position">
              <img src={posIcon} alt="" />
              {property?.country +
                ", " +
                property?.state +
                ", " +
                property?.city +
                ", " +
                property?.area}
            </span>
            <p className="description">{property?.details}</p>
            {width > 900 ? (
              <div className="items">
                <Specifications items={property?.specification_array} />
                <RoomsAndOthers items={property?.rooms_array} />
                <Services items={property?.services_array} />
                <Facilities items={property?.specification_facilities_array} />
                <Fourniture items={property?.furniture_array} />
              </div>
            ) : (
              <MobileTab property={property} />
            )}
            <div className="ref_num">
              <p className="title_ref">
                {t("property_details.Reference_number")} :
              </p>
              <p
                className="value_ref"
                onClick={() => copyToClipboard(property?.ref_id)}
              >
                {property?.ref_id} <img src={copy} alt="" />
              </p>
            </div>

            <div className="map-mobile">
              <Map property={property} />
            </div>
          </div>

          <div className="right">
            <Image
              src={previewImg || property?.images?.[0]}
              className="principal_img"
              width="100%"
              preview={false}
              onClick={openLinkInNewWindow}
            />
            {/* {FileType(previewImg) === "mp4" ? (
              <VideoComponent videoLink={previewImg} type="preview" />
            ) : (
              <>
                {images?.length === 0 ? (
                  <MediaEmptyState />
                ) : (
                  <Image
                    src={previewImg || property?.images?.[0]}
                    className="principal_img"
                    width="100%"
                  ></Image>
                )}
              </>
            )} */}
            {/* <div className="slider slider-mobile">
              {property && (
                <>
                  {images?.length === 0 ? (
                    <></>
                  ) : (
                    <>
                      {FileType(previewImg) === "img" && (
                        <div className="one_slider_images">
                          <CustomSwiperDetails
                            items={images}
                            setPreviewImg={setPreviewImg}
                            activeImg={previewImg}
                          />
                        </div>
                      )}
                    </>
                  )}
                </>
              )}
            </div> */}
            {/* <div className="slider slider-pc slider_web_images">
              {property && (
                <>
                  {images?.length === 0 ? (
                    <></>
                  ) : (
                    <ImagesCustomSwiper
                      items={images}
                      setPreviewImg={setPreviewImg}
                    />
                  )}
                </>
              )}
            </div> */}
            {/* {videos.length > 0 && (
              <div className="slider slider-pc slider_web_videos">
                {property && (
                  <ImagesCustomSwiper
                    // items={[...property?.videos, ...property?.url]}
                    items={videos}
                    setPreviewImg={setPreviewImg}
                    vr_main_image={property?.vr_main_image}
                  />
                )}
              </div>
            )} */}

            <div className="map">
              <Map property={property} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DirectProfileProperty;
