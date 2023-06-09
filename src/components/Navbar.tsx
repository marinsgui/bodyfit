import { Link } from 'react-scroll'

export default function Navbar() {
  const navItems = [
    {
      name: "Página inicial",
      url: "Inicial",
      id: 1,
    },
    {
      name: "Sobre",
      url: "Sobre",
      id: 2,
    },
    {
      name: "Exercícios",
      url: "Exercicios",
      id: 3,
    },
    {
      name: "Preços",
      url: "Preços",
      id: 4,
    },
    {
      name: "Comunidade",
      url: "Comunidade",
      id: 5,
    },
    {
      name: "FAQ",
      url: "FAQ",
      id: 6,
    },
  ];

  return (
    <nav>
      <ul className="flex items-center justify-around gap-7">
        {navItems.map((item) => (
          <li key={item.id} className="font-semibold hover:brightness-90 cursor-pointer">
            <Link to={item.url} smooth duration={300}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
