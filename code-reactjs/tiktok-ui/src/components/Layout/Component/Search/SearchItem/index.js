import classNames from 'classnames/bind';
import styles from './SearchItem.module.scss';
import { useNavigate } from 'react-router';
import { useState, useEffect } from 'react';
import ProductDataService from '~/services/products.services';

const cx = classNames.bind(styles);

function SearchItem(props) {

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
                localStorage.setItem('item', JSON.stringify(item));
            }
        }

        navigate('/productdetails');
    };

    return (
        <div onClick={handleToDetails} className={cx('wrapper')}>
            <div className={cx('image-search')}>
                <img
                    src={props.img}
                    alt="anh"
                ></img>
            </div>
            <div className={cx('infor')}>
                <div className={cx('name')}>{props.name}</div>
                <div className={cx('type')}>{props.type}</div>
            </div>
        </div>
    );
}

export default SearchItem;
