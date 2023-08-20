import i18next from "i18next";
import en from "../../assets/icons/en.svg";
import cookies from "js-cookie";
import { useTranslation } from "react-i18next";
import "./_LangBtn.scss";
function LangBtn() {
  const currentLanguageCode = cookies.get("i18next") || "en";
  const { t } = useTranslation();

  return (
    <button
      className="item_lan_header lang_header"
      onClick={() => {
        if (currentLanguageCode === "en") {
          i18next.changeLanguage("ar");
          // window.location.reload();
        } else {
          i18next.changeLanguage("en");
          // window.location.reload();
        }
      }}
    >
      <img src={en} alt="" />
      {t("language")}
    </button>
  );
}

export default LangBtn;
