import { Link } from 'react-router-dom';
import styles from './Menu.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Menu({ to, children, onClick, active, hide }) {
    let Comp = 'span';

    const props = {
        onClick,
    };

    if (to) {
        props.to = to;
        Comp = Link;
    }

    return (
        <li style={{ display: hide }} className={cx({ active })}>
            <Comp {...props}>{children}</Comp>
        </li>
    );
}

export default Menu;
