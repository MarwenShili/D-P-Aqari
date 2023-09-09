import "./_Services.scss";
import Tag from "../Tag/Tag";
import { useTranslation } from "react-i18next";
import { allValuesFalsy } from "../../../../helpers/allValuesFalsy";

function Services({ items }) {
  const { t } = useTranslation();

  const handleInternet = (str) => {
    if (str.length > 0) {
      return str.split(",").map((el) => el);
    }
  };

  // console.log("Services", allValuesFalsy(items));
  if (allValuesFalsy(items)) {
    return null;
  }
  return (
    <div className="specifications">
      <p className="title_s">{t("property_details.Services")} :</p>
      <div className="tags">
        {items?.reception_service === "yes" && (
          <Tag
            title={t("services.reception_services")}
            background="rgba(255, 199, 0, 0.15)"
          />
        )}
        {items?.guard_service === "yes" && (
          <Tag
            title={t("services.guard_services")}
            background="rgba(255, 199, 0, 0.15)"
          />
        )}
        {items?.internet_available && (
          <>
            {handleInternet(items?.internet_available).map((el, index) => (
              <Tag title={el} background="rgba(255, 199, 0, 0.15)" />
            ))}
          </>
        )}
        {items?.internet_can_install && (
          <Tag
            title={items.internet_can_install}
            background="rgba(255, 199, 0, 0.15)"
          />
        )}
        {items?.landline && (
          <Tag title={items?.landline} background="rgba(255, 199, 0, 0.15)" />
        )}
        {items?.water_service && (
          <Tag
            title={items?.water_service}
            background="rgba(255, 199, 0, 0.15)"
          />
        )}
        {items?.electricity_service && (
          <Tag
            title={items?.electricity_service}
            background="rgba(255, 199, 0, 0.15)"
          />
        )}
      </div>
    </div>
  );
}

export default Services;
