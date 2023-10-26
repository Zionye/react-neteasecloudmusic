import React, { memo, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import { Button, Carousel } from 'antd'
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import {BannerWrapper, BannerLeft, BannerRight, BannerControl} from './topBanner.style'

const TopBanner = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
    // 拿到轮播图组件
    const bannerRef = useRef(null)

  // 从 store 中拿数据
  const { banners = [] } = useSelector(state => state.recommend)

  // 获取背景图片
  let bgImageUrl
  if (currentIndex >= 0 && banners.length > 0) {
    console.log('bgImageUrl: ', banners[currentIndex]?.imageUrl);
    bgImageUrl = banners[currentIndex]?.imageUrl + '?imageViewblur=40×20'
  }

  const handleAfterChange = (current)=>{
    setCurrentIndex(current)
  }

  const handlePrevClick = ()=>{
    bannerRef.current.prev()
  }
  const handleNextClick = ()=>{
    bannerRef.current.next()
  }

  return (
    <BannerWrapper 
      style={{background: `url('${bgImageUrl}') center center / 6000px`}}
    >
      <div className="banner wrap-v2">

        <BannerLeft>
          <Carousel
            dots={false}
            autoplay
            ref={bannerRef}
            effect="fade"
            afterChange={handleAfterChange}
          >
            {
              banners.map(item => {
                return (
                  <div className="banner-item" key={item.imageUrl}>
                    <img
                      className="image"
                      src={item.imageUrl}
                      alt={item.typeTitle}
                    />
                  </div>
                )
              })
            }
          </Carousel>
          <ul className="dots">
            {banners.map((item, index) => {
              return (
                <li key={item.imageUrl}>
                  <span className={`item ${index === currentIndex ?'active': ''}`}></span>
                </li>
              )
            })}
          </ul>
        </BannerLeft>

        <BannerRight></BannerRight>
        
        <BannerControl>
        <LeftOutlined className="iconbtn iconleft"  onClick={handlePrevClick} />
        <RightOutlined className="iconbtn iconright" onClick={handleNextClick} />
          {/* <button className="btn left" onClick={handlePrevClick}></button>
          <button className="btn right" onClick={handleNextClick}></button> */}
        </BannerControl>
      </div>
    </BannerWrapper>
  )
}

export default memo(TopBanner)