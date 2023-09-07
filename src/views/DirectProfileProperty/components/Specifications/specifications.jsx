import "./_Specifications.scss";
import Tag from "../../components/Tag/Tag";
import { useTranslation } from "react-i18next";
import I1 from "../../assets/specifications/1.svg";
import I2 from "../../assets/specifications/2.svg";
import I3 from "../../assets/specifications/3.svg";
import I4 from "../../assets/specifications/4.svg";
import I5 from "../../assets/specifications/5.svg";
import I6 from "../../assets/specifications/6.svg";
import I7 from "../../assets/specifications/7.svg";
import I8 from "../../assets/specifications/8.svg";
import I9 from "../../assets/specifications/9.svg";
import I10 from "../../assets/specifications/10.svg";
import I11 from "../../assets/specifications/11.svg";
import I12 from "../../assets/specifications/12.svg";

function Specifications({ items, entrance }) {
  const { t } = useTranslation();

  const handleDirection = (str) => {
    let arr = str.split(",").map((el) => el + "  ");
    return arr;
  };

  // console.log(items);
  return (
    <div className="specifications">
      <p className="title_s">{t("property_details.Specifications")} :</p>
      <div className="tags">
        {/* //required items  */}
        {/* type of property */}
        {items?.unit_usage && (
          <Tag title={items?.unit_usage} background="1b1c57" icon={I11} />
        )}
        {items?.residential_type && (
          <Tag title={items?.residential_type} background="1b1c57" icon={I11} />
        )}
        {items?.unit_area && (
          <Tag
            title={`${t("specification.area")} ${items?.unit_area} ${t(
              "specification.meter_square"
            )}`}
            background="1b1c57"
            icon={I2}
          />
        )}
        {items?.build_land && (
          <Tag
            title={`${t("specification.built_land")} ${items?.build_land} ${t(
              "specification.meter_square"
            )}`}
            background="1b1c57"
            icon={I3}
          />
        )}
        {items?.building_flats && (
          <Tag
            title={`${t("specification.built_flats")} ${
              items?.building_flats
            } ${t("specification.meter_square")}`}
            background="1b1c57"
            icon={I3}
          />
        )}
        {items?.unit_width && (
          <Tag
            title={`${t("specification.width")} ${items?.unit_width} ${t(
              "specification.meter_square"
            )}`}
            background="1b1c57"
            icon={I3}
          />
        )}
        {items?.unit_length && (
          <Tag
            title={`${t("specification.length")} ${items?.unit_length} ${t(
              "specification.meter_square"
            )}`}
            background="1b1c57"
            icon={I4}
          />
        )}
        {items?.unit_height && (
          <Tag
            title={`${t("specification.height")} ${items?.unit_height} ${t(
              "specification.m"
            )}`}
            background="1b1c57"
            icon={I5}
          />
        )}
        {items?.unit_direction && (
          <Tag
            // title={t(`specification.${items?.unit_direction}`)}
            title={handleDirection(items?.unit_direction)}
            background="1b1c57"
            icon={I6}
          />
        )}
        {items?.building_age_in_years && (
          <Tag
            title={`${t("specification.building_age")} ${
              items?.building_age_in_years
            } ${t("specification.years")}`}
            background="1b1c57"
            icon={I11}
          />
        )}
        {items?.entrance && (
          <Tag title={items?.entrance} background="1b1c57" icon={I12} />
        )}
        {/* not required items  */}
        {+items?.total_floors > 1 && items?.total_floors && (
          <Tag
            title={`${items?.total_floors} ${t("specification.floors")}`}
            background="1b1c57"
            icon={I1}
          />
        )}
        {items?.include_mezzanine === "yes" && (
          <Tag
            title={t("specification.mezzanine")}
            background="1b1c57"
            icon={I8}
          />
        )}
        {items?.unit_finishing != "Finished" &&
          items?.unit_finishing != "مكتمل" &&
          items?.unit_finishing && (
            <Tag
              // title={t("specification.shell_unfinished")}
              title={items?.unit_finishing}
              background="1b1c57"
              icon={I9}
            />
          )}
        {/* {items?.unit_finishing === "Finished" &&
          items?.unit_finishing != "مكتمل" && */}
        {items?.building_condition && (
          <Tag
            title={
              // items?.building_first_inhabited === "yes"
              //   ? t("specification.first_inhabitant")
              //   : t("specification.reconditioned")
              items?.building_condition
            }
            background="1b1c57"
            icon={I9}
          />
        )}
        {/* items?.furnished_type != "Unfurnished" &&
          items?.furnished_type != "غير مؤثث" && ( )*/}
        {items?.furnished_type && (
          <Tag title={items?.furnished_type} background="1b1c57" icon={I7} />
        )}
        {items?.sea_view === "yes" && (
          <Tag
            title={t("specification.sea_view")}
            background="1b1c57"
            icon={I10}
          />
        )}
      </div>
    </div>
  );
}

export default Specifications;
