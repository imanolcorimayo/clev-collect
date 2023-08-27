<template>
  <section>
    <!-- Banner Inner area Starts -->
    <div class="banner-inner-area section-bg-2">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="banner-inner-contents">
                        <ul class="inner-menu">
                            <li class="list"><NuxtLink to="/"> Home </NuxtLink></li>
                            <li class="list">Crear Cuenta</li>
                        </ul>
                        <h2 class="banner-inner-title"> Crear Cuenta </h2>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Banner Inner area end -->
    <!-- Sign in area Starts -->
    <div class="signup-area padding-top-100 padding-bottom-100">
        <div class="container">
            <div class="signup-wrapper">
                <div class="signup-contents">
                    <h3 class="signup-title"> Sign Up </h3>
                    <FormulateForm 
                      :form-errors="formErrors"
                      form-errors-class="text-danger"
                      class="signup-forms"
                      @submit="emailSignUp"
                    >
                        <div class="single-signup margin-top-30">
                            <label class="signup-label"> Email* </label>
                            <FormulateInput
                              @validation="handleError"
                              v-model="email"
                              input-class="form--control"
                              help-class="small-text"
                              errors-class=""
                              error-class="text-danger"
                              type="email"
                              name="email"
                              placeholder="Ingresá tu email"
                              help="ejemplo@gmail.com"
                              validation="required|email"
                              error-behavior="live"
                            />
                        </div>
                        <div class="single-signup margin-top-30">
                            <label class="signup-label"> Contraseña* </label>
                            <FormulateInput
                              @validation="handleError"
                              v-model="password"
                              input-class="form--control"
                              help-class="small-text"
                              errors-class=""
                              error-class="text-danger"
                              type="password"
                              name="password"
                              placeholder="Ingresá tu contraseña"
                              validation="required|min:10,length"
                              validation-name="Password"
                              error-behavior="live"
                            />
                        </div>
                        <button type="submit" class="submit-button"> Crear Cuenta </button>
                        <button class="btn btn-outline-warning" @click.prevent="googleSignIn()"><i class="bi bi-google text-grey"></i> Crear cuenta con Google</button>
                        <span class="bottom-register"> Ya tienes una cuenta? <NuxtLink class="resgister-link" to="/auth/sign-in"> Inicia Sesión </NuxtLink> </span>
                    </FormulateForm>
                </div>
            </div>
        </div>
    </div>
    <!-- Sign in area end -->
  </section>
</template>

<script>
import { mapActions } from 'vuex'
import MobileDetect from 'mobile-detect'

export default {
  data() {
    return {
      email: '',
      password: '',
      formErrors: [],
      isFromClean: {
        email: false,
        password: false
      },
      firebaseProvider: new this.$fireModule.auth.GoogleAuthProvider()
    }
  },
  asyncData({req}) {

    if (!req) return;
    // Detect if is mobile or tables
    // This potentially might go to the vuex storage
    const md = new MobileDetect(req.headers['user-agent'])
    const isMobile = md.phone() !== null || md.mobile() === 'UnknownMobile'
    const isTablet = md.tablet() !== null || md.mobile() === 'UnknownTablet'
    const isDesktop = !isMobile && !isTablet

    return {
      isMobile,
      isTablet,
      isDesktop,
    }
  },
  async fetch(){
    this.$helpers.switchLoader(true);
    if (!this.isMobile && !this.isTablet) return this.$helpers.switchLoader(false);;

    // Check if redirected from google login page
    var { user } = await this.$fire.auth.getRedirectResult(this.firebaseProvider)

    if(user) {
      // Update user object
      await this.onAuthStateChangedAction({ authUser: user, $fire: this.$fire })

      // Store user in firebase
      await this.saveUser(user);

      // Go to proper route
      this.$router.push('/') // that return from firebase
    }
    this.$helpers.switchLoader(false);
  },
  fetchOnServer: false,
  methods: {
    ...mapActions(['onAuthStateChangedAction']),
    async googleSignIn() {
      this.$helpers.switchLoader(true);
      try {
        // Use Firebase to login

        // By Firebase docs, if mobile, sign in with redirect is preferred
        if(this.isMobile || this.isTablet) {
          var { user } = await this.$fire.auth.signInWithRedirect(this.firebaseProvider)
        } else {
          var { user } = await this.$fire.auth.signInWithPopup(this.firebaseProvider)

          // Update user object
          this.onAuthStateChangedAction({ authUser: user, $fire: this.$fire })

          // Store user in firebase
          await this.saveUser(user);

          // Go to proper route
          this.$helpers.switchLoader(false);
          this.$router.push('/') // that return from firebase
        }
      } catch (e) {
        // Hide loader
        this.$helpers.switchLoader(false);
        // handle the error
        console.error(e)
      }
    },
    async emailSignUp() {
      this.$helpers.switchLoader(true);
      try {
        // No need validation as the form already have limited the submit if error exists
        var { user } = await this.$fire.auth.createUserWithEmailAndPassword(this.email, this.password)

        // Update user object
        this.onAuthStateChangedAction({ authUser: user, $fire: this.$fire })

        // Store user in firebase
        await this.saveUser(user);

        // Hide loader
        this.$helpers.switchLoader(false);
        // Go to proper route
        this.$router.push('/') // that return from firebase
      } catch (e) {
        // Hide loader
        this.$helpers.switchLoader(false);
        // handle the error
        console.error('Error trying to sign up user: ', e.message)
        this.formErrors.push(e.message)
      }
    },

    async saveUser(user){
      // Get specific information
      const { uid, email, emailVerified, displayName, photoURL } = user;

      // Create value
      await this.$fire.database.ref(`users/${uid}`).set({
        displayName,
        email,
        emailVerified,
        photoURL
      })
    },
    handleError(val) {
      // Change object status
      this.isFromClean[val.name] = !val.hasErrors
    }
  },
}
</script>

<style>
.small-text {
  font-size: .75rem;
  margin-top: 5px;
  margin-bottom: 5px;
}
</style>
