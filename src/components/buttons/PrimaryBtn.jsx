import styles from "./buttons.module.css";

const PrimaryBtn = (props) => {
  let { action, title , disabled } = props;

  return (
		<button
			className={`${styles.primaryBtn} border-0 text-uppercase fw-bold shadow-sm  me-4  rounded-pill px-5 py-2 text-white`}
			onClick={action}
			disabled={disabled === "Saved" ? true : false}>
			{title}
		</button>
	);
};

export default PrimaryBtn;
