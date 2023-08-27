import VuexPersistence from 'vuex-persist'

export default ({ store }) => {
  new VuexPersistence({
    reducer: (state) => {
      return { 
        user: {
          uid: state.user.uid
        },
        isLogged: state.isLogged,
      }
    },
  }).plugin(store)
}
