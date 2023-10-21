import classNames from 'classnames/classname'
import styles from './Header.module.scss';

const cx = classNames.bind(styles)

function Header() {
    return <header className={cx('wrapper')}></header>
}

export default Header;