import Request from "..";

export function getGoodPriceInfo() {
  return Request.get({
    url: '/home/goodprice'
  })
}