import classNames from 'classnames/bind';
import styles from './Search.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';
import { useEffect, useState } from 'react';

import SearchItem from './SearchItem';
// import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(true);

    useEffect(() => {
        if (!searchValue.trim()) {
            setSearchResult([]);
            return;
        }
        fetch(`http://localhost:3000/items?q=${encodeURIComponent(searchValue)}`)
            .then((res) => {
                return res.json();
            })
            .then((res) => {
                setSearchResult(res);
            });
    }, [searchValue]);

    const handleHideResult = () => {
        setShowResult(false);
    };

    return (
        <Tippy
            interactive
            visible={showResult && searchResult.length > 0}
            placement="bottom"
            render={(attrs) => (
                <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                    <div className={cx('wrapper')}>
                        <h4 className={cx('search-title')}>Sản Phẩm</h4>
                        {searchResult.map((result) => (
                            <SearchItem key={result.id} name={result.name} type={result.type} img={result.image} />
                        ))}
                    </div>
                </div>
            )}
            onClickOutside={handleHideResult}
        >
            <div className={cx('search-input')}>
                <input
                    value={searchValue}
                    placeholder="Tìm kiếm"
                    spellCheck={false}
                    onChange={(e) => setSearchValue(e.target.value)}
                    onFocus={() => setShowResult(true)}
                />
                <button className={cx('search-btn')}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
            </div>
        </Tippy>
    );
}

export default Search;
