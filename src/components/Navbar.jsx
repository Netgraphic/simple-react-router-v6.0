import { NavLink } from 'react-router-dom';

const Navbar = () => { 
    return (
        <div className="navbar navbar-dark bg-dark">
            <NavLink className="btn btn-outline-primary" to="/">Inicio</NavLink>
            <NavLink className="btn btn-outline-primary" to="/contacto">Contacto</NavLink>
            <NavLink className="btn btn-outline-primary" to="/blog">Blog</NavLink>
        </div>
    );
}

export default Navbar;