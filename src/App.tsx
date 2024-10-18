import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import LayoutMain from "./pages/LayoutMain";
import LayoutPay from "./pages/LayoutPay";
import PayPage from "./pages/PayPage";
import PaymentOptionsPage from "./pages/PaymentOptionsPage"; // Importamos el nuevo componente
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <BrowserRouter>
      <Toaster position="top-right" reverseOrder={false} />
      <Routes>
        <Route element={<LayoutMain />}>
          <Route path="/" element={<Home />} />
        </Route>
        <Route element={<LayoutPay />}>
          <Route path="/pay" element={<PayPage />} />
          <Route path="/payment-options" element={<PaymentOptionsPage />} />
          {/* Agrega las rutas para "totem" y "mostrador" si aún no lo has hecho */}
          {/* <Route path="/payment/totem" element={<TotemPayment />} /> */}
          {/* <Route path="/payment/mostrador" element={<CounterPayment />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
