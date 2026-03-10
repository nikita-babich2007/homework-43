import { NavLink } from 'react-router'

export default function Menu() {
    return (
        <nav>
            <ul className='navigation'>
                <li>
                    <NavLink className={(isActive) => isActive ? 'navigation-item-active' : 'navigation-item'} to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink className={(isActive) => isActive ? 'navigation-item-active' : 'navigation-item'} to="/about">About</NavLink>
                </li>
                <li>
                    <NavLink className={(isActive) => isActive ? 'navigation-item-active' : 'navigation-item'} to="/contact">Contacts</NavLink>
                </li>
            </ul>
        </nav>
    )
}