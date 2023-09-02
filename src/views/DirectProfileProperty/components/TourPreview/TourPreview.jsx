import React from "react";
import "./_TourPreview.scss";
import tourIcon from "../../../../assets/icons/tour.svg";
import { useTranslation } from "react-i18next";

function TourPreview({ tourLink, vr_main_image }) {
  const { t } = useTranslation();

  const handleButtonClick = () => {
    if (tourLink) {
      window.open(tourLink, "_blank");
    }
  };

  return (
    <div className="tour" onClick={handleButtonClick}>
      <img
        // src="https://imaging-ss-t.com/uploads/slider_images/2169141732282209.png"
        src={vr_main_image}
        alt=""
        className="img_1"
      />
      <div className="action">
        <img className="img_2" src={tourIcon} alt="" />
        <p>{t("tour.tour_text")}</p>
      </div>
    </div>
  );
}

export default TourPreview;
