import React from "react";
import "./_MediaEmptyState.scss";
import EmptyState from "../../views/DirectProfileProperty/components/EmptyState/EmptyState";
import { useTranslation } from "react-i18next";

function MediaEmptyState() {
  const { t } = useTranslation();

  return (
    <div className="empty_media_state">
      <EmptyState text={t("property_details.no_images")} />
    </div>
  );
}

export default MediaEmptyState;
