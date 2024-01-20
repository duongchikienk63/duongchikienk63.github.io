import classNames from 'classnames/bind';
import styles from './ListItems.module.scss';
import React, { useEffect, useState } from 'react';
import Items from './Items';
import ProductDataService from '~/services/products.services';
import CategoryDataService from '~/services/category.services';

const cx = classNames.bind(styles);

function ListItems(props) {
    const [items, setItems] = useState([]);
    const [itemList, setItemList] = useState([]);
    const [categoryList, setCategoryList] = useState([]);
    const [category, setCategory] = useState([]);

    const [itemCategory, setItemCategory] = useState([]);

    useEffect(() => {
        getProducts();
        getItemCategory();
    }, []);

    const getProducts = async () => {
        const data = await ProductDataService.getAllProducts();
        setItemList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    const getItemCategory = async () => {
        const data = await CategoryDataService.getAllCategory();
        setCategoryList(
            data.docs.map((doc) => ({ ...doc.data(), id: doc.id })),
        );
    };

    useEffect(() => {
        if (props.category == 'shirt') {
            for (let i = 0; i < categoryList.length; i++) {
                if (categoryList[i].shirt) {
                    setCategory(categoryList[i].shirt);
                    return;
                }
            }
        } else if (props.category == 'trouser') {
            for (let i = 0; i < categoryList.length; i++) {
                if (categoryList[i].trouser) {
                    setCategory(categoryList[i].trouser);
                    return;
                }
            }
        } else {
            setCategory([]);
        }
    }, [categoryList]);

    const setProduct = () => {
        if (props.category) {
            for (let i = 0; i < category.length; i++) {
                for (let j = 0; j < itemList.length; j++) {
                    if (category[i] == itemList[j].id) {
                        setItemCategory((prevItemCategory) => [
                            ...prevItemCategory,
                            itemList[j],
                        ]);
                    }
                }
            }
        } else {
            setItems(itemList);
        }
    };

    useEffect(() => {
        setProduct();
    }, [category]);

    useEffect(() => {
        handleItem();
    }, [itemCategory]);

    const handleItem = () => {
        setItems(itemCategory);
    };

    console.log(itemList)

    return (
        <div className={cx('margin_top')}>
            <div className={cx('container')}>
                <h2>{props.title}</h2>
                <div className={cx('row')}>
                    {items.map((item) => (
                        <Items
                            key={item.id}
                            name={item.name}
                            img={item.image}
                            price={item.price}
                        />
                    ))}
                </div>
                <div
                    style={{ display: props.hide }}
                    className={cx('bst-content')}
                >
                    <h1>MAN IN INNOVATION</h1>
                    <p>
                        Khi thời tiết bắt đầu chuyển mình để đón nắng gió mùa hè
                        cũng là thời điểm hoàn hảo để bắt đầu hành trình làm mới
                        phong cách cá nhân. 𝐌𝐚𝐧 𝐢𝐧 𝐈𝐧𝐧𝐨𝐯𝐚𝐭𝐢𝐨𝐧 là bản hoà tấu sôi
                        động đánh dấu sự trở lại đầu tiên của Aristino trên sàn
                        diễn thời trang Xuân - Hè 2022 với nhiều đột phá mới. Sự
                        trở mình và cách tân linh hoạt của các chi tiết thêu,
                        các hoạ tiết dệt kẻ sắc màu trên nền màu trung
                    </p>
                </div>
            </div>
        </div>
    );
}

export default ListItems;
