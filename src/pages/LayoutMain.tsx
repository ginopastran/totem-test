import { Outlet } from "react-router-dom";
import WelcomeNavbar from "../components/WelcomeNavbar";
import PayNav from "../components/PayNav";

const LayoutMain = () => {
  return (
    <main className="bg-[radial-gradient(circle_at_bottom_right,_var(--tw-gradient-stops))] from-sky-200 via-purple-200 to-white to-80% h-screen w-full">
      <WelcomeNavbar />
      <PayNav />
      <Outlet />
    </main>
  );
};

export default LayoutMain;
