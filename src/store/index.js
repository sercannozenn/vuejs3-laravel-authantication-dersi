import { createStore } from 'vuex'

export default createStore({
  state: {
    accessToken : ''
  },
  mutations: {
    /**
     * Store'daki stateleri set ederken kullandığımız ara katman.
     * Commit ile state değiştirilir.
     */
    setAccessToken(state, accessToken) {
      // gelen accessToken ı set eder
      state.accessToken = accessToken
    },
    clearAccessToken(state){
      // accessToken ı temizler
      state.accessToken = ''
    }
  },
  actions: {
    login(vuexContext, authData){

    },
    logout(vuexContext)
    {

    }

  },
  getters: {
    isAuthenticated(state) {
      // eğer accessToken boş değilse true döner
      // boşsa false döner ve kullanıcının giriş yapıp yapmadığını anlamış oluruz.
      return state.accessToken !== ""
    }
  },
  modules: {
  }
})
