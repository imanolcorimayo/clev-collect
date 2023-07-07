export const state = () => ({
  user: {},
  isLogged: false
})



export const getters = {
  getUser(state) {
    return state.user
  },
  getIsLogged(state) {
    return state.isLogged
  }
}

export const mutations = {
  /**
   * Lets figure out when this will be fired
   * @param {*} state 
   * @param {*} param1 
   */
  ON_AUTH_STATE_CHANGED_MUTATION(state, user) {
    // you can request additional fields if they are optional (e.g. photoURL)
    const { uid, email, emailVerified, displayName, photoURL } = user
  
    // Change user's information
    state.user = {
      uid,
      displayName,
      email,
      emailVerified,
      photoURL: photoURL || null, // results in photoURL being null for server auth
      // use custom claims to control access (see https://firebase.google.com/docs/auth/admin/custom-claims)
      // isAdmin: claims.custom_claim
    }

    // Changes isLogged property
    state.isLogged = true;
  },
  /**
   * Lets figure out when this will be fired
   * @param {*} state 
   * @param {*} param1 
   */
  LOG_OUT(state) {
    // Clean user's information
    state.user = {}

    // Changes isLogged property
    state.isLogged = false;
  },
  /**
   * This function will be fired when user's token changes
   * 
   * @param {*} state 
   * @param {*} param1 
   */
  onIdTokenChangedMutation: (state, {authUser, claims}) => {
    if (!authUser) {
      // claims = null
      // Perform logout operations
    } else {
      // Do something with the authUser and the claims object...
      // Do this:
      const {uid, email, emailVerified} = authUser
      state.user = {uid, email, emailVerified}
    }
  }
}

// The actions that will trigger a mutation. any of this can be called by $store.dispatch("booking/{actionName}", {actionData})
export const actions = {
  async onAuthStateChangedAction({ commit, dispatch }, { authUser, claims }) {
    if (!authUser) {
      await dispatch('cleanupAction')
      return
    }

    // you can request additional fields if they are optional (e.g. photoURL)
    const { uid, email, emailVerified, displayName, photoURL } = authUser
  
    commit('ON_AUTH_STATE_CHANGED_MUTATION', {
      uid,
      email,
      emailVerified,
      displayName,
      photoURL, // results in photoURL being undefined for server auth
      // use custom claims to control access (see https://firebase.google.com/docs/auth/admin/custom-claims)
      // isAdmin: claims.custom_claim
    })
  },
  async onIdTokenChangedAction({ commit }, data) {
    if (!authUser) {
      // claims = null
      // Perform logout operations
    } else {
      // Do something with the authUser and the claims object...
    }
  },
  async logout({ commit }, data) {
    commit('LOG_OUT')
    
  },
  async nuxtServerInit({ dispatch, commit }, { res }) {
    // Way to get entirely user object from firebase (See docs https://firebase.nuxtjs.org/tutorials/ssr.html)
    if (res && res.locals && res.locals.user) {
      const { allClaims: claims, idToken: token, ...authUser } = res.locals.user
  
      await dispatch('onAuthStateChangedAction', {
        authUser,
        claims,
        token
      })
    }
  }
}
