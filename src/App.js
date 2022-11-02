import { BrowserRouter, Route, Routes } from "react-router-dom";
import Rgeister from "./pages/register";
import Login from "./pages/login";
import Home from './pages/home'
import Welcome from './pages/welcome'
import Articles from "./pages/articles";
import ArticleDetailes from "./pages/articleDetaits";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/signup" element={<Rgeister />} />
        <Route path="/home" element={<Home />} />
        <Route path="/articles" element={<Articles/>} />
        <Route path="/articles/:id" element={<ArticleDetailes />} />

      
      </Routes>
    </BrowserRouter>
  );
}

export default App;
