import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./components/views/HomePage/Home";
import Ui from "./components/views/UiPages/UiPage";
import UiInfo from "./components/views/UiPages/UiInfo";
import Egarden from "./components/views/EgardenPage/EgardenPage";
import ServicePage from "./components/views/ServicePage/ServicePage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/ui" element={<Ui />} />
          <Route exact path="/uiinfo" element={<UiInfo />} />
          <Route exact path="/Egarden" element={<Egarden />} />
          <Route exact path="/ServicePage" element={<ServicePage />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
