import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Welcome from "./pages/welcome";
import SignUp from "./pages/signup";
import Login from "./pages/login";
import Articles from "./pages/articles";
import ArticleDetailes from "./pages/articleDetaits";
import Patient from "./pages/patient";
import Layout from "./layout";
import useDoctors from "./hooks/useDoctors";
import ProfilePatient from "./pages/profilePatient";
import TopRated from './pages/top_rated';
import useArticles from "./hooks/useArticles";



function App() {
  useDoctors();
  useDoctors();
  return (

    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/patient" element={<Patient />} />
          <Route path="/profilePatient" element={<ProfilePatient />} />
          <Route path='/topRated' element={<TopRated />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );

}

export default App;
