import { getEntireRoomList } from "@/services"
import { CHANGE_HOUSE_LIST, CHANGE_TOTAL_COUNT } from "./constants"

export const changeHouseListAction = (houseList) => ({
  type: CHANGE_HOUSE_LIST,
  houseList
})

export const changeTotalCountAction = (totalCount) => ({
  type: CHANGE_TOTAL_COUNT,
  totalCount
})


export const fetchHouseListAction = () => {
  return async (dispatch) => {
    const res = await getEntireRoomList()

    const houseList = res.list
    const totalCount = res.totalCount
    dispatch(changeHouseListAction(houseList))
    dispatch(changeTotalCountAction(totalCount))
  }
}