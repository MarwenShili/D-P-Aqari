import MenuHeader from "../Menu";
import HamburgerMenuTrigger from "../HamburgerMenuTrigger";
import useWindowSize from "../../hooks/useWindowSize";
import { useTranslation } from "react-i18next";
import { logout } from "../../data/slices/authSlice";
import { useDispatch, useSelector } from "react-redux";
import Logo from "../Logo/Logo";
import { Navigate, NavLink, useNavigate } from "react-router-dom";
import LangBtn from "../LangBtn/LangBtn";
import enAqari from "../../assets/icons/enAqari.svg";
import arAqari from "../../assets/icons/aqariAr.svg";

import iconAqari from "../../assets/icons/aqariIcon.svg";
import cookies from "js-cookie";

const Header = () => {
  const { width } = useWindowSize();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const currentLanguageCode = cookies.get("i18next") || "en";
  const { isAuthenticated, user } = useSelector((state) => state.auth);
  const token = localStorage.getItem("aqari_token");

  // console.log(token);
  // console.log(isAuthenticated, user);

  return (
    <>
      <header className="header">
        {width < 1091 && (
          <div className={"header_responsive"}>
            <div className="left_responsive">
              <LangBtn />
            </div>
            <img
              src={currentLanguageCode === "en" ? enAqari : arAqari}
              alt=""
            />
            <img src={iconAqari} alt="" />{" "}
          </div>
        )}
        {width > 1091 && (
          <>
            <Logo />
            <div className="header__right">
              <LangBtn />
            </div>
          </>
        )}
      </header>
    </>
  );
};

export default Header;
