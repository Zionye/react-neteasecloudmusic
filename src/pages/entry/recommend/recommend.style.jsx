import styled from "styled-components";
import imgUrl from'~/assets/images/wrap-bg.png'

export const RecommendWrapper = styled.div``

export const RecommendSection = styled.div`
  border: 1px solid #d3d3d3;
  background-image: url(${imgUrl});
  display: flex;
`
export const RecommendLeft = styled.div`
  padding: 20px;
  width: 729px;
  box-sizing: border-box;
`
export const RecommendRight = styled.div`
  margin-left: 1px;
  width: 250px;
`