import React from "react";
import { Button, Empty } from "antd";
import { useTranslation } from "react-i18next";

const EmptyState = () => {
  const { t } = useTranslation();

  return (
    <Empty
      image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
      imageStyle={{
        height: 60,
      }}
      description={<h3>{t("property_details.no_data")}</h3>}
    >
      {/* <Button type="primary">Create Now</Button> */}
    </Empty>
  );
};
export default EmptyState;
