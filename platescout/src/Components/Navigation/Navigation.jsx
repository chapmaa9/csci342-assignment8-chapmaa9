import './Navigation.css';
import {Link} from 'react-router-dom';

function Navigation() {
    return (
        <div>
            <h1>PlateScout</h1>
        <nav className="Navigation">
            <ul>
                <li>
                    <Link to="/login" className="Navigation-login">Log In</Link>
                </li>
                <li>
                    <Link to="/signup" className="Navigation-signup">Sign Up</Link>
                </li>
            </ul>
        </nav>
        </div>
    );
}

export default Navigation;
