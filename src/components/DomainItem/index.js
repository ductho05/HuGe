import React from 'react'
import styles from './DomainItem.module.scss'
import classNames from 'classnames/bind'
import Button from '../Button'

const cx = classNames.bind(styles)

const DomainItem = ({domain}) => {
  return (
    <div className={cx('wrapper')}>
        <p className={cx('name')}>{domain.name}</p>
        <div className={cx('right')}>
            <p className={cx('price')}>{domain.price}</p>
            <Button primary>Buy now</Button>
        </div>
    </div>
  )
}

export default DomainItem