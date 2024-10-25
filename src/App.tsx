import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import LayoutMain from "./pages/LayoutMain";
import LayoutPay from "./pages/LayoutPay";
import PayPage from "./pages/PayPage";
import PaymentOptionsPage from "./pages/PaymentOptionsPage"; // Importamos el nuevo componente
import { Toaster } from "react-hot-toast";
import Box from "./pages/Box";
import Visor from "./pages/Visor";
import PaymentMethods from "./pages/PaymentMethods";
import Finisher from "./pages/Finisher";
import Counter from "./pages/Counter";
import { useEffect, useRef, useState } from "react";

function App() {
  const [mostrarVideo, setMostrarVideo] = useState(false); // Estado para controlar el video
  const timerRef = useRef(null); // Usamos useRef para almacenar el temporizador

  const iniciarTemporizador = () => {
    // Si hay un temporizador activo, lo limpiamos
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    // Iniciar un nuevo temporizador que muestra el video después de 10 segundos (10000 ms)
    timerRef.current = setTimeout(() => {
      setMostrarVideo(true);
    }, 300000); // Cambia el tiempo aquí según lo que necesites
  };

  const handleUserInteraction = () => {
    setMostrarVideo(false); // Ocultar el video
    iniciarTemporizador(); // Reiniciar el temporizador
  };

  useEffect(() => {
    // Agregar los eventos de interacción del usuario
    window.addEventListener("click", handleUserInteraction);
    window.addEventListener("touchstart", handleUserInteraction);
    // agregar scroll y mouseclick

    // Iniciar el temporizador al cargar el componente
    iniciarTemporizador();

    // Cleanup para evitar múltiples listeners y temporizadores
    return () => {
      clearTimeout(timerRef.current); // Limpiar el temporizador al desmontar el componente
      window.removeEventListener("click", handleUserInteraction);
      window.removeEventListener("touchstart", handleUserInteraction);
    };
  }, []); // No hay dependencias que cambien en cada render
  return (
    <BrowserRouter>
      {mostrarVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
          <video autoPlay muted loop className="w-full h-full object-cover">
            <source src="/visor-video.mp4" type="video/mp4" />
            Tu navegador no soporta el video.
          </video>
        </div>
      )}
      <Toaster position="top-right" reverseOrder={false} />
      <Routes>
        <Route element={<LayoutMain />}>
          <Route path="/" element={<Home />} />
        </Route>
        <Route element={<LayoutPay />}>
          <Route path="/pay" element={<PayPage />} />
          <Route path="/payment-options" element={<PaymentOptionsPage />} />
          <Route path="/payment-methods" element={<PaymentMethods />} />
          <Route path="/finisher" element={<Finisher />} />
          <Route path="/counter" element={<Counter />} />
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
