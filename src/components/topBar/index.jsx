import Search from "../../components/search";
import { BiSearchAlt } from "react-icons/bi";
import { IoMdNotificationsOutline } from "react-icons/io";
import styles from "../followDoctor/followDoctor.module.css";
import style from "./topBar.module.css";
import defaultImg from "../../assets/images/doctor_profile/default_profile_img.png";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const TopBar = () => {
  const items = [
    { label: "item 1", key: "item-1" },
    { label: "item 2", key: "item-2" },
  ];

  const isAuth = useSelector((state) => state.auth.isAuth);
  return (
    <section
      className={`${style.container} me-5 p-3 ms-auto ${
        isAuth ? "d-block" : "d-none"
      } `}
    >
      <div className="d-flex justify-content-between">
        {/* <BiSearchAlt className='fs-2 text-blue mx-2 ' /> */}
        <Search className="mt-1 text-start  " />
        <div className="d-flex align-items-center ">
          <Dropdown
            className="me-2 "
            menu={{
              items,
            }}
            trigger={["click"]}
          >
            <Link onClick={(e) => e.preventDefault()}>
              <Space>
                <IoMdNotificationsOutline className="fs-2 text-blue" />
                {/* <DownOutlined /> */}
              </Space>
            </Link>
          </Dropdown>

          <Link to="/profile"  className="w-75" >
            <img
              src={defaultImg}
              className={`${styles.img} img-fluid rounded-circle `}
              alt="your img"
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TopBar;
