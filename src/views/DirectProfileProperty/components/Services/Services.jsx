import "./_Services.scss";
import Tag from "../Tag/Tag";
import { useTranslation } from "react-i18next";

function Services({ items }) {
  const { t } = useTranslation();
  console.log(items);

  return (
    <div className="specifications">
      <p className="title_s">{t("property_details.Services")} :</p>
      <div className="tags">
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
        {items?.landline && (
          <Tag title={items?.landline} background="rgba(255, 199, 0, 0.15)" />
        )}
        {items?.guard_service && (
          <Tag
            title={items?.guard_service}
            background="rgba(255, 199, 0, 0.15)"
          />
        )}
        {items?.reception_service && (
          <Tag
            title={items?.reception_service}
            background="rgba(255, 199, 0, 0.15)"
          />
        )}
        {items?.internet_dsl && (
          <Tag
            title={items?.internet_dsl}
            background="rgba(255, 199, 0, 0.15)"
          />
        )}
        {items?.internet_fiber && (
          <Tag
            title={items?.internet_fiber}
            background="rgba(255, 199, 0, 0.15)"
          />
        )}
      </div>
    </div>
  );
}

export default Services;
