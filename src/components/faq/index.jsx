import FaqLottie from "./FaqLottie";
import "./faq.css";
import { Collapse } from "antd";
const { Panel } = Collapse;

const Faq = () => {
  return (
    <section className="container py-5">
      <div className="row">
        <div className="col-lg-6 col-md-12">
          <FaqLottie />
          <h2 className="faqContent text-center mt-5 fw-bold">
            Frequently asked questions
          </h2>
        </div>

        <div className="col-lg-6 col-md-12">
          <Collapse accordion className=" Collapse shadow-sm rounded-4 fs-5">
            <Panel header="What are the payment options available ?" key="1">
              <p className="text-black-50">
                You can pay through cash after receiving the services at clinic
                also we accept online payments through credit cards .
              </p>
            </Panel>
            <Panel
              header="How can I add medical files or Prescriptions ?
"
              key="2"
            >
              <p className="text-black-50">
                You can add all the files you need on your request through
                scanning your reports or files by scanning them through your
                mobile camera
              </p>
            </Panel>
            <Panel header="How can I know the status of my request ?" key="3">
              <p className="text-black-50">
                You can follow up the status of your request and its updates
                through the notifications section
              </p>
            </Panel>

            <Panel
              header="Who are the healthcare providers registered?"
              key="4"
            >
              <p className="text-black-50">
                Medica platform includes more than 500+ licensed healthcare
                providers with different specialties and experience.
              </p>
            </Panel>

            <Panel header="What are the service fees?" key="5">
              <p className="text-black-50">
                You can review the service fees when you choose specific service
                through the website.
              </p>
            </Panel>
          </Collapse>
        </div>
      </div>
    </section>
  );
};

export default Faq;
