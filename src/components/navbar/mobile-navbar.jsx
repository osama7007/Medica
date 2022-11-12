import { Link, useNavigate } from "react-router-dom";
import classes from "./mobile-navbar.module.css";
import { useLocation } from "react-router-dom";
import { auth } from "../../firebase/firebase";
import { signOut } from "firebase/auth";
import { logout } from "../../redux/authSlice";
import { useDispatch } from "react-redux";
const MobileNavbar = ({ isOpen, setIsOpen, pageInView }) => {
  const closeMenu = () => setIsOpen(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  return (
    <div
      className={`${classes.container} ${
        isOpen ? classes.open : ""
      } shadow-sm `}
    >
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
              pageInView === "profile" ? classes.selected : ""
            }`}
          >
            <Link to="/profile" className={classes.link} onClick={closeMenu}>
              Portfolio
            </Link>
          </li>
          <li
            className={`${classes.item} ${
              pageInView === "doctors" ? classes.selected : ""
            }`}
          >
            <Link to="/doctors" className={classes.link} onClick={closeMenu}>
              Our Doctors
            </Link>
          </li>
          <li
            className={`${classes.item} ${
              pageInView === "articles" ? classes.selected : ""
            }`}
          >
            <Link to="/articles" className={classes.link} onClick={closeMenu}>
              Articles
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
              pageInView === "new-doctor"
                ? `${classes.item} ${classes.selected}`
                : classes.item
            }
          >
            <Link to="/new-doctor" className={classes.link} onClick={closeMenu}>
              New Doctor
            </Link>
          </li>
          <li
            className={
              pageInView === "about"
                ? `${classes.item} ${classes.selected}`
                : classes.item
            }
          >
            <Link to="/about" className={classes.link} onClick={closeMenu}>
              About
            </Link>
          </li>
          <li
            className={`${classes.item} ${classes.logout}`}
            onClick={() => {
              signOut(auth).then(() => {
                closeMenu();
                dispatch(logout());
                navigate("/login");
              });
            }}
          >
            Logout <i className="fas fa-door-open"></i>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default MobileNavbar;
