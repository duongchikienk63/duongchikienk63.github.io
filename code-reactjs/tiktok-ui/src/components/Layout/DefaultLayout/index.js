import classNames from 'classnames/bind';
import Header from '~/components/Layout/Component/Header';
import styles from './DefaultLayout.module.scss';

const cx = classNames.bind(styles);

function DefaultLayout() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <div style={{ width: '100%', lineHeight: '0' }}>
                    <img
                        style={{ width: '100%' }}
                        src="https://duongchikienk63.github.io/Do_an/img/baner_header.jpg"
                        alt="banner"
                    ></img>
                </div>
                <Header home="active" />
            </div>
        </div>
    );
}

export default DefaultLayout;
