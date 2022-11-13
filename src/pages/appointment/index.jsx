import Heading from "../../components/heading";
import { Radio, Tabs } from "antd";
import { useState } from "react";
import empty from "../../assets/images/appointment/nodates.svg";
import SecondaryBtn from "../../components/buttons/SecondaryBtn";
import { TbPhoneCall } from "react-icons/tb";
import PrimaryBtn from "../../components/buttons/PrimaryBtn";
import styles from "./appointment.module.css";
import { useSelector } from "react-redux";
import { db } from "../../firebase/firebase";
import { doc, updateDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { deSlugify, slugify, slugifyDoctor } from "../../utils/slugify";
import Review from "../../components/review";
import { toast, ToastContainer } from "react-toastify";

const Appointment = () => {
  const navigate = useNavigate();
  const [showReview, setShowReview] = useState(false);

  const onChange = (key) => {
    console.log(key);
  };
  const doctors = useSelector((state) => state.doctors.doctors);
  const auth = useSelector((state) => state.auth);
  const appointments = auth?.appointments || [];
  const canceledAppointments = auth?.canceled || [];
  const completedAppointments = auth?.compeleted || [];

  const handleCancel = (index) => {
    return () => {
      const appointment = appointments[index];
      console.log(appointment);
      const docRef = doc(db, "users", auth?.id);
      const newAppointments = appointments.filter(
        (appointment, i) => i !== index
      );

      console.log("newAppointments", newAppointments);
      updateDoc(docRef, {
        appointments: newAppointments,
      });
      updateDoc(docRef, {
        canceled:
          auth?.canceled.length > 0
            ? [...auth?.canceled, appointment]
            : [appointment],
      }).then(() => {
        toast.info("Appointment Cancel");
      });
    };
  };

  const navigateAppointPage = (title) => {
    return () => {
      navigate(`/appointment?doctor=${slugifyDoctor(title)}`);
    };
  };
  const reschedule = (title, id, index, date, time) => {
    return () => {
      navigate(
        `/appointment?doctor=${slugifyDoctor(
          title
        )}?id=${id}&index=${index}&date=${date}&time=${time}`
      );
    };
  };
  const compeleteHandler = (index) => {
    return () => {
      if (appointments) {
        console.log("compeleteHandler", index);
        const appointment = appointments[index];
        console.log(appointment);
        const docName = doctors.filter(
          (doctor) => doctor.id === appointment?.doctorId
        )[0]?.name;

        const docRef = doc(db, "users", auth?.id);
        const newAppointments = appointments.filter(
          (appointment, i) => i !== index
        );

        console.log("newAppointments", newAppointments);
        updateDoc(docRef, {
          appointments: newAppointments,
        });
        updateDoc(docRef, {
          compeleted:
            auth?.compeleted?.length > 0
              ? [...auth?.compeleted, appointment]
              : [appointment],
        }).then(() => {
          toast.info(`Appointment with ${docName} completed`);
        });
      }
    };
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
            {appointments?.length === 0 ? (
              <div>
                <div className="m-3">
                  <img src={empty} alt="no dates" className="w-25 " />
                </div>
                <h4>You don't have an appointment yet</h4>
                <p>
                  You don't have a doctor's appointment scheduled at the moment
                </p>
              </div>
            ) : (
              appointments.map((item, i) => (
                <div className="mb-5 " key={item.date + i}>
                  <div className="row m-auto">
                    <div className=" col-lg-7 col-md-12 text-center m-auto">
                      <div className="row shadow rounded-3 py-4 ">
                        <div className="col-md-4 mb-2">
                          <img
                            src={
                              doctors.find((doc) => doc.id === item.doctorId)
                                ?.pImage
                            }
                            alt="doctor-img"
                            className={`rounded-5 ${styles.img}`}
                          />
                        </div>
                        <div className="col-md-8 mt-3 d-lg-flex text-center ">
                          <div>
                            <h2>
                              {
                                doctors.find((doc) => doc.id === item.doctorId)
                                  ?.name
                              }
                            </h2>
                            <p className="text-primary fs-5">
                              at {item.date} {item.time}
                            </p>
                          </div>
                          <div
                            className={`${styles.icon}d-flex align-items-center`}
                          >
                            <a href="tel:1968">
                              <TbPhoneCall className="fs-1 text-primary shadow p-1 rounded-5 ms-lg-3 mb-3" />
                            </a>

                            <p>
                              {
                                doctors.find((doc) => doc.id === item.doctorId)
                                  ?.phone
                              }
                            </p>
                          </div>
                        </div>
                        <div className="border-top pt-2">
                          <SecondaryBtn
                            title="Cancel Appointment"
                            action={handleCancel(i)}
                          />
                          <PrimaryBtn
                            title="Mark as Compeleted"
                            action={compeleteHandler(i)}
                          />
                          {/* <PrimaryBtn
                            title="Reschedule"
                            action={reschedule(
                              doctors.find((doc) => doc?.id === item?.doctorId)
                                ?.name,
                              item?.doctorId,
                              i,
                              item.date,
                              item.time
                            )}
                          /> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </Tabs.TabPane>

          <Tabs.TabPane tab="Completed" key="Completed" className="text-center">
            {completedAppointments?.length === 0 ? (
              <div>
                <div className="m-3">
                  <img src={empty} alt="no dates" className="w-25 " />
                </div>
                <h4>You don't have an appointment completed yet</h4>
              </div>
            ) : (
              completedAppointments.map((item, i) => (
                <div>
                  <div className="row">
                    <div className=" col-lg-8 col-md-12 m-auto text-center">
                      <div className="row shadow rounded-3 py-4 ">
                        <div className="col-md-4 mb-2">
                          <img
                            src={
                              doctors.find((doc) => doc?.id === item?.doctorId)
                                ?.pImage
                            }
                            alt="doctor-img"
                            className={`rounded-5 ${styles.img}`}
                          />
                        </div>
                        <div className="col-md-7 ms-auto mt-3 d-lg-flex  ">
                          <div>
                            <h2>
                              {
                                doctors.find(
                                  (doc) => doc?.id === item?.doctorId
                                )?.name
                              }
                            </h2>
                            <button className="btn btn-success bg-transparent text-success">
                              Completed
                            </button>
                            <p>{item.date}</p>
                          </div>
                          <div>
                            <TbPhoneCall className="fs-1 text-primary shadow p-1 rounded-5 ms-lg-3 mb-3" />
                          </div>
                        </div>
                        <div className="border-top pt-2">
                          <SecondaryBtn
                            title="Book Again"
                            action={navigateAppointPage(
                              doctors.find((doc) => doc?.id === item?.doctorId)
                                ?.name
                            )}
                          />
                          <PrimaryBtn
                            title="Leave a review"
                            action={() => {
                              setShowReview(!showReview);
                            }}
                          />
                        </div>
                        {showReview && (
                          <div>
                            <Review />
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </Tabs.TabPane>

          <Tabs.TabPane tab="Cancelled" key="tab3" className="text-center">
            {canceledAppointments?.length === 0 ? (
              <div>
                <div className="m-3">
                  <img src={empty} alt="no dates" className="w-25 " />
                </div>
                <h4>You don't have an appointment cancelled yet</h4>
              </div>
            ) : (
              canceledAppointments.map((item, i) => (
                <div className="mb-5" key={item.date + i}>
                  <div className="row m-auto">
                    <div className=" col-lg-7 col-md-12 text-center m-auto">
                      <div className="row shadow rounded-3 py-4 ">
                        <div className="col-md-4 mb-2">
                          <img
                            src={
                              doctors.find((doc) => doc?.id === item?.doctorId)
                                ?.pImage
                            }
                            alt="doctor-img"
                            className={`rounded-5 ${styles.img}`}
                          />
                        </div>
                        <div className="col-md-8 mt-3 d-lg-flex text-center">
                          <div>
                            <h2>
                              {
                                doctors.find(
                                  (doc) => doc?.id === item?.doctorId
                                )?.name
                              }
                            </h2>
                            <button className="btn btn-danger bg-transparent text-danger">
                              Cancelled
                            </button>
                            <p className="mt-2">{item.date}</p>
                          </div>
                          <div>
                            <TbPhoneCall className="fs-1 text-primary shadow p-1 rounded-5 ms-lg-3 mb-3" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </Tabs.TabPane>
        </Tabs>
        <ToastContainer
          position="bottom-right"
          autoClose={1000}
          limit={3}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
      </section>
    </>
  );
};
export default Appointment;
