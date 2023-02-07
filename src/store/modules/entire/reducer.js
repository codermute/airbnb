import { CHANGE_CURRENT_PAGE, CHANGE_HOUSE_LIST, CHANGE_IS_LOADING, CHANGE_TOTAL_COUNT } from "./constants"

const initialState = {
  houseList: [],
  totalCount: 0,
  currentPage: 0,
  isLoading: false
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_HOUSE_LIST:
      return { ...state, houseList: action.houseList }
    case CHANGE_TOTAL_COUNT:
      return { ...state, totalCount: action.totalCount }
    case CHANGE_CURRENT_PAGE:
      return { ...state, currentPage: action.currentPage }
    case CHANGE_IS_LOADING:
      return { ...state, isLoading: action.isLoading }
    default:
      return state
  }
}

export default reducer