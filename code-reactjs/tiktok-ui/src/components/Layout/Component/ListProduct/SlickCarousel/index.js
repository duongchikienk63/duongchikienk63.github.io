import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import classNames from 'classnames/bind';
import styles from './SlickCrousel.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", position: "relative", top: "-238px", left: "1245px", zIndex: "9999" }}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", position: "relative", top: "235px", left: "20px", zIndex: "9999" }}
        onClick={onClick}
      />
    );
  }

export default function SimpleSlider(props) {
    var settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 300,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        slidesToShow: 4,
        slidesToScroll: 1,
    };
    return (
        <div className={cx('m-bottom')}>
            <Slider {...settings}>
                <div className={cx('col-3')}>
                    <Link to='/shirt'>
                        <div className={cx('product-item')}>
                            <img
                                src="https://aristino.com/Data/ResizeImage/images/adv/slide-home-1/banner-chong-dich-3x500x500x4.webp"
                                alt="img-item"
                            />
                            <p>Áo Sơmi</p>
                        </div>
                    </Link>
                </div>
                <div className={cx('col-3')}>
                    <Link to='trouser'>
                        <div className={cx('product-item')}>
                            <img
                                src="https://aristino.com/Data/ResizeImage/images/adv/slide-home-1/banner-chong-dich-2x500x500x4.jpg"
                                alt="img-item"
                            />
                            <p>Quần Âu</p>
                        </div>
                    </Link>
                </div>
                <div className={cx('col-3')}>
                    <Link to='/collection'>
                        <div className={cx('product-item')}>
                            <img
                                src="https://aristino.com/Data/ResizeImage/images/adv/slide-home-1/man-in-sunshine-2x500x500x4.jpg"
                                alt="img-item"
                            />
                            <p>Bộ Sưu Tập</p>
                        </div>
                    </Link>
                </div>
                <div className={cx('col-3')}>
                    <Link to='/shirt'>
                        <div className={cx('product-item')}>
                            <img
                                src="https://aristino.com/Data/ResizeImage/images/adv/slide-home-1/banner-chong-dich-3x500x500x4.webp"
                                alt="img-item"
                            />
                            <p>Áo Sơmi</p>
                        </div>
                    </Link>
                </div>
                <div className={cx('col-3')}>
                    <Link to='trouser'>
                        <div className={cx('product-item')}>
                            <img
                                src="https://aristino.com/Data/ResizeImage/images/adv/slide-home-1/banner-chong-dich-2x500x500x4.jpg"
                                alt="img-item"
                            />
                            <p>Quần Âu</p>
                        </div>
                    </Link>
                </div>
                <div className={cx('col-3')}>
                    <Link to='/collection'>
                        <div className={cx('product-item')}>
                            <img
                                src="https://aristino.com/Data/ResizeImage/images/adv/slide-home-1/man-in-sunshine-2x500x500x4.jpg"
                                alt="img-item"
                            />
                            <p>Bộ Sưu Tập</p>
                        </div>
                    </Link>
                </div>

            </Slider>
        </div>
    );
}
