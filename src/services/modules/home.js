import Request from "..";

export function getGoodPriceInfo() {
  return Request.get({
    url: '/home/goodprice'
  })
}

export function getHomeHighScoreData() {
  return Request.get({
    url: "/home/highscore"
  })
}

export function getHomeDiscountData() {
  return Request.get({
    url: "/home/discount"
  })
}

export function getHomeHotRecommendData() {
  return Request.get({
    url: "/home/hotrecommenddest"
  })
}