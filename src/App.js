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
import Date from "./components/Appoinment";

function App() {
  useDoctors();
  useArticles();

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/patient" element={<Patient />} />
          <Route path="/patient-profile" element={<ProfilePatient />} />
          <Route path="/top-rated" element={<TopRated />} />
          <Route path="/doctors" element={<AllDoctors />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/articles/:id" element={<ArticleDetailes />} />
          <Route path="/doctor-profile/:id" element={<DoctorProfile />} />
          <Route path="/doctor-form/:id" element={<DoctorForm />} />
          <Route path="/appoinment" element={<Date/>}/>
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
