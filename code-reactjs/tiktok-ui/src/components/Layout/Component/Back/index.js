import classNames from 'classnames/bind';
import styles from './Back.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Back( props ) {

    let classProduct = props.name ? 'name' : 'hide' ;
    let styleBack = props.name ? 'basic' : 'black' ;

    return <div className={cx('move')}>
        <Link className={cx('basic')} to='/'>{props.home}</Link>
        <Link className={cx(styleBack)} to={props.back}>{props.freeze}</Link>
        <p className={classProduct}>{props.name}</p>
    </div>;
}

export default Back;
