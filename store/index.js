export const state = () => ({
  counter: 0,
  user: 0,
})



export const getters = {
  getCounter(state) {
    return state.counter
  },
  getUser(state) {
    return state.user
  }
}

export const mutations = {
  increment(state) {
    state.counter++
  },
  /**
   * Lets figure out when this will be fired
   * @param {*} state 
   * @param {*} param1 
   */
  ON_AUTH_STATE_CHANGED_MUTATION(state, user) {

    console.log(user)
    // you can request additional fields if they are optional (e.g. photoURL)
    const { uid, email, emailVerified, displayName, photoURL } = user
  
    state.user = {
      uid,
      displayName,
      email,
      emailVerified,
      photoURL: photoURL || null, // results in photoURL being null for server auth
      // use custom claims to control access (see https://firebase.google.com/docs/auth/admin/custom-claims)
      // isAdmin: claims.custom_claim
    }
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
        console.log('onIdTokenChangedMutation CLAIMS:',claims);
        console.log('onIdTokenChangedMutation AuthUser:',authUser);
    } else {
      console.log('onIdTokenChangedMutation else CLAIMS:',claims);
      console.log('onIdTokenChangedMutation else AuthUser:',authUser);
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
  async nuxtServerInit({ dispatch, commit }, { res }) {
    if (res && res.locals && res.locals.user) {
      const { allClaims: claims, idToken: token, ...authUser } = res.locals.user
  
      await dispatch('onAuthStateChangedAction', {
        authUser,
        claims,
        token
      })
  
      // or
  
      commit('ON_AUTH_STATE_CHANGED_MUTATION', { authUser, claims, token })
    }
  }
}
