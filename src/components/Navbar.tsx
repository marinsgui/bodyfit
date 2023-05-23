export default function Navbar() {
    const navItems = [
        {
            name: 'Página inicial',
            url: '#',
            id: 1,
        },
        {
            name: 'Sobre',
            url: '#',
            id: 2,
        },
        {
            name: 'Exercícios',
            url: '#',
            id: 3,
        },
        {
            name: 'Preços',
            url: '#',
            id: 4,
        },
        {
            name: 'Comunidade',
            url: '#',
            id: 5,
        },
        {
            name: 'FAQ',
            url: '#',
            id: 6,
        },
    ]

    return (
        <nav>
            <ul className="flex justify-around items-center gap-7">
                {navItems.map(item => (
                    <li key={item.id}>
                        <a href={item.url}>{item.name}</a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}