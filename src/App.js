import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Welcome from "./pages/welcome";
import SignUp from "./pages/signup";
import Login from "./pages/login";
import Articles from "./pages/articles";
import ArticleDetailes from "./pages/articleDetails";
import Patient from "./pages/patient";
import Layout from "./layout";
import useDoctors from "./hooks/useDoctors";
import ProfilePatient from "./pages/profilePatient";
import TopRated from "./pages/top_rated";
import AllDoctors from "./pages/allDoctors";
import useArticles from "./hooks/useArticles";
import DoctorProfile from "./components/dotctorProfile";
import DoctorForm from "./components/doctor-form";
import { useSelector } from "react-redux";
import useAuth from "./firebase/useAuthStateHandler";
import useAuthStateHandler from "./firebase/useAuthStateHandler";
import {
  IsAuthRouteGuard,
  IsNotAuthRouteGuard,
  LoginRouteGuard,
  LogoutRouteGuard,
} from "./utils/authRouteGuard";

function App() {
  useDoctors();
  useArticles();
  const unSub = useAuthStateHandler();

  const isAuth = useSelector((state) => state.auth.isAuth);

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={isAuth ? <Home /> : <Welcome />} />
          <Route element={<IsNotAuthRouteGuard />}>
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
          </Route>
          <Route element={<IsAuthRouteGuard />}>
            <Route path="/patient" element={<Patient />} />
            <Route path="/profile" element={<ProfilePatient />} />
            <Route path="/top-rated" element={<TopRated />} />
            <Route path="/doctors" element={<AllDoctors />} />
            <Route path="/articles" element={<Articles />} />
            <Route path="/articles/:id" element={<ArticleDetailes />} />
            <Route path="/doctors/:name" element={<DoctorProfile />} />
            <Route path="/doctor-form" element={<DoctorForm />} />
          </Route>
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
