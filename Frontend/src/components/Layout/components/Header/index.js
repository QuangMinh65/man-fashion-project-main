import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
// Fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCartShopping,
    faCircleQuestion,
    faEarthAsia,
    faEllipsis,
    faEllipsisVertical,
    faMagnifyingGlass,
} from '@fortawesome/free-solid-svg-icons';

import Button from '../../../Button';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import Menu from '../../../Poppers/Menu';
import DarkMode from '../../../DarkMode';
const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'Tiếng Việt',
        // Menu cấp 2
        children: {
            title: 'Ngôn ngữ',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'Tiếng Anh',
                },

                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
            ],
        },
    },

    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Hỗ trợ và đánh giá',
        to: '/cart',
    },
];

function Header() {
    const currentUsers = false;

    // Handle logic menu change
    const handleMenuChange = (menuItem) => {
        console.log(menuItem);
    };
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                {/* Logo */}
                <Link to="/">
                    <img src="https://www.coolmate.me/images/logo-coolmate.svg"></img>
                </Link>
                {/* HeaderMenu */}
                <div className={cx('headerMenu')}>
                    <ul>
                        <li>
                            <Link to="/">Trang chủ</Link>
                        </li>

                        <li>
                            <Link>Blog</Link>
                        </li>

                        <li>
                            <Link to="/product">Sản phẩm</Link>
                        </li>

                        <li>
                            <Link to="/contact">Liên hệ</Link>
                        </li>
                    </ul>
                </div>

                {/* <Button primary leftIcon={<FontAwesomeIcon className={cx('cart')} icon={faCartShopping} />}>
                    Login
                </Button> */}

                <div className={cx('icon')}>
                    {currentUsers ? (
                        <div className={cx('icon__main')}>
                            {/* search */}
                            <Tippy delay={[0, 0.05]} content="Tìm kiếm" placement="bottom">
                                <button className={cx('icon-btn')}>
                                    <FontAwesomeIcon className={cx('search')} icon={faMagnifyingGlass} />
                                </button>
                            </Tippy>
                            {/* cart */}
                            <Link to="/cart">
                                <Tippy delay={[0, 0.05]} content="Giỏ hàng" placement="bottom">
                                    <button className={cx('icon-btn')}>
                                        <FontAwesomeIcon className={cx('cart')} icon={faCartShopping} />
                                    </button>
                                </Tippy>
                            </Link>

                            {/* user */}
                            <Link to="/login">
                                <button className={cx('icon-btn')}>
                                    <img
                                        src="https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/ba2aad87bd8bafe7f4a4850d15bc4d47~c5_100x100.jpeg?x-expires=1689692400&x-signature=s4rVR2nqZwcUtPVy7%2BzDAkc2TZE%3D"
                                        className={cx('avatar')}
                                    />
                                </button>
                            </Link>
                        </div>
                    ) : (
                        <>
                            {/* search */}
                            <FontAwesomeIcon className={cx('search')} icon={faMagnifyingGlass} />
                            {/* user */}
                            <Link to="/login">
                                <FontAwesomeIcon className={cx('user')} icon={faUser} />
                            </Link>
                            {/* cart */}
                            <Link to="/cart">
                                {' '}
                                <FontAwesomeIcon className={cx('cart')} icon={faCartShopping} />
                            </Link>

                            {/* Menu Poppers */}
                            {/* <Tippy
                                interactive
                                placement="bottom-end"
                                render={(attrs) => (
                                    <div className={cx('menu-items')} tabIndex="-1" {...attrs}>
                                        <PopperWrapper>
                                            <SearchFashionItem />
                                            <SearchFashionItem />
                                            <SearchFashionItem />
                                            <SearchFashionItem />
                                        </PopperWrapper>
                                    </div>
                                )}
                            >
                                <button className={cx('more-btn')}>
                                    <FontAwesomeIcon icon={faEllipsisVertical} />
                                </button>
                            </Tippy> */}

                            <Menu items={MENU_ITEMS} onChange={handleMenuChange}>
                                <button className={cx('more-btn')}>
                                    <FontAwesomeIcon icon={faEllipsisVertical} />
                                </button>
                            </Menu>
                            {/* Dark mode */}
                            {/* <DarkMode/> */}
                        </>
                    )}
                    {/* <DarkMode/> */}
                </div>
            </div>
        </header>
    );
}

export default Header;
