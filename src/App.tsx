import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import LayoutMain from "./pages/LayoutMain";
import LayoutPay from "./pages/LayoutPay";
import PayPage from "./pages/PayPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<LayoutMain />}>
          <Route path="/" element={<Home />} />
        </Route>
        <Route element={<LayoutPay />}>
          <Route path="/pay" element={<PayPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
