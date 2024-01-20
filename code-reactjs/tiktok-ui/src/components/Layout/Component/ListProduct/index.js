import classNames from 'classnames/bind';
import styles from './ListProduct.module.scss';
import SimpleSlider from './SlickCarousel';

const cx = classNames.bind(styles);

function ListProduct( {name} ) {
    return (
        <section className={cx('list-products')}>
            <div className={cx('container')}>
            <h2>{name}</h2>
            <SimpleSlider productsItem="products-item"/>
            </div>
        </section>
    )
}

export default ListProduct;