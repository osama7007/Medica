import { BrowserRouter, Route, Routes } from "react-router-dom";
import Rgeister from "./pages/register";
import Home from './pages/home'
import Welcome from './pages/welcome'
import RegisterForm from "./pages/register/Form";

function App() {
  return (
    <Rgeister />
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<Welcome />} />
    //     <Route path="/signup" element={<Rgeister />} />
    //     <Route path="/home" element={<Home />} />
    //   </Routes>
    // </BrowserRouter>
  );
}

export default App;
