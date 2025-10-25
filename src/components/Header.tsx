import { Link } from "@tanstack/react-router"


export default function Header() {
    const routes = [
        {
            path: '/',
            label: 'Home',
        },
        {
            path: '/projects',
            label: 'projects',
        },
        {
            path: '/articles',
            label: 'Article',
        },
    ]
    return (
        <header className="flex justify-center items-center p-8 text-white uppercase font-bold text-sm">
            <ul className="flex gap-20">
                {routes.map((route) => (
                    <li key={route.path}>
                        <Link to={route.path}>{route.label}</Link>
                    </li>
                ))}
            </ul>
        </header>
    )
}