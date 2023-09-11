import React from 'react'
import className from 'classnames/bind'
import styles from './Button.module.scss'
import { Link } from 'react-router-dom'

const cx = className.bind(styles)

const Button = ({primary=false, big, children}) => {

  let But = 'Button'
  
  const classes = cx('wrapper', {
    primary,
    big
  })

  return (
    <But className={classes}>
        {children}
    </But>
  )
}

export default Button