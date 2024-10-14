const WelcomeNavbar = () => {
  return (
    <nav className=" w-full px-8 py-10">
      <div className="flex flex-row w-full gap-16">
        <div className="">
          <img src="/mcdonalds-logo.png" alt="" className="w-20 h-20" />
        </div>
        <div className="flex flex-col">
          <h1 className="font-magical text-5xl text-stone-900">Bienvenido</h1>
          <p className="font-rubik text-xl">
            Navegar por las categorías a continuación
          </p>
        </div>
      </div>
    </nav>
  );
};

export default WelcomeNavbar;
