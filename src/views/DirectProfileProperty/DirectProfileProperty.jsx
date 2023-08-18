import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProperty } from "../../data/slices/propertySlice";
import { useTranslation } from "react-i18next";
import { Spin } from "antd";
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

const DirectProfileProperty = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const currentLanguageCode = cookies.get("i18next") || "en";
  const { width } = useWindowSize();
  const [previewImg, setPreviewImg] = useState();
  const [images, setImages] = useState();
  const [property, setProperty] = useState();
  const data = useSelector((state) => state.property);
  const { ref_no } = useParams();

  useEffect(() => {
    dispatch(
      getProperty({
        lang: currentLanguageCode,
        body: { country_id: null, country_code: "IN", id: ref_no },
      })
    );
  }, [currentLanguageCode]);

  useEffect(() => {
    setImages(data?.property?.images);
    setProperty(data?.property);
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
        <EmptyState />
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
                <Specifications
                  items={property?.specification_array}
                  entrance={property?.rooms_array.entrance}
                />
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
              <p className="value_ref">
                {property?.ref_id} <img src={copy} alt="" />
              </p>
            </div>

            <div className="map-mobile">
              <Map property={property} />
            </div>
          </div>

          <div className="right">
            <img
              src={previewImg || property?.images?.[0]}
              alt=""
              className="principal_img"
            />

            <div className="slider slider-pc">
              {property && (
                <ImagesCustomSwiper
                  items={images}
                  setPreviewImg={setPreviewImg}
                />
              )}
            </div>

            <div className="slider slider-mobile">
              {property && (
                <CustomSwiperDetails
                  items={images}
                  setPreviewImg={setPreviewImg}
                />
              )}
            </div>

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
