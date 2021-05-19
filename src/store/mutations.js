export default {
  changeCurrentCity (state, payload) {
    state.currentCity = payload
    localStorage.setItem('currentCity', payload)
  }
}
