import { createStore } from 'vuex'
// import app from './app'

interface State{
  count:number
}

export const store = createStore<State>({
  state(){
    return{
      count:0
    }
  },

    mutations: {

  },
})
// export default createStore({
//   state: {
//   },
//   mutations: {
//
//   },
//   actions: {},
//   getters: {},
//   modules: {
//     // app: app
//
//     }
// })