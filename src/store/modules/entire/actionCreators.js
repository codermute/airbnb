import { getEntireRoomList } from "@/services"
import { CHANGE_CURRENT_PAGE, CHANGE_HOUSE_LIST, CHANGE_IS_LOADING, CHANGE_TOTAL_COUNT } from "./constants"

export const changeHouseListAction = (houseList) => ({
  type: CHANGE_HOUSE_LIST,
  houseList
})

export const changeTotalCountAction = (totalCount) => ({
  type: CHANGE_TOTAL_COUNT,
  totalCount
})

export const changeCurrentPageAction = (currentPage) => ({
  type: CHANGE_CURRENT_PAGE,
  currentPage
})

export const changeIsLoadingAction = (isLoading) => ({
  type: CHANGE_IS_LOADING,
  isLoading
})


export const fetchHouseListAction = (page = 0) => {
  return async (dispatch) => {
    dispatch(changeIsLoadingAction(true))
    const res = await getEntireRoomList(page * 20)
    dispatch(changeIsLoadingAction(false))

    const houseList = res.list
    const totalCount = res.totalCount
    dispatch(changeHouseListAction(houseList))
    dispatch(changeTotalCountAction(totalCount))
  }
}