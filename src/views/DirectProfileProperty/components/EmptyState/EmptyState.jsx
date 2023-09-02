import React from "react";
import { Button, Empty } from "antd";
import { useTranslation } from "react-i18next";

const EmptyState = ({ text }) => {
  const { t } = useTranslation();

  return (
    <Empty
      image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
      imageStyle={{
        height: 60,
      }}
      description={<h3>{text}</h3>}
    >
      {/* <Button type="primary">Create Now</Button> */}
    </Empty>
  );
};
export default EmptyState;
