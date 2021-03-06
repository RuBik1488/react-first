import styles from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <div className={styles.sidebar}>
            <nav>
                <ul>
                    <li><NavLink to="/profile" activeClassName={styles.active}>Profile</NavLink></li>
                    <li><NavLink to="/dialogs" activeClassName={styles.active}>Messages</NavLink></li>
                    <li><NavLink to="/news" activeClassName={styles.active}>News</NavLink></li>
                    <li><NavLink to="/music" activeClassName={styles.active}>Music</NavLink></li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar;