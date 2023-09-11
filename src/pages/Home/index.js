import React, { useRef, useEffect } from 'react'
import classNames from 'classnames/bind'
import styles from './Home.module.scss'
import Button from '../../components/Button'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Reveal from '../../components/Reveal';
import TipItem from '../../components/TipItem';
import DomainItem from '../../components/DomainItem';
import StoryItem from '../../components/StoryItem';

const cx = classNames.bind(styles)

const features = [
  {
    image: 'https://static.hugedomains.com/images/hdv3-img/benefits-ico-1.png',
    content: 'Pay later with 0% financing'
  },
  {
    image: 'https://static.hugedomains.com/images/hdv3-img/benefits-ico-2.png',
    content: '30-day money-back guarantee'
  },
  {
    image: 'https://static.hugedomains.com/images/hdv3-img/benefits-ico-3.png',
    content: 'Friendly and helpful domain experts'
  },
  {
    image: 'https://static.hugedomains.com/images/hdv3-img/benefits-ico-4.png',
    content: 'Safe and secure shopping experience'
  }
]

const tip1 = {
  image: 'https://static.hugedomains.com/images/hdv3-img/home_010_l.jpg',
  title: 'The leader in domain names',
  content: 'We are committed to providing the best domain names, helping you to easily find one that fits your needs.',
  action: 'Find out more'
}

const tip2 = {
  image: 'https://static.HugeDomains.com/images/hdv3-img/home_006_r.jpg',
  title: 'Helpful tips for choosing a domain',
  content: 'Choosing the right domain is one of the most important steps in building a brand or business. Discover why.',
  action: 'Visit our buying guide'
}

const domains = [
  {
    name: 'NationwideSuppliers.com',
    price: '$6,595'
  },
  {
    name: 'BitHappy.com',
    price: '$6,595'
  },
  {
    name: 'SaltaFriends.com',
    price: '$5,895'
  },
  {
    name: 'PokStar.com',
    price: '$5,795'
  },
  {
    name: 'YuJianhua.com',
    price: '$9,495'
  },
  {
    name: 'VillaCampo.com',
    price: '$7,095'
  }
]

const stories = [
  {
    image: 'https://static.hugedomains.com/images/hdv3-img/sucses-item-4.jpg',
    content: 'We found a name that is unique, captures everything related to improvement and promotes a sense of being better.',
    logo: 'https://static.hugedomains.com/images/hdv3-img/sucses-item-logo-4.png'
  },

  {
    image: 'https://static.hugedomains.com/images/hdv3-img/sucses-item-2.jpg',
    content: 'I live always loved the saying think globally, work locally, and I think this is one of the keys to growing a business.',
    logo: 'https://static.hugedomains.com/images/hdv3-img/sucses-item-logo-2.png'
  },

  {
    image: 'https://static.hugedomains.com/images/hdv3-img/sucses-item-5.jpg',
    content: 'We had a rough time with our original name, the worst part was the traffic. Since we bought CryptoAdventure our site grew tremendously...',
    logo: 'https://static.hugedomains.com/images/hdv3-img/sucses-item-logo-5.png'
  },
]

const testList = [
  {
    avatar: 'https://static.hugedomains.com/images/hdv3-img/new-testi-image-1.png',
    content: 'I purchased our domain through HugeDomains.com and the whole process was simple, quick and easy to use. If you are looking for the right domain for your business, I would highly recommend their services!',
    author: 'Mike Waller',
    link: 'Ccdenver.com'
  },
  {
    avatar: 'https://static.hugedomains.com/images/hdv3-img/new-testi-image-2.png',
    content: 'Happy to purchase our domain thru HugeD. Easy process and fine instructions.',
    author: 'Pelle Plesner',
    link: 'FamPower.com'
  },
  {
    avatar: 'https://static.hugedomains.com/images/hdv3-img/new-testi-image-3.png',
    content: 'As you know, a great domain name is really important but can be expensive. The monthly payment makes it easy to acquire a great domain name. I really enjoy the services from HugeDomains.',
    author: 'Franck Bertuzzi',
    link: 'Sensometric.com'
  },
]

const Home = () => {

  const ref = useRef(null)

  useEffect(() => {
    document.title = 'The #1 Source For Domain Names | HugeDomains'
  }, [])

  const handleScrollDown = () => {
    ref.current.scrollIntoView({ behavior: 'smooth'}, 2)
  }

  return (
    <div className={cx('wrapper')}>
      <div className={cx('search')}>
          <h3>Find the domain that's right for you:</h3>
          <div className={cx('search_tools')}>
            <div className={cx('input')} >
              <input type="text" spellCheck={false}/>
              <p className={cx('advanced')}>Advanced Search</p>
            </div>
            <Button primary big>Search</Button>
          </div>
          <p onClick={handleScrollDown} className={cx('btn_down')}>
            <KeyboardArrowDownIcon  fontSize='inherit'/>
          </p>
        </div>
      <div ref={ref} className={cx('benefits', 'grid wide')}>
          <h3 className={cx('title')}>Since 2005, we've helped thousands of people find the perfect domain name.</h3>
          <ul className={cx('benefit_list')}>

            {
              features.map(item => (
                <Reveal>
                  <li key={item.content} className={cx('benefit_item')}>
                    <img src={item.image} alt='benefit' />
                    <p>{item.content}</p>
                  </li>
                </Reveal>
              ))
            }
          </ul>

          <div className={cx('tips')}>
            <div className={cx('left')}>
                <Reveal>
                  <TipItem tip={tip1}/>
                </Reveal>
            </div>
            <div className={cx('right')}>
                <Reveal>
                  <TipItem tip={tip2}/>
                </Reveal>
            </div>
          </div>
      </div>
      <div className={cx('feature_domains', 'grid wide')}>
        <h3 className={cx('title')}>Featured domains</h3>
        <div className={cx('domains_list row')}>
          {
            domains.map(domain => (
              <div key={domain.name} className='col l-6 m-12 c-12'>
                <Reveal>
                  <DomainItem domain={domain} />
                </Reveal>
              </div>
            )) 
          }
        </div>
      </div>

      <div className={cx('stories', 'grid wide')}>
        <h3 className={cx('title')}>
          Featured domains
          <p>See more</p>
        </h3>
        <div className={cx('storie_list')}>
          {
            stories.map((story, index) => (
              <div key={index} className={cx('stories_item')}>
                <Reveal>
                  <StoryItem story={story}/>
                </Reveal>
              </div>
            ))
          }
        </div>
      </div>

      <div className={cx('testimonials', 'grid wide')}>
        <h3 className={cx('title')}>
          Client Testimonials
          <p>See more</p>
        </h3>
        <Reveal>
          <ul className={cx('test_list')}>
            {
              testList.map((test, index) => (
                <li key={index} className={cx('test_item')}>
                  <img className={cx('avatar')} src={test?.avatar} alt='avatar' />
                  <div className={cx('test_body')}>
                    <p className={cx('test_content')}>
                      {test?.content}
                    </p>
                    <div className={cx('sources')}>
                      <p>{test?.author}</p>
                      <p>{test?.link}</p>
                    </div>
                  </div>
                </li>
              ))
            }
          </ul>
        </Reveal>
      </div>

      <Reveal>  
        <div className={cx('contacts')}>
          <img className={cx('contact_icon')} src='https://static.hugedomains.com/images/hdv3-img/call-us.png' />
          <div className={cx('contact_body')}>
            <label className={cx('label')}>Questions? We can help:
              <a href='tel:1-303-893-0552'>1-303-893-0552</a>
            </label>
            <p className={cx('message')}>Let's talk about how you can get value from your domain</p>
          </div>
        </div>
      </Reveal>
    </div>
  )
}

export default Home