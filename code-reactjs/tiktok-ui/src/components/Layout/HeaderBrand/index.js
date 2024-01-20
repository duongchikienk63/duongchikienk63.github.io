import classNames from 'classnames/bind';
import Header from '~/components/Layout/Component/Header';
import Back from '../Component/Back';
import styles from './HeaderOnly.module.scss';

const cx = classNames.bind(styles);

function HeaderOnly(props) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <Header brand={props.brand} bill={props.bill}/>
                <Back home="Trang chủ /" freeze={props.freeze} back={props.back} name={props.name} />
            </div>
        </div>
    );
}

export default HeaderOnly;
