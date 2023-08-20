import { useEffect } from "react";
import RoutesProvider from "./routes";
import { useTranslation } from "react-i18next";
import cookies from "js-cookie";
import { useDispatch } from "react-redux";
import { setLang } from "./data/slices/settingsSlice";

function App() {
  const dispatch = useDispatch();

  const languages = [
    {
      code: "en",
      name: "English",
      country_code: "gb",
    },
    {
      code: "ar",
      name: "العربية",
      dir: "rtl",
      country_code: "sa",
    },
  ];

  const { t } = useTranslation();
  const currentLanguageCode = cookies.get("i18next") || "en";
  const currentLanguage = languages.find((l) => l.code === currentLanguageCode);

  useEffect(() => {
    document.body.dir = currentLanguage.dir || "ltr";
    dispatch(setLang(currentLanguage.dir || "ltr"));
    document.title = t("app_title");
  }, [currentLanguage, t]);

  return <RoutesProvider />;
}

export default App;
