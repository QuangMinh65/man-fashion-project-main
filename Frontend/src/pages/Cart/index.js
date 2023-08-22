import styles from './Cart.module.scss';
import classNames from 'classnames/bind';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Cart({data}) {
    console.log(data); 
    
    return (
        <div className={cx('container')}>
        <div className={cx('trai')}>
          <h2>Tin tức</h2>
          <div className={cx('baiviet')}>
            <div className={cx('anh')}>
              <img src="https://www.chapi.vn/img/product/2021/6/26/ao-thun-nam-trung-nien-pixi-2-new.jpg" alt="" />
            </div>
            <div className={cx('thongtin')}>
              <p>
                <b>🧐Quang Minh</b>
                <i>20/8/2022</i>
              </p>
              <h2>Black Friday - săn sale ngất ngây</h2>
              <p>Áo thun nam trung niên Pixi xanh đậm M được làm từ chất liệu vải bông tự nhiên, mềm mại, thấm hút mồ hôi. Cổ áo thuộc kiểu cổ điển, đường may đều, sắc...</p>
            </div>
            <hr className={cx('hr')} />
          </div>
          <div className={cx('baiviet')}>
            <div className={cx('anh')}>
              <img src="https://www.chapi.vn/img/product/2021/6/26/ao-thun-nam-trung-nien-pixi-2-new.jpg" alt="" />
            </div>
            <div className={cx('thongtin')}>
              <p>
                <b>🧐Quang Minh</b>
                <i>20/8/2022</i>
              </p>
              <h2>Black Friday - săn sale ngất ngây</h2>
              <p>Áo thun nam trung niên Pixi xanh đậm M được làm từ chất liệu vải bông tự nhiên, mềm mại, thấm hút mồ hôi. Cổ áo thuộc kiểu cổ điển, đường may đều, sắc...</p>
            </div>
            <hr className={cx('hr')} />
          </div>
          <div className={cx('baiviet')}>
            <div className={cx('anh')}>
              <img src="https://www.chapi.vn/img/product/2021/6/26/ao-thun-nam-trung-nien-pixi-2-new.jpg" alt="" />
            </div>
            <div className={cx('thongtin')}>
              <p>
                <b>🧐Quang Minh</b>
                <i>20/8/2022</i>
              </p>
              <h2>Black Friday - săn sale ngất ngây</h2>
              <p>Áo thun nam trung niên Pixi xanh đậm M được làm từ chất liệu vải bông tự nhiên, mềm mại, thấm hút mồ hôi. Cổ áo thuộc kiểu cổ điển, đường may đều, sắc...</p>
            </div>
            <hr className={cx('hr')} />
          </div>
        </div>
        <div className={cx('phai')}>
          <div className={cx('block1')}>
            <h2>Bài viết mới nhất</h2>
            <div className={cx('linkbai')}>
              <p><a href="">Thời trang xin mới quần á sale 20%</a></p>
              <i>11.05.2023</i>
              <hr className={cx('hr')} />
            </div>
            <div className={cx('linkbai')}>
              <p><a href="">Thời trang xin mới quần á sale 20%</a></p>
              <i>11.05.2023</i>
              <hr className={cx('hr')} />
            </div>
            <div className={cx('linkbai')}>
              <p><a href="">Thời trang xin mới quần á sale 20%</a></p>
              <i>11.05.2023</i>
              <hr className={cx('hr')} />
            </div>
          </div>
          <div className={cx('block2')}>
            <h2>Top sản phẩm</h2>
            <div className={cx('linksanpham')}>
              <a href="">
                <b>Quần nam</b>
                <div className={cx('anh')}>
                  <img src="https://www.chapi.vn/img/product/2021/6/26/ao-thun-nam-trung-nien-pixi-2-new.jpg" alt="" />
                </div>
              </a>
            </div>
            <div className={cx('linksanpham')}>
              <a href="">
                <b>Quần nam</b>
                <div className={cx('anh')}>
                  <img src="https://www.chapi.vn/img/product/2021/6/26/ao-thun-nam-trung-nien-pixi-2-new.jpg" alt="" />
                </div>
              </a>
            </div>
            <div className={cx('linksanpham')}>
              <a href="">
                <b>Quần nam</b>
                <div className={cx('anh')}>
                  <img src="https://www.chapi.vn/img/product/2021/6/26/ao-thun-nam-trung-nien-pixi-2-new.jpg" alt="" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Cart;
