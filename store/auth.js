export const state = () => ({
  user: {
    name: '',
    email: '',
    isLogged: false,
    picture:
      'https://bootdey.com/img/Content/avatar/avatar7.png',
    isProfessional: false,
  },
})

export const mutations = {
  setUser(state, info) {
    state.user = {
      ...state.user,
      ...info,
    }
  },
  signOut(state) {
    state.user = {
      name: '',
      email: "",
      isLogged: false,
      picture:
        'https://bootdey.com/img/Content/avatar/avatar7.png',
      isProfessional: false,
    }
  },
}
