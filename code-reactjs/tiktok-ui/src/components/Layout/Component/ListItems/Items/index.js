import classNames from 'classnames/bind';
import styles from './Items.module.scss';
import { useNavigate } from 'react-router';
import { useState, useEffect } from 'react';
import ProductDataService from '~/services/products.services';

const cx = classNames.bind(styles);

function Items(props) {
    const [item, setItem] = useState([]);

    const [itemList, setItemList] = useState([]);


    useEffect(() => {
        getProducts();
    }, []);

    const getProducts = async () => {
        const data = await ProductDataService.getAllProducts();
        setItemList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    const navigate = useNavigate();

    const handleToDetails = async () => {
        for (let i = 0; i < itemList.length; i++) {
            if (props.name === itemList[i].name) {
                item.push(itemList[i]);
                setItem(itemList[i]);
                await localStorage.setItem('item', JSON.stringify(item));
            }
        }

        navigate('/productdetails');
    };

    const VND = new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND',
    });

    console.log(itemList)

    return (
        <div className={cx('col-lg-3')}>
            <div className={cx('product-item')} onClick={handleToDetails}>
                <img src={props.img} alt="Quần jeans nam MS-01" />
                <p className={cx('name')}>{props.name}</p>
                <p className={cx('price')}>{VND.format(props.price)}</p>
            </div>
        </div>
    );
}

export default Items;
