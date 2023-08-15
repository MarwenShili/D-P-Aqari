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
import fb from "./assets/icons/fb.svg";
import wts from "./assets/icons/whts.svg";
import tw from "./assets/icons/tw.svg";
import copy from "./assets/icons/copy.svg";
import arr from "./assets/icons/arrow.svg";
import { useNavigate, useParams } from "react-router-dom";
import Map from "./components/Map/Map";
import ImagesCustomSwiper from "./components/CustomSwiper/CustomSwiper";
import posIcon from "./assets/icons/pos.svg";
import { ReactComponent as BorderIcon } from "../../assets/icons/property/mdi_paper.svg";
import CustomSwiperDetails from "./components/CustomSwiperDetails/CustomSwiperDetails";

const DirectProfileProperty = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const navigate = useNavigate();

  const [previewImg, setPreviewImg] = useState();
  const [images, setImages] = useState();
  const [property, setProperty] = useState();
  const [loading, setLoading] = useState();

  const data = useSelector((state) => state.property);
  console.log(property);

  useEffect(() => {
    dispatch(
      getProperty({
        lang: "en",
        body: { country_id: null, country_code: "IN", id: "7" },
      })
    );
  }, []);

  useEffect(() => {
    setImages(data?.property?.images);
    setProperty(data?.property);
    setLoading(data.loading);
  }, [data]);

  return (
    <div className="property_details">
      {loading === "loading" && "Loading"}

      {!property ? (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Spin />
        </div>
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
            <div className="items">
              <Specifications items={property?.specifications_array} />
              <RoomsAndOthers items={property?.specifications_array} />
              <Services items={property?.specifications_array} />
              <Facilities items={property?.specifications_array} />
              <Fourniture items={property?.specifications_array} />
            </div>
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
