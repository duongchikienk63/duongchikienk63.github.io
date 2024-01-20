import styles from './Logo.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Image() {
    return (
        <div className={cx('logo')}>
            <Link to='/'>
                <img
                    className={cx('img')}
                    src="https://duongchikienk63.github.io/Do_an/img/DCK.png"
                    alt='logo'
                ></img>
            </Link>
        </div>
    );
}

export default Image;
