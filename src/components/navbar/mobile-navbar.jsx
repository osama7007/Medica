import { Link } from "react-router-dom";
import classes from "./mobile-navbar.module.css";
import { useLocation } from "react-router-dom";
const MobileNavbar = ({ isOpen, setIsOpen,pageInView }) => {
  const closeMenu = () => setIsOpen(false);
  
  return (
    <div className={`${classes.container} ${isOpen ? classes.open : ""}`}>
      <nav className={`${classes.navbar} mb-5`}>
        <ul className={classes.links}>
          <li
            className={`${classes.item} ${
              pageInView === "" ? classes.selected : ""
            }`}
          >
            <Link to="/" className={classes.link} onClick={closeMenu}>
              Home
            </Link>
          </li>
          <li
            className={`${classes.item} ${
              pageInView === "portfolio" ? classes.selected : ""
            }`}
          >
            <Link to="/portfolio" className={classes.link} onClick={closeMenu}>
              Portfolio
            </Link>
          </li>
          <li
            className={`${classes.item} ${
              pageInView === "appointments" ? classes.selected : ""
            }`}
          >
            <Link
              to="/appointments"
              className={classes.link}
              onClick={closeMenu}
            >
              Appointments
            </Link>
          </li>
          <li
            className={
              pageInView === "doctors"
                ? `${classes.item} ${classes.selected}`
                : classes.item
            }
          >
            <Link to="/doctors" className={classes.link} onClick={closeMenu}>
              Doctors
            </Link>
          </li>
          <li
            className={`${classes.item} ${classes.logout}`}
            onClick={closeMenu}
          >
            Logout <i className="fas fa-door-open"></i>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default MobileNavbar;
