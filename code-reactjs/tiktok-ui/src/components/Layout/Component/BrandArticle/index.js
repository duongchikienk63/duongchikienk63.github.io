import classNames from 'classnames/bind';
import styles from './BrandArticle.module.scss';
import Article from './Article';
import { useEffect } from 'react';

import BrandArticleDataService from '~/services/branArticle.services';
import { useState } from 'react';

const cx = classNames.bind(styles);
function BrandArticle() {
    const [brandArticle, setBrandArticle] = useState([]);

    const getBrandArticles = async () => {
        const data = await BrandArticleDataService.getAllBrandArticles();
        setBrandArticle(
            data.docs.map((doc) => ({ ...doc.data(), id: doc.id })),
        );
    };

    useEffect(() => {
        getBrandArticles();
    }, []);

    return (
        <div className={cx('border')}>
            <div className={cx('container')}>
                <div className={cx('row mb-2')}>
                    {brandArticle.map((brandArticle) => (
                        <Article
                            key={brandArticle.id}
                            text={brandArticle.text}
                            img={brandArticle.image}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default BrandArticle;
