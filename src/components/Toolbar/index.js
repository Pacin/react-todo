import {Link} from 'react-router-dom';

import s from './style.module.scss';

const Toolbar = () => (
    <nav className={s.toolbar}>
        <Link className={s.brandLogo} to='/'>Game App</Link>


        <ul className={s.navList}>
            <li className={s.navItem}>
                <Link className={s.navLink} to='/todo'>Todo App</Link>
            </li>
            <li className={s.navItem}>
                <Link className={s.navLink} to='/game'>Game</Link>
            </li>
        </ul>
    </nav>
)

export default Toolbar;
