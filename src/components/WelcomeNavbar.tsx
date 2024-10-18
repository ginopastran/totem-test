const WelcomeNavbar = () => {
  return (
    <nav className=" w-full px-8 py-10">
      <div className="flex flex-row w-full gap-16">
        <div className="">
          <img src="/mcdonalds-logo.png" alt="" className="w-28 h-28" />
        </div>
        <div className="flex flex-col">
          <h1 className="font-magical text-6xl text-stone-800">Bienvenido</h1>
          <p className="font-rubik text-2xl">
            Navegar por las categorías a continuación
          </p>
        </div>
      </div>
    </nav>
  );
};

export default WelcomeNavbar;
