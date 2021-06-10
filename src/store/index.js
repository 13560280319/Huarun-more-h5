import { createStore } from 'vuex'
import * as mutationTypes from './mutation-types'

const store = createStore({
  state () {
    return {
      startActiveSwiperIndex: '', // 过渡开始时当前 Swiper
      endActiveSwiperIndex: '', // 过渡结束时当前 Swiper
      showCommunityOverlay: false, // 美好社区中的 Overlay
      showOptimalOverlay: false // 优居生活中的 Overlay
    }
  },
  mutations: {
    [mutationTypes.SET_START_SWIPER_INDEX] (state, swiperIndex) {
      state.startActiveSwiperIndex = swiperIndex
    },
    [mutationTypes.SET_END_SWIPER_INDEX] (state, swiperIndex) {
      state.endActiveSwiperIndex = swiperIndex
    },
    [mutationTypes.SET_COMMUNITY_OVERLAY] (state, boolean) {
      state.showCommunityOverlay = boolean
    },
    [mutationTypes.SET_OPTIMAL_OVERLAY] (state, boolean) {
      state.showOptimalOverlay = boolean
    }
  }
})

export default store
