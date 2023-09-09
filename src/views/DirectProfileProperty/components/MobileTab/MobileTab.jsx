import React from "react";
import "./_MobileTab.scss";
import { useTranslation } from "react-i18next";
import Specifications from "../Specifications/specifications";
import { Tabs, message } from "antd";
import RoomsAndOthers from "../RoomsAndOthers/RoomsAndOthers";
import Services from "../Services/Services";
import Facilities from "../Facilities/Facilities";
import Fourniture from "../Fourniture/Fourniture";
import { allValuesFalsy } from "../../../../helpers/allValuesFalsy";

function MobileTab({ property }) {
  const { t } = useTranslation();

  const tabitems = [
    {
      key: "1",
      label: t("properties.Specifications"),
      children: <Specifications items={property?.specification_array} />,
    },
    {
      key: "2",
      label: allValuesFalsy(property?.rooms_array)
        ? false
        : t("properties.Rooms_and_others"),
      children: <RoomsAndOthers items={property?.rooms_array} />,
      disabled: allValuesFalsy(property?.rooms_array),
    },
    {
      key: "3",
      label: allValuesFalsy(property?.services_array)
        ? false
        : t("properties.Services"),
      children: <Services items={property?.services_array} />,
      disabled: allValuesFalsy(property?.services_array),
    },
    {
      key: "4",
      label: allValuesFalsy(property?.specification_facilities_array)
        ? false
        : t("properties.Facilities"),
      children: <Facilities items={property?.specification_facilities_array} />,
      disabled: allValuesFalsy(property?.specification_facilities_array),
    },
    {
      key: "5",
      label: allValuesFalsy(property?.furniture_array)
        ? false
        : t("properties.Fourniture"),
      children: <Fourniture items={property?.furniture_array} />,
      disabled: allValuesFalsy(property?.furniture_array),
    },
  ];
  return (
    <div>
      <div className="tabs-container">
        <Tabs
          defaultActiveKey="1"
          items={tabitems}
          direction={document.body.dir === "rtl" ? "rtl" : "ltr"}
        />
      </div>
    </div>
  );
}

export default MobileTab;
