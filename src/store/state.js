const getLastCity = () => {
  let lastCity = '北京'
  try {
    lastCity = localStorage.getItem('currentCity') || '北京'
  } catch (e) {
    console.error(e)
  }
  return lastCity
}

export default {
  currentCity: getLastCity()
}
