import classNames from 'classnames/bind';
import styles from './Footer.module.scss';
import ContentFooter from './ContentFooter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faFacebook,
    faInstagram,
    faTwitter,
    faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);
function Footer( props ) {
    return (
        <div className={cx('footer')}>
            <div className={cx('container')}>
                <div className={cx('row')}>
                    <div className={cx('col-lg-8')}>
                        <div className={cx('row')}>
                            <ContentFooter aboutUs name="VỀ CHÚNG TÔI" />
                            <ContentFooter policy name="CHÍNH SÁCH BÁN HÀNG" />
                            <ContentFooter advise name="TƯ VẤN" />
                            {/* <div className={cx('payment')}>
                                <p>Phương thức thanh toán</p>
                                <img
                                    src="https://duongchikienk63.github.io/Do_an/img/payment.png"
                                    alt="payment"
                                />
                            </div> */}
                        </div>
                    </div>
                    <div className={cx('col-lg-4')}>
                        <h3>THEO DÕI BẢN TIN CỦA CHÚNG TÔI</h3>
                        <div className={cx('uu_dai')}>
                            <input
                                type="text"
                                placeholder="Nhập email của bạn..."
                            />
                            <button>ĐĂNG KÝ</button>
                        </div>
                        <div className={cx('connect')}>
                            <p>Kết nối với chúng tôi</p>
                            <div className={cx('connect-icon')}>
                                <Link>
                                    <FontAwesomeIcon icon={faFacebook} />
                                </Link>
                                <Link>
                                    <FontAwesomeIcon icon={faTwitter} />
                                </Link>
                                <Link>
                                    <FontAwesomeIcon icon={faInstagram} />
                                </Link>
                                <Link>
                                    <FontAwesomeIcon icon={faYoutube} />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx('license')}>Bản Quyền Thuộc DCK Store</div>
        </div>
    );
}

export default Footer;
