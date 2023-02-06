import { CHANGE_HOUSE_LIST, CHANGE_TOTAL_COUNT } from "./constants"

const initialState = {
  houseList: [],
  totalCount: 0
}

function reducer(state = initialState, active) {
  switch (active.type) {
    case CHANGE_HOUSE_LIST:
      return { ...state, houseList: active.houseList }
    case CHANGE_TOTAL_COUNT:
      return { ...state, totalCount: active.totalCount }
    default:
      return state
  }
}

export default reducer