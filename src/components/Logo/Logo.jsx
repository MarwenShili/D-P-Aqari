import "./_Logo.scss";
import cookies from "js-cookie";
import { NavLink } from "react-router-dom";
import arabicLogo from "../../assets/icons/arabicLogo.svg";
import englishLogo from "../../assets/icons/englishLogo.svg";

function Logo() {
  const currentLanguageCode = cookies.get("i18next") || "en";

  return (
    <NavLink style={{ cursor: "pointer" }} to="/">
      <img
        className="img_logo"
        src={currentLanguageCode === "en" ? englishLogo : arabicLogo}
        alt=""
      />
    </NavLink>
  );
}

export default Logo;
