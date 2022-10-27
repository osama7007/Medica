import register from "../../assets/images/register.jpg";
import styles from "./register.module.css";
import RegisterForm from "./Form";
import Google from "./Google";
import Thanks from "../../components/thankyou";


const Rgeister = () => {
  return (
    <section className=' row  container-fluid  align-items-center '>
      {/* <Thanks className={styles.thanks} /> */}
      <div className="col-md-6 w-50">
        <img src={register} alt="register" className="w-100" />
      </div>
      <div className={`${styles.form} col-md-6 col-sm-12   shadow-sm my-3 rounded-2 `}>
        <RegisterForm />
        <Google />
      </div>
    </section>
  );
};

export default Rgeister;
