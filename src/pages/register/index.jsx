import register from "../../assets/images/register.jpg";
import styles from "./register.module.css";
import RegisterForm from "./Form";
import Google from "./Google";
import Thanks from "../../components/thankyou";


const Rgeister = () => {
  return (
    <section className=' row vh-100 container-fluid align-items-center'>
      {/* <Thanks className={styles.thanks} /> */}
      <div className="col-md-6 w-50">
        <img src={register} alt="register" className="w-100" />
      </div>
      <div className={` ${styles.form} col-md-6 shadow-sm mt-4 rounded-2 `}>
        <RegisterForm />
        <Google />
      </div>
    </section>
  );
};

export default Rgeister;
