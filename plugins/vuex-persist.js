import VuexPersistence from 'vuex-persist'

export default ({ store }) => {
  new VuexPersistence({
    reducer: (state) => {
      return { auth: state.auth }
    },
  }).plugin(store)
}
