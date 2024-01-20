import classNames from 'classnames/bind';
import styles from './Banner.module.scss';

const cx = classNames.bind(styles);

function Banner() {
    return (
        <div className={cx('banner')}>
            <img src="https://aristino.com/Data/ResizeImage/images/adv/slide-home-1/banner-chong-dich-1x0x0x2.jpg" alt="banner"></img>
        </div>
    ) }

export default Banner;