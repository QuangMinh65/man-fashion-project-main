import styles from './ProductDetail.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function ProductDetail({children}) {
    console.log(children);
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <img
                    src="https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=85,format=auto/uploads/July2023/HN-TU_HAO-3.jpg"
                    className={cx('inner-image')}
                />
                <div className={cx('inner-content')}>
                    <h2 className={cx('inner-content__title')}>Áo thun Cotton Care & Share The Moments</h2>
                    <p className={cx('inner-content__price')}>149.000đ</p>
                    <div className={cx('inner-content__input')}>
                        <div className={cx('inner-content__input-number')}>
                            <span>Số lượng: </span>
                            <input type="number" className={cx('quanity')} min="1" max="99" />
                        </div>

                        <div className={cx('inner-content__input-cart')}>
                            <Link to="/cart"><p>Thêm ngay vào giỏ</p></Link>
                        </div>
                    </div>
                    <hr />

                    <h1>Chính sách mua hàng ở coolmate</h1>
                    <div className={cx('policy')}>
                        <div className={cx('policy__up')}>
                            <p>Chất lượng như hình</p>
                            <p>Miễn phí vận chuyển</p>
                            <p>Chấp nhận đổi trả khi có vấn đề</p>
                        </div>

                        <div className={cx('policy__down')}>
                            <p>Hỗ trợ từ 8h30 - 22h mỗi ngày</p>
                            <p>Giao hàng nhanh toàn quốc</p>
                            <p>Tự hào sản phẩm Việt chất lượng cao</p>
                        </div>

                        {/* <div className={cx('policy__center')}>
                            <p>
                                Hotline 1900.27.27.37 <br />
                                hỗ trợ từ 8h30 - 22h mỗi ngày
                            </p>
                            <p>Giao hàng nhanh toàn quốc</p>
                            <p>Tự hào sản phẩm Việt chất lượng cao</p>
                        </div> */}
                    </div>
                    <div className={cx('related-products')}>
                        <h3>Sản phẩm bạn có thể cần</h3>
                        <div className={cx('related-products__box')}>
                            <div className={cx('box1')}>
                                <Link to="/product/shirt">
                                    <img src="https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=85,format=auto/uploads/June2023/Quan_lot_Gym_Powerfit-listing-26.jpg" />

                                    <div className={cx('related-products__box-content')}>
                                        <p className={cx('related-products__title')}>Áo thun gym Powerfit</p>
                                        <p>299.000</p>
                                    </div>
                                </Link>
                            </div>

                            <div className={cx('box2')}>
                               <Link to="/product/shirt">
                                    <img src="https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=85,format=auto/uploads/March2023/Ao_thun_chay_bo_nam_Essential_Fast__Free_Run5.jpg" />
                                    <div className={cx('related-products__box-content')}>
                                        <p className={cx('related-products__title')}>Áo thun chạy bộ nam</p>
                                        <p>159.000</p>
                                    </div>
                               </Link>
                            </div>

                            <div className={cx('box3')}>
                                <Link to ="/product/shirt">
                                    <img src="https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=85,format=auto/uploads/April2023/10krun-front.jpg" />
                                    <div className={cx('related-products__box-content')}>
                                        <p className={cx('related-products__title')}>Áo thun chạy bộ</p>
                                        <p>129.000</p>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductDetail;
