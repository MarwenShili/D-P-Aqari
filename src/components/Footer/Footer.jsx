import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import cookies from "js-cookie";
import Logo from "../Logo/Logo";
import fb from "../../assets/icons/fb1.svg";
import insta from "../../assets/icons/insta.svg";
import tw from "../../assets/icons/tw.svg";
import copyRight from "../../assets/icons/Vector.svg";

function Footer() {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const currentLanguageCode = cookies.get("i18next") || "en";

  return (
    <>
      <div className="footer">
        <div className="left">
          <Logo />
          <p className="content">{t("footer.text2")}</p>
        </div>

        <div className="right">
          <NavLink className="nav_footer">{t("header.contact_as")}</NavLink>
          <p className="contact_sub contact_city">{t("footer.contact_city")}</p>
          <p className="contact_sub contact_phone">
            {t("footer.contact_phone")}
          </p>
          <p className="contact_sub contact_mail">
            {t("footer.contact_email")}
          </p>
          <div className="icons">
            <a href="">
              <img src={insta} alt="" />
            </a>
            <a href="">
              <img src={fb} alt="" />
            </a>
            <a href="">
              <img src={tw} alt="" />
            </a>
          </div>
        </div>
      </div>
      <div className="bottom_section">
        <img src={copyRight} alt="" />
        {t("footer.text3")}
      </div>
    </>
  );
}

export default Footer;
