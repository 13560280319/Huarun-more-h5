import { createStore } from 'vuex'
import * as mutationTypes from './mutation-types'

const store = createStore({
  state () {
    return {
      activeSwiperIndex: '', // 当前活跃的 Swiper
      showCommunityOverlay: false // 美好社区中的 Overlay
    }
  },
  mutations: {
    [mutationTypes.SET_ACTIVE_SWIPER] (state, activeSwiperIndex) {
      state.activeSwiperIndex = activeSwiperIndex
    },
    [mutationTypes.SET_COMMUNITY_OVERLAY] (state, boolean) {
      state.showCommunityOverlay = boolean
    }
  }
})

export default store
