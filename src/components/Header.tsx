import logo from "../assets/bodyfit-logo.svg";
import Navbar from "./Navbar";

export default function Header() {
  return (
    <header className="absolute z-10 flex w-full items-center justify-around bg-transparent px-10 py-5 text-white">
      <img src={logo} alt="BodyFit logo" className="w-24" />

      <Navbar />

      <div className="flex gap-10">
        <button className="font-bold hover:brightness-90">ENTRAR</button>
        <button className="bg-red-500 p-3 font-bold hover:brightness-90">
          CRIAR CONTA
        </button>
      </div>
    </header>
  );
}
