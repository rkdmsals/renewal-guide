import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./components/views/HomePage/Home";
import Ui from "./components/views/UiPages/UiPage";
import UiInfo from "./components/views/UiPages/UiInfo";
import Egarden from "./components/views/EgardenPage/EgardenPage";
import ServicePage from "./components/views/ServicePage/ServicePage";
import ColorPage from "./components/views/ColorPage/ColorPage";
import "./components/utils/fontInfo.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Ui />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/uiinfo" element={<UiInfo />} />
          <Route exact path="/Egarden" element={<Egarden />} />
          <Route exact path="/ServicePage" element={<ServicePage />} />
          <Route exact path="/ColorPage" element={<ColorPage />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
