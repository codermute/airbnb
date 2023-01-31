import { getGoodPriceInfo } from '@/services/modules/home'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const fetchHomeGoodPriceInfo = createAsyncThunk('home/goodPrice', async () => {
  const res = await getGoodPriceInfo()

  return res
})

const homeSlice = createSlice({
  name: 'home',
  initialState: {
    homeGoodPriceInfo: {}
  },
  reducers: {},
  // extraReducers: {
  //   [fetchHomeGoodPriceInfo.fulfilled](state, { payload }) {
  //     state.homeGoodPriceInfo = payload
  //   }
  // }
  extraReducers: (builder) => {
    builder.addCase(fetchHomeGoodPriceInfo.fulfilled, (state, { payload }) => {
      state.homeGoodPriceInfo = payload
    })
  }
})

export default homeSlice.reducer