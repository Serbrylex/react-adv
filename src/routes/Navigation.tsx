import {
    BrowserRouter,
    Route,
    NavLink,
    Routes,
    Navigate,
} from 'react-router-dom'

import logo from '../logo.svg'

const Navigation = () => {

    const isActiveNavLink = ({ isActive }: { isActive: boolean }) => {
        return isActive ? 'nav-active' : ''
    }

    return (
        <BrowserRouter>
            <div className="main-layout">
                <nav>
                    <img src={logo} alt="logo" />
                    <ul>
                        <li>
                            <NavLink to="/home" className={isActiveNavLink}>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about" className={isActiveNavLink}>About</NavLink>
                        </li>
                        <li>
                            <NavLink to="/users" className={isActiveNavLink}>Users</NavLink>
                        </li>
                    </ul>
                </nav>

                <Routes>
                    <Route path="about" element={<h1>About Page</h1>} />
                    <Route path="users" element={<h1>Users Page</h1>} />
                    <Route path="home" element={<h1>Home Page</h1>} />
                    <Route
                        path="/*"
                        element={<Navigate to="/home" replace />}
                    />
                </Routes>
            </div>
        </BrowserRouter>
    )
}

export default Navigation
