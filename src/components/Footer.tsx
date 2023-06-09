import logo from "../assets/bodyfit-logo.svg";

export default function Footer() {
  return (
    <footer className="flex items-center justify-between bg-neutral-900 px-20 py-10">
      <img src={logo} alt="Bodyfit logo" className="w-24" />
      <p className="text-neutral-500">Todos os direitos reservados.</p>
    </footer>
  );
}
