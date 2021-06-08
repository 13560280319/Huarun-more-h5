import { createStore } from 'vuex'
import * as mutationTypes from './mutation-types'

const store = createStore({
  state () {
    return {
      activeSwiperIndex: 0
    }
  },
  mutations: {
    [mutationTypes.SET_ACTIVE_SWIPER] (state, activeSwiperIndex) {
      state.activeSwiperIndex = activeSwiperIndex
    }
  }
})

export default store
