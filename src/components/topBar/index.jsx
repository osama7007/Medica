import Search from "../../components/search";
import { BiSearchAlt } from 'react-icons/bi';
import { IoMdNotificationsOutline } from 'react-icons/io';
import styles from '../followDoctor/followDoctor.module.css';
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
const TopBar = () => {
    const items = [
        { label: 'item 1', key: 'item-1' }, 
        { label: 'item 2', key: 'item-2' },
      ];
    
    return (
        <>
            <section className=" p-3 w-25  ms-auto">
                <div className="d-flex justify-content-evenly">
                    <Dropdown
                        className="me-2 "
                menu={{
                  items,
                }}
                trigger={['click']}
              >
                <Link onClick={(e) => e.preventDefault()}>
                  <Space>
                  <IoMdNotificationsOutline className='fs-2 text-blue mt-2 ' />
                    <DownOutlined />
                  </Space>
                </Link>
              </Dropdown>
                   
                <div className="mt-2">
                {/* <BiSearchAlt className='fs-2 text-blue mx-2 ' /> */}
                <Search className=" text-start "/>
                </div>
                <div >
                <img
                  src="https://i0.wp.com/newdoorfiji.com/wp-content/uploads/2018/03/profile-img-1.jpg?ssl=1"
                  className={`${styles.img} rounded-circle`}
                  alt="your img"
                />
                </div>
               </div>
            </section>
        </>
    )
}

export default TopBar;