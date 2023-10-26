import styled from "styled-components";
import imgUrl1 from '~/assets/images/banner_sprite.png'
import downloadImgUrl from'~/assets/images/download.png'

export const BannerWrapper = styled.div`
  background: url('http://p1.music.126.net/J8qc2LWycyf8fr1EpZaw8w==/109951168569792042.jpg?imageView&blur=40x20')
    center center / 6000px;

  .banner {
    height: 270px;
    display: flex;
    position: relative;
  }
`

export const BannerLeft = styled.div`
  position: relative;
  width: 730px;

  .banner-item {
    overflow: hidden;
    height: 270px;
    .image {
      width: 100%;
    }
  }

  .dots {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    margin: 0 auto;
    display: flex;
    justify-content: center;

    > li {
      margin: 0 2px;

      .item {
        display: inline-block;
        width: 20px;
        height: 20px;
        background: url(${imgUrl1}) 3px -343px;
        cursor: pointer;

        &:hover,
        &.active {
          background-position: -16px -343px;
        }
      }
    }
  }
`

export const BannerRight = styled.a.attrs({
  href: 'https://music.163.com/#/download',
  target: '_blank'
})`
  width: 254px;
  height: 270px;
  background: url(${downloadImgUrl});
`
export const BannerControl = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);

  .btn {
    position: absolute;
    width: 37px;
    height: 63px;
    /* background-image: url(${imgUrl1}); */
    /* background-color: transparent; */
    cursor: pointer;

    &:hover {
      background-color: rgba(0, 0, 0, 0.1);
    }
  }

  .left {
    left: -68px;
    background-position: 0 -360px;
  }

  .right {
    right: -68px;
    background-position: 0 -508px;
  }

  .iconbtn{
    position: absolute;
    cursor: pointer;
    font-size: 37px;
    color: white;
  }
  .iconleft{
    left: -68px;
  }
  .iconright{
    right: -68px;
  }
`