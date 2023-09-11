import React, { useEffect, useRef, useState } from 'react'
import classNames from 'classnames/bind'
import styles from './Header.module.scss'
import Button from '../../../Button'
import { motion } from 'framer-motion'
const cx = classNames.bind(styles)

const links = [
    {
        title: 'Home',
        path: '/'
    },
    {
        title: 'FAQs',
        path: '/'
    },
    {
        title: 'About us',
        path: '/'
    },
    {
        title: 'Contact us',
        path: '/'
    },
    {
        title: 'My Account',
        path: '/'
    },
]

const Header = () => {

    const [tab, setTab] = useState(0)
    const [hideInput, setHideInput] = useState(true)
    const [toggle, setToggle] = useState(true)
    const inputRef = useRef(null)
    const input = useRef()
    const [isSticky, setIsSticky] = useState(false)

    const handleSticky = () => {
        const heightTop = window.scrollY
        heightTop > 0 ? setIsSticky(true) : setIsSticky(false)
    }

    useEffect(() => {
        window.addEventListener('scroll', handleSticky)

        return () => window.removeEventListener('scroll', handleSticky)
    }, [])

    const handleDisplaySearch = () => {
        setHideInput(false)
    }

    // useEffect(() => {
    //     if (!hideInput) {
    //         input.current.focus()
    //     }
    // }, [hideInput])

    const handleClickOutSide = (e) => {
        if (!inputRef.current.contains(e.target)) {
            setHideInput(true)
        }
    }

    useEffect(() => {
        document.addEventListener('click', handleClickOutSide, true)

        return () => document.removeEventListener('click', handleClickOutSide)
    }, [])

    const slideInVariants = {
        open: { opacity: 0, transform: 'translateX(500px)', transition: 1 },
        closed: { opacity: 1, transform: 'translateX(0px)', transition: 1 },
    };

    const openMenuTablet = {
        open: { transform: 'translateX(-450px)', transition: 2 },
        closed: { transform: 'translateX(0px)', transition: 2 },
    };

    const openOverlay = {
        open: { display: 'none', transition: 1 },
        closed: { display: 'block', transition: 1 },
    };

    const toggleMenu = () => {
        setToggle(prev => !prev)
    }

  return (
    <div className={cx('wrapper')}>
        <div className={cx('container')}>
            <div className={isSticky ? cx('top', 'sticky') : cx('top')}>
                <div className={cx('top_left')}>
                    <buton onClick={toggleMenu} className={toggle ? cx('btn_menu', 'hamburger','hide_on_pc') : cx('btn_menu', 'x', 'hide_on_pc')}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </buton>
                    <img className={cx('logo')} src='https://static.HugeDomains.com/images/hdv3-img/hugedomains_logo_notag_white.png' alt='logo' />
                </div>
                <div className={cx('right')}>
                    <div className={cx('search', 'hide-on-mobile-tablet')}>
                        <input type='text' className={cx('input')} spellcheck={false} />
                    </div>
                    <p className={cx('btn_search', 'hide-on-mobile-tablet')}>
                        <Button>Search</Button>
                    </p>
                    <a href='tel: 1-303-893-0552' className={cx('phone_number', 'hide-on-mobile-tablet')}>+1-303-893-0552</a>
                
                    {/* search on tablet mobile */}
                    <motion.div 
                        initial="open"
                        animate={hideInput ? 'open' : 'closed'}
                        variants={slideInVariants}
                    >
                        <div ref={inputRef} className={cx('search', 'hide_on_pc')}>
                            <input ref={input} type='text' className={cx('input')} spellcheck={false} />
                        </div>
                    </motion.div>

                    <motion.div 
                        initial="open"
                        animate={hideInput ? 'open' : 'closed'}
                        variants={slideInVariants}
                    >
                        <p className={cx('btn_search', 'hide_on_pc')}>
                            <Button>Search</Button>
                        </p>
                    </motion.div>
                    
                    <div className={hideInput ? cx('btn_search_on_mobile') : cx('btn_search_on_mobile', 'hide')}>
                        <p className={cx('search_icon_mobile', 'hide_on_pc')}>
                            <img src='https://static.hugedomains.com/images/hdv3-img/phone-icon-white.png' alt='icon' />
                        </p>

                        <p onClick={handleDisplaySearch}  className={cx('search_icon_mobile', 'hide_on_pc')}>
                            <img src='https://static.HugeDomains.com/images/hdv3-img/search-icon-white.png' alt='icon' />
                        </p>
                    </div>
                </div>
            </div>
            <ul className={cx('links','hide-on-mobile-tablet')}>
                <div className={cx('link_to')}>
                    {
                        links.map((link, index) => (
                            <li onClick={() => setTab(index)} className={tab === index ? cx('link', 'active') : cx('link')} key={link.title}>{link.title}</li>
                        ))
                    }
                </div>

                <div className={cx('link_right')}>
                    <p className={cx('feature')}>
                        <img className={cx('icon')} src='https://static.hugedomains.com/images/hdv3-img/favorite-header.png' />
                    </p>

                    <p className={cx('feature')}>
                        <img className={cx('icon')} src='https://static.hugedomains.com/images/hdv3-img/cart.png' />
                    </p>
                </div>
            </ul>
        </div>

        <motion.ul
            initial="open"
            animate={toggle ? 'open' : 'closed'}
            variants={openMenuTablet}
            className={cx('links','links_on_mobile')}
        >
            <div className={cx('link_to')}>
                {
                    links.map((link, index) => (
                        <li onClick={() => setTab(index)} className={tab === index ? cx('link', 'active') : cx('link')} key={link.title}>{link.title}</li>
                    ))
                }
            </div>
        </motion.ul>
        <motion.div
            initial="open"
            animate={toggle ? 'open' : 'closed'}
            variants={openOverlay}
            className={cx('overlay')}
            onClick={() => setToggle(true)}
        >
        </motion.div>
    </div>
  )
}

export default Header