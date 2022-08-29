import { Link } from 'react-router-dom';

function Navbar() {

    return (
        <div className="navbar">
            <div className="nav-element" id='nav-home'>
                <Link to="/" >Home</Link>
            </div>
            <div className="nav-element">
                <Link to="/saveti" id='nav-saveti'>Saveti</Link>
            </div>
        </div>
    );
}

export default Navbar;