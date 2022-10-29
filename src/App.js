import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/home'
import Welcome from './pages/welcome'
import SignUp from "./pages/signup";
import Login from "./pages/login";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
