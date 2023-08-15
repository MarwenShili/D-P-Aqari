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
        {items?.coffee_machine && (
          <Tag
            title="Coffe machine"
            background="var(--light-dark, #626687)"
            color="#fff"
          />
        )}
        {items?.microwave_heating_food && (
          <Tag
            title="microwave"
            background="var(--light-dark, #626687)"
            color="#fff"
          />
        )}
        {items?.oven && (
          <Tag
            title="Oven"
            background="var(--light-dark, #626687)"
            color="#fff"
          />
        )}
        {items?.refrigerator && (
          <Tag
            title="Refrigerator"
            background="var(--light-dark, #626687)"
            color="#fff"
          />
        )}
        {items?.dishwasher && (
          <Tag
            title="Dishwasher"
            background="var(--light-dark, #626687)"
            color="#fff"
          />
        )}
        {items?.washing_machine && (
          <Tag
            title="Washing Machine"
            background="var(--light-dark, #626687)"
            color="#fff"
          />
        )}
        {items?.iron && (
          <Tag
            title="Iron"
            background="var(--light-dark, #626687)"
            color="#fff"
          />
        )}
        {items?.furnished_type && (
          <Tag
            title={items?.furnished_type}
            background="var(--light-dark, #626687)"
            color="#fff"
          />
        )}
      </div>
    </div>
  );
}

export default Fourniture;
