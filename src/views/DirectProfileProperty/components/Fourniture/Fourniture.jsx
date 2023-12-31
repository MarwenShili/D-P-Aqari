import "./_ Fourniture.scss";
import Tag from "../Tag/Tag";
import { useTranslation } from "react-i18next";

function Fourniture({ items }) {
  const { t } = useTranslation();

  if (items?.length === 0) {
    return null;
  }

  return (
    <div className="specifications">
      <p className="title_s">{t("property_details.Fourniture")} :</p>
      <div className="tags">
        {+items?.coffee_machine > 0 && (
          <Tag
            title={t("furniture.coffee_machine")}
            background="var(--light-dark, #626687)"
            color="#fff"
          />
        )}
        {+items?.microwave_heating_food > 0 && (
          <Tag
            title={t("furniture.microwave_heating_food")}
            background="var(--light-dark, #626687)"
            color="#fff"
          />
        )}
        {+items?.oven > 0 && (
          <Tag
            title={t("furniture.oven")}
            background="var(--light-dark, #626687)"
            color="#fff"
          />
        )}
        {+items?.refrigerator > 0 && (
          <Tag
            title={`${items?.refrigerator} ${t(`furniture.refrigerator`)}`}
            background="var(--light-dark, #626687)"
            color="#fff"
          />
        )}
        {+items?.dishwasher > 0 && (
          <Tag
            title={t("furniture.dishwasher")}
            background="var(--light-dark, #626687)"
            color="#fff"
          />
        )}
        {+items?.washing_machine > 0 && (
          <Tag
            title={t("furniture.washing_machine")}
            background="var(--light-dark, #626687)"
            color="#fff"
          />
        )}
        {+items?.iron > 0 && (
          <Tag
            title={t("furniture.iron")}
            background="var(--light-dark, #626687)"
            color="#fff"
          />
        )}
      </div>
    </div>
  );
}

export default Fourniture;
