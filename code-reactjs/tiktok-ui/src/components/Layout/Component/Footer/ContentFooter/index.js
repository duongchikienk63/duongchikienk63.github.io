import classNames from 'classnames/bind';
import styles from './ContentFooter.module.scss';

const cx = classNames.bind(styles);

const aboutUs = ['Câu chuyện thương hiệu', 'Tin tức'];

const policy = [
    'Chính sách đổi hàng',
    'Chính sách bảo hành',
    'Chính sách bảo mật',
];

const advise = ['Hỏi đáp'];

let title = [];

function ContentFooter(props) {
    if (props.aboutUs) {
        title = [...aboutUs];
    } else if (props.policy) {
        title = [...policy];
    } else {
        title = [...advise];
    }

    const listItems = title.map((item, index) => <li key={index}>{item}</li>);

    return (
        <div className={cx('col-lg-4')}>
            <h3>{props.name}</h3>
            <ul>{listItems}</ul>
        </div>
    );
}

export default ContentFooter;
