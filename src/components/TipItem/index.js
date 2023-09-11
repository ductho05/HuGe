import React from 'react'
import styles from './TipItem.module.scss'
import classNames from 'classnames/bind'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const cx = classNames.bind(styles)

const TipItem = ({tip}) => {
  return (
    <div className={cx('wrapper')}>
        <img src={tip?.image} alt='image' className={cx('image')} />
        <div className={cx('tips_content')}>
            <h3 className={cx('title')}>{tip?.title}</h3>
            <p className={cx('content')}>{tip?.content}</p>
            <div className={cx('action')}>
                <p className={cx('action_name')}>{tip?.action}</p>
                <ArrowForwardIcon className={cx('action_icon')} fontSize='inherit' />
            </div>
        </div>

    </div>
  )
}

export default TipItem