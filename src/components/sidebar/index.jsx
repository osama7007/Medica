import { Menu } from "antd";
import Sider from "antd/lib/layout/Sider";
import React, { useEffect, useState } from "react";
import { VscHome } from "react-icons/vsc";
import { SlEnvolope } from "react-icons/sl";
import { CgProfile } from "react-icons/cg";
import { FiBookmark } from "react-icons/fi";
import { BsFillQuestionCircleFill } from "react-icons/bs";
import { Link, useLocation, useNavigate } from "react-router-dom";
import classes from "./sidebar.module.css";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "firebase/auth";
import { BiLogOut } from "react-icons/bi";
import { auth } from "../../firebase/firebase";
import { logout } from "../../redux/authSlice";
import { TbCalendar, TbStethoscope } from "react-icons/tb";
import { MdArticle } from "react-icons/md";
import { GiLoveInjection } from "react-icons/gi";
import { ImCalculator } from "react-icons/im";

const SideBar = ({ collapsed, setCollapsed }) => {
  const [pageInView, setPageInView] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { pathname } = location;

  useEffect(() => {
    setPageInView(pathname.split("/")[1]);
  }, [pathname]);

  const isAuth = useSelector((state) => state.auth.isAuth);
  function getItem(label, key, icon, onTitleClick) {
    return {
      label,
      key,
      icon,
      onTitleClick,
    };
  }
  const clickHandler = (route) => {
    !collapsed && setCollapsed(true);
    navigate(route);
  };
  // articles
  // our doctors
  //
  const items = [
    getItem("Home", "", <VscHome className="fs-3 me-3" />, () =>
      clickHandler("/")
    ),
    getItem("Profile", "profile", <CgProfile className="fs-3 me-3 " />, () =>
      clickHandler("/profile")
    ),
    getItem(
      "Our Doctors",
      "doctors",
      <TbStethoscope className="fs-3 me-3" />,
      () => clickHandler("/doctors")
    ),
    getItem("Articles", "articles", <MdArticle className="fs-3 me-3" />, () =>
      clickHandler("/articles")
    ),
    getItem(
      "Appointments",
      "appointments",
      <TbCalendar className="fs-3 me-3" />,
      () => clickHandler("/appointments")
    ),
    getItem(
      "New Doctor",
      "new-doctor",
      <GiLoveInjection className="fs-3 me-3" />,
      () => clickHandler("/new-doctor")
    ),
    getItem(
      " health calculator",
      "calculator",
      <ImCalculator className="fs-3 me-3" />,
      () => clickHandler("/calculator")
    ),
    getItem(
      "About",
      "about",
      <BsFillQuestionCircleFill className="fs-3 me-3" />,
      () => clickHandler("/about")
    ),
    getItem("Logout", "logout", <BiLogOut className="fs-3 me-3" />, () => {
      signOut(auth).then(() => {
        dispatch(logout());
        clickHandler("/login");
      });
    }),
  ];

  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
      className={` bg-white shadow-sm text-blue h-100 d-none ${
        isAuth ? "d-md-block" : ""
      } overflow-hidden ${classes.sidebar}`}
    >
      <Link
        to="/"
        className="d-flex align-items-center py-2 mb-4 text-decoration-none mt-4 "
        onClick={() => !collapsed && setCollapsed(true)}
      >
        <img src="/logo.png" alt="logo" height="35" className={classes.logo} />
        <h3 className={`ms-2 mb-0  ${classes.brand}`}>Medica</h3>
      </Link>
      <Menu theme="light" selectedKeys={pageInView} mode="inline">
        {items.map((item) => (
          <Menu.Item
            key={item.key}
            icon={item.icon}
            onClick={item.onTitleClick}
            className={`my-4`}
          >
            {item.label}
          </Menu.Item>
        ))}
      </Menu>
    </Sider>
  );
};

export default SideBar;
