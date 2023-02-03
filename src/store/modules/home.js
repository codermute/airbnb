import { 
  getGoodPriceInfo, 
  getHomeHighScoreData, 
  getHomeDiscountData, 
  getHomeHotRecommendData,
  getHomeLongforData
} from '@/services/modules/home'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const fetchHomeInfoAction = createAsyncThunk('homeData', (payload, { dispatch }) => {
  getGoodPriceInfo().then((res) => {
    dispatch(changeGoodPriceAction(res))
  })

  getHomeHighScoreData().then((res) => {
    dispatch(changeHighScoreAction(res))
  })

  getHomeDiscountData().then((res) => {
    dispatch(changeDiscountAction(res))
  })

  getHomeHotRecommendData().then((res) => {
    dispatch(changeHotRecommendAction(res))
  })

  getHomeLongforData().then((res) => {
    dispatch(changeLongfoAction(res))
  })
})

const homeSlice = createSlice({
  name: 'home',
  initialState: {
    homeGoodPriceInfo: {},
    homeHighScoreInfo: {},
    homeDiscountInfo: {},
    homeHotRecommendInfo: {},
    homeLongforInfo: {}
  },
  reducers: {
    changeGoodPriceAction(state, { payload }) {
      state.homeGoodPriceInfo = payload
    },
    changeHighScoreAction(state, { payload }) {
      state.homeHighScoreInfo = payload
    },
    changeDiscountAction(state, { payload }) {
      state.homeDiscountInfo = payload
    },
    changeHotRecommendAction(state, { payload }) {
      state.homeHotRecommendInfo = payload
    },
    changeLongfoAction(state, { payload }) {
      state.homeLongforInfo = payload
    }
  },
  // extraReducers: {
  //   [fetchHomeGoodPriceInfo.fulfilled](state, { payload }) {
  //     state.homeGoodPriceInfo = payload
  //   }
  // }
  // extraReducers: (builder) => {
  //   builder.addCase(fetchHomeInfoAction.fulfilled, (state, { payload }) => {
  //     state.homeGoodPriceInfo = payload
  //   })
  // }
})

export const { 
  changeGoodPriceAction, 
  changeHighScoreAction,
  changeDiscountAction, 
  changeHotRecommendAction,
  changeLongfoAction
} = homeSlice.actions
export default homeSlice.reducer