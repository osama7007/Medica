import Search from "../../components/search";
import { BiSearchAlt } from 'react-icons/bi';
import { IoMdNotificationsOutline } from 'react-icons/io';
import styles from '../followDoctor/followDoctor.module.css';
import style from './topBar.module.css';

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
            <section className= {`${style.container} p-3 ms-auto`}>
                <div className="d-flex justify-content-between">
                        {/* <BiSearchAlt className='fs-2 text-blue mx-2 ' /> */}
                        <Search className="mt-1 text-start  "/>
            <div className="d-flex">
            <Dropdown
                        className="me-2 "
                menu={{
                  items,
                }}
                trigger={['click']}
              >
                <Link onClick={(e) => e.preventDefault()}>
                  <Space>
                  <IoMdNotificationsOutline className='fs-2 text-blue mt-3 ' />
                    {/* <DownOutlined /> */}
                  </Space>
                </Link>
              </Dropdown>
                   
                <div >
                <img
                  src="https://i0.wp.com/newdoorfiji.com/wp-content/uploads/2018/03/profile-img-1.jpg?ssl=1"
                  className={`${styles.img} rounded-circle`}
                  alt="your img"
                />
                </div>
                    </div>
               </div>
            </section>
        </>
    )
}

export default TopBar;