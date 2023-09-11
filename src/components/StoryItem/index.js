import React from 'react'
import classNames from 'classnames/bind'
import styles from './StoryItem.module.scss'

const cx = classNames.bind(styles)

const StoryItem = ({story}) => {
  return (
    <div className={cx('wrapper')}>
        <img src={story?.image} className={cx('image')} />
        <div className={cx('body')}>
            <div className={cx('content')}>
                <p>{story?.content}</p>
                <span className={cx('read_story')}>Read the story.</span>
            </div>
        </div>
        <img className={cx('logo')} src={story.logo} />
    </div>
  )
}

export default StoryItem