import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  banners: [],
  hotRecommends: [],
  newAlbum: [],
  rankings: [],
  settleSingers: []
}

export const recommendSlice = createSlice({
  name: 'recommend',
  initialState,
  reducers: {
    changeBannersAction: (state, action) => {
      state.banners = action.payload
    },
  }
})

export const {
  changeBannersAction
} = recommendSlice.actions;

export default recommendSlice.reducer