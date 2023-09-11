import React from 'react'
import classNames from 'classnames/bind'
import styles from './Footer.module.scss'

const cx = classNames.bind(styles)

const Header = () => {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('container', 'grid wide')}>
        <ul className={cx('top', 'row')}>
          <li className={cx('top_item' ,'col l-3 m-6 c-6')}>
            <p className={cx('title')}>Shop</p>
            <ul className={cx('list')}>
                <li className={cx('item')}>Home</li>
                <li className={cx('item')}>Categories</li>
                <li className={cx('item')}>Payment plans</li>
                <li className={cx('item')}>My account</li>
            </ul>
          </li>

          <li className={cx('top_item','col l-3 m-6 c-6')}>
            <p className={cx('title')}>Safe and secure</p>
            <ul className={cx('list')}>
                <li className={cx('item')}>Money back guarantee</li>
                <li className={cx('item')}>Escrow.com</li>
                <li className={cx('item')}>NameBright.com</li>
                <li className={cx('item')}>Testimonials</li>
            </ul>
          </li>

          <li className={cx('top_item','col l-3 m-6 c-6')}>
            <p className={cx('title')}>Helpful Tips</p>
            <ul className={cx('list')}>
                <li className={cx('item')}>Buying guide</li>
                <li className={cx('item')}>Case studies</li>
                <li className={cx('item')}>FAQs</li>
            </ul>
          </li>

          <li className={cx('top_item','col l-3 m-6 c-6')}>
            <p className={cx('title')}>About us</p>
            <ul className={cx('list')}>
                <li className={cx('item')}>Overview</li>
                <li className={cx('item')}>Contact us</li>
                <li className={cx('item')}>Terms and conditions</li>
                <li className={cx('item')}>Privacy policy</li>
            </ul>
          </li>
        </ul>

        <div className={cx('bottom')}>
          <ul className={cx('links', 'row')}>
            <li className={cx('link', 'col l-2-4 m-4 c-12')}>
              <img src='https://static.hugedomains.com/images/hdv3-img/footer-logo-1.png' />
            </li>

            <li className={cx('link', 'col l-2-4 m-4 c-12')}>
              <img src='https://static.hugedomains.com/images/hdv3-img/footer-logo-2.png' />
            </li>

            <li className={cx('link', 'col l-2-4 m-4 c-12')}>
              <img src='https://static.hugedomains.com/images/hdv3-img/footer-logo-3.png' />
            </li>

            <li className={cx('link', 'col l-2-4 m-4 c-12')}>
              <img src='https://static.hugedomains.com/images/hdv3-img/footer-logo-4.png' />
            </li>

            <li className={cx('link', 'col l-2-4 m-4 c-12')}>
              <img src='https://static.hugedomains.com/images/hdv3-img/footer-logo-5.png' />
            </li>
          </ul>

          <div className={cx('contact')}>
            <p className={cx('call_phone')}>
              Talk to a domain expert:
              <a href='tel: +1-303-893-0552'>+1-303-893-0552</a>
            </p>
            <p className={cx('all_right')}>© 2023 HugeDomains.com. All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header