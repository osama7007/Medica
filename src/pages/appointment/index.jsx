import Heading from "../../components/heading";
import { Radio, Tabs } from "antd";
import { useState } from "react";
import empty from "../../assets/images/appointment/nodates.svg";
import SecondaryBtn from "../../components/buttons/SecondaryBtn";
import { TbPhoneCall } from "react-icons/tb";
import PrimaryBtn from "../../components/buttons/PrimaryBtn";
import styles from "./appointment.module.css";
const Appointment = () => {
  const onChange = (key) => {
    console.log(key);
  };
  return (
    <>
      <section className="container">
        <Heading text="My Appointment" />
        {/* <div>
          <Tabs
                      defaultActiveKey="1"
                      centered
            onChange={onChange}
            items={[
              {
                label: `Upcoming`,
                key: "1",
                children: ``,
              },
              {
                label: `Completed`,
                key: "2",
                children: `Content of Tab Pane 2`,
              },
              {
                label: `Cancelled`,
                key: "3",
                children: `Content of Tab Pane 3`,
              },
            ]}
          />
        </div> */}

        <Tabs centered>
          <Tabs.TabPane tab="Upcoming" key="Upcoming" className="text-center">
            <div className="d-none">
              <div className="m-3">
                <img src={empty} alt="no dates" className="w-25 " />
              </div>
              <h4>You don't have an appointment yet</h4>
              <p>
                You don't have a doctor's appointment scheduled at the moment
              </p>
            </div>

            <div className="d-block">
              <div className="row gap-5">
                <div className=" col-lg-8 col-md-12 m-auto text-center">
                  <div className="row shadow rounded-3 py-4 ">
                    <div className="col-md-4 mb-2">
                      <img
                        src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                        alt="doctor-img"
                        className={`rounded-5 ${styles.img}`}
                      />
                    </div>
                    <div className="col-md-6 ms-auto mt-3 d-lg-flex  ">
                      <div>
                        <h2>Doctor Name</h2>
                        <SecondaryBtn title="Upcoming" />
                        <p>Date</p>
                      </div>
                      <div>
                        <TbPhoneCall className="fs-1 text-primary shadow p-1 rounded-5 ms-lg-3 mb-3" />
                      </div>
                    </div>
                    <div className="border-top pt-2">
                      <SecondaryBtn title="Cancel Appointment" />
                      <PrimaryBtn title="Reschedule" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Tabs.TabPane>

          <Tabs.TabPane tab="Completed" key="Completed" className="text-center">
            <div className="d-none">
              <div className="m-3">
                <img src={empty} alt="no dates" className="w-25 " />
              </div>
              <h4>You don't have an appointment completed yet</h4>
            </div>
            <div className="d-block">
              <div className="row gap-5">
                <div className=" col-lg-8 col-md-12 m-auto text-center">
                  <div className="row shadow rounded-3 py-4 ">
                    <div className="col-md-4 mb-2">
                      <img
                        src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                        alt="doctor-img"
                        className={`rounded-5 ${styles.img}`}
                      />
                    </div>
                    <div className="col-md-6 ms-auto mt-3 d-lg-flex  ">
                      <div>
                        <h2>Doctor Name</h2>
                        <button className="btn btn-success bg-transparent text-success">
                          Completed
                        </button>
                        <p>Date</p>
                      </div>
                      <div>
                        <TbPhoneCall className="fs-1 text-primary shadow p-1 rounded-5 ms-lg-3 mb-3" />
                      </div>
                    </div>
                    <div className="border-top pt-2">
                      <SecondaryBtn title="Book Again" />
                      <PrimaryBtn title="Leave a review" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Tabs.TabPane>
          <Tabs.TabPane tab="Cancelled" key="tab3" className="text-center">
            <div className="d-none">
              <div className="m-3">
                <img src={empty} alt="no dates" className="w-25 " />
              </div>
              <h4>You don't have an appointment cancelled yet</h4>
            </div>
            <div className="d-block">
              <div className="row gap-5">
                <div className=" col-lg-8 col-md-12 m-auto text-center">
                  <div className="row shadow rounded-3 py-4 ">
                    <div className="col-md-4 mb-2">
                      <img
                        src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                        alt="doctor-img"
                        className={`rounded-5 ${styles.img}`}
                      />
                    </div>

                    <div className="col-md-6 ms-auto mt-3 d-lg-flex  ">
                      <div>
                        <h2>Doctor Name</h2>
                        <button className="btn btn-danger bg-transparent text-danger">
                          Cancelled
                        </button>
                        <p>Date</p>
                      </div>
                      <div>
                        <TbPhoneCall className="fs-1 text-primary shadow p-1 rounded-5 ms-lg-3 mb-3" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Tabs.TabPane>
        </Tabs>
      </section>
    </>
  );
};
export default Appointment;
