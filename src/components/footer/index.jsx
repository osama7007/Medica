import { Footer as AntFooter } from "antd/lib/layout/layout";

const Footer = () => {
  return (
    <AntFooter className="bg-transparent">
      <div className="container d-flex justify-content-center">
        All Right Received to <span className="text-blue mx-1 fw-bold "> Medica&copy;</span> 2022
      </div>
    </AntFooter>
  );
};

export default Footer;
