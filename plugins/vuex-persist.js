import VuexPersistence from 'vuex-persist'

export default ({ store }) => {
  new VuexPersistence({
    reducer: (state) => {
      return { user: state.user }
    },
  }).plugin(store)
}
