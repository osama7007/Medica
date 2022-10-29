import { Footer as AntFooter } from "antd/lib/layout/layout";

const Footer = () => {
  return (
    <div>
      <AntFooter className="bg-transparent">
        <div className="container d-flex justify-content-center">
          <p className="m-0" >
            All Right Received to
            <span className="text-blue"> Medica&copy;</span> 2022
          </p>
        </div>
      </AntFooter>
    </div>
  );
};

export default Footer;
