import { Outlet } from "react-router-dom";
import Header from "../../components/Header";
import Backdrop from "../../components/Backdrop";
import Footer from "../../components/Footer/Footer";

const MainLayout = () => {
  return (
    <div className="main_layout">
      {/* <Sidebar /> */}
      <div className="main_layout__container">
        <Header />
        <Outlet />
        <Footer />
      </div>
      <Backdrop />
    </div>
  );
};

export default MainLayout;
