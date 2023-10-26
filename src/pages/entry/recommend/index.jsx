import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useGetBannersQuery } from '~/api/recommend'
import { changeBannersAction } from './store/slices/recommendSlice'
import TopBanner from './c-cpns/topBanner'
import UserLogin from './c-cpns/userLogin'
import HotRecommend from './c-cpns/hotRecommend'
import {RecommendWrapper, RecommendSection, RecommendLeft, RecommendRight} from './recommend.style'

const Recommend = () => {
  // 引入api
  // const [getBanners, { error }] = useGetBannersQuery()
  const {data, isFetching, isSuccess} = useGetBannersQuery()
  console.log('getBanners: ', data);
  // 通过useDispatch()来获取派发器对象
  const dispatch = useDispatch()

  useEffect(() => {
    console.log(isSuccess, "isSuccess", data?.banners);
    if (isSuccess) {
      dispatch(changeBannersAction(data.banners));
    }
  }, [isSuccess]);

  return (
    <RecommendWrapper>
      <TopBanner></TopBanner>
      <RecommendSection className="wrap-v2">
        <RecommendLeft>
          <HotRecommend/>
        </RecommendLeft>

        <RecommendRight>
          <UserLogin></UserLogin>

        </RecommendRight>
      </RecommendSection>
    </RecommendWrapper>
  )
}

export default Recommend