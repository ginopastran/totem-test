import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import LayoutMain from "./pages/LayoutMain";
import LayoutPay from "./pages/LayoutPay";
import PayPage from "./pages/PayPage";
import PaymentOptionsPage from "./pages/PaymentOptionsPage"; // Importamos el nuevo componente
import { Toaster } from "react-hot-toast";
import Box from "./pages/Box";
import Visor from "./pages/Visor";

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
        <Route path="/box" element={<Box />} />
        <Route path="/visor" element={<Visor />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
