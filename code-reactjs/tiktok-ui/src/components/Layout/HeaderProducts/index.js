import classNames from 'classnames/bind';
import Header from '~/components/Layout/Component/Header';
import Back from '../Component/Back';
import styles from './HeaderGeneral.module.scss';

const cx = classNames.bind(styles);

function HeaderGeneral(props) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <Header product={props.product} collection={props.collection} />
                <Back home="Trang chủ / " freeze={props.freeze}/>
                <div className={cx('banner_trangsp')}>
                    <img
                        src="https://duongchikienk63.github.io/Do_an/img/banner_trangsp.jpg"
                        alt="banner"
                    ></img>
                </div>
            </div>
        </div>
    );
}

export default HeaderGeneral;
