import classNames from 'classnames/bind';
import styles from './Article.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);
function Article(props) {
    return (
        <>
            <div className={cx('col-lg-4 col-md-6 col-sm-12 mb-5 post-item')}>
                <Link to='/detailsarticle'>
                    <div className={cx('img-post')}>
                        <img src={props.img} alt="#" />
                    </div>
                    <div className={cx('post-content')}>
                        <h3>Tin tức DCK Store</h3>
                        <h4>GRAN OPENING | DCK VINCOM SMART CITY</h4>
                        <p>{props.text}</p>
                    </div>
                </Link>
            </div>
        </>
    );
}

export default Article;
