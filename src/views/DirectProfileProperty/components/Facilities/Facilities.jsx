import "./_Facilities.scss";
import Tag from "../Tag/Tag";
import { useTranslation } from "react-i18next";

function Facilities({ items }) {
  const { t } = useTranslation();

  return (
    <div className="specifications">
      <p className="title_s">{t("property_details.Facilities")} :</p>
      <div className="tags">
        {+items?.central_air_conditioner > 0 && (
          <Tag
            title={t("facilities.Center_AC")}
            background="var(--light-green, #EAF4EE)"
            value={items?.central_air_conditioner}
            colorValue="#04C23A"
            color="#626687"
          />
        )}
        {+items?.split_unit > 0 && (
          <Tag
            title={t("facilities.Split_AC")}
            background="var(--light-green, #EAF4EE)"
            value={items?.split_unit}
            colorValue="#04C23A"
            color="#626687"
          />
        )}
        {+items?.window_air_conditioner > 0 && (
          <Tag
            title={t("facilities.Window_AC")}
            background="var(--light-green, #EAF4EE)"
            value={items?.window_air_conditioner}
            colorValue="#04C23A"
            color="#626687"
          />
        )}
        {+items?.desert_cooler > 0 && (
          <Tag
            title={t("facilities.Desert_AC")}
            background="var(--light-green, #EAF4EE)"
            value={items?.desert_cooler}
            colorValue="#04C23A"
            color="#626687"
          />
        )}
        {+items?.wood_stove > 0 && (
          <Tag
            title={t("facilities.Wood_Stove")}
            background="var(--light-green, #EAF4EE)"
            value={items?.wood_stove}
            colorValue="#04C23A"
            color="#626687"
          />
        )}
        {+items?.ornamental_trees > 0 && (
          <Tag
            title={t("facilities.Ornamental_Trees")}
            background="var(--light-green, #EAF4EE)"
            value={items?.ornamental_trees}
            colorValue="#04C23A"
            color="#626687"
          />
        )}
        {+items?.palm > 0 && (
          <Tag
            title={t("facilities.Palm")}
            background="var(--light-green, #EAF4EE)"
            value={items?.palm}
            colorValue="#04C23A"
            color="#626687"
          />
        )}
        {+items?.fruitful_trees > 0 && (
          <Tag
            title={t("facilities.Fruitful_Trees")}
            background="var(--light-green, #EAF4EE)"
            value={items?.fruitful_trees}
            colorValue="#04C23A"
            color="#626687"
          />
        )}
        {items?.is_kitchen_installed === "yes" && (
          <Tag
            title={t(`facilities.installed_kitchen`)}
            background="var(--light-green, #EAF4EE)"
            color="#626687"
          />
        )}

        {items?.is_clothing_cabinet_installed === "yes" && (
          <Tag
            title={t(`facilities.installed_cabinet`)}
            background="var(--light-green, #EAF4EE)"
            color="#626687"
          />
        )}
        {items?.private_elevator === "yes" && (
          <Tag
            title={t(`facilities.private_elevator`)}
            background="var(--light-green, #EAF4EE)"
            color="#626687"
          />
        )}
        {items?.shared_elevator === "yes" && (
          <Tag
            title={t(`facilities.shared_elevator`)}
            background="var(--light-green, #EAF4EE)"
            color="#626687"
          />
        )}
      </div>
    </div>
  );
}

export default Facilities;
