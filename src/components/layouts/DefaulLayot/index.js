import React from 'react'
import classNames from 'classnames/bind'
import styles from './defaultlayout.module.scss'
import Header from './Header'
import Footer from './Footer'
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional

const cx = classNames.bind(styles)

const DefaultLayout = ({children}) => {
  return (
    <div className={cx('wrapper')}>
        <Header />
        {children}
        <Footer />
        <Tippy content='Cookie Settings' placement='right'>
          <div className={cx('revisit')}>
            <img src='https://cdn-cookieyes.com/assets/images/revisit.svg' alt='revisit' />
          </div>
        </Tippy>

        <div className={cx('mail')}>
          <img src='https://static.hugedomains.com/images/hdv3-img/mail-icon.png' alt='mail' />
        </div>
    </div>
  )
}

export default DefaultLayout