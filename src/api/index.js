import { get } from '../utils/request'

// get 获取数据与校验数据的通用方法
const getData = async (url) => {
  try {
    const result = await get(url)
    // 验证获取数据结果
    if (result && result.ret === true && result.data) {
      return result.data
    } else {
      console.log('getData', result)
      throw new Error('获取数据失败')
    }
  } catch (e) {
    throw new Error('请求获取数据出错！', e.message)
  }
}

// 获取首页数据 （返回 Promise ）
const getHomeData = (cityName) => {
  const url = '/api/home.json?city=' + cityName
  return getData(url)
}

// 获取城市列表数据 （返回 Promise ）
const getCitiesData = () => {
  const url = '/api/city.json'
  return getData(url)
}

// 获取景点详情数据 （返回 Promise ）
const getDetailData = (id) => {
  const url = '/api/detail.json?id=' + id
  return getData(url)
}

export { getHomeData, getCitiesData, getDetailData }
