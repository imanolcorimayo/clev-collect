<template>
  <section>
    <!-- Banner Inner area Starts -->
    <div class="banner-inner-area section-bg-2">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="banner-inner-contents">
                        <ul class="inner-menu">
                            <li class="list"><a href="index.html"> Home </a></li>
                            <li class="list">Sign Up</li>
                        </ul>
                        <h2 class="banner-inner-title"> Sign Up Page </h2>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Banner Inner area end -->
    <!-- Signup area Starts -->
    <div class="signup-area padding-top-100 padding-bottom-100">
        <div class="container">
            <div class="signup-wrapper">
                <div class="signup-contents">
                    <h3 class="signup-title"> Sign Up </h3>
                    <form class="signup-forms">
                        <div class="single-signup margin-top-30">
                            <label class="signup-label"> User Name* </label>
                            <input class="form--control" type="text" name="name" placeholder="Type Name">
                        </div>
                        <div class="single-signup margin-top-30">
                            <label class="signup-label"> Password* </label>
                            <input class="form--control" type="password" name="Password" placeholder="Type Password">
                        </div>
                        <div class="signup-checkbox">
                            <div class="checkbox-inlines">
                                <input class="check-input" type="checkbox" id="check8">
                                <label class="checkbox-label" for="check8"> Remember me </label>
                            </div>
                            <div class="forgot-btn">
                                <a href="javascript:void(0)" class="forgot-pass"> Forgot Password </a>
                            </div>
                        </div>
                        <button type="submit" class="submit-button"> Login Now </button>
                        <button class="btn btn-outline-warning" @click.prevent="googleSignIn()"><i class="bi bi-google text-grey"></i> Login with Google</button>
                        <span class="bottom-register"> Don't have Account? <a class="resgister-link" href="javascript:void(0)"> Register </a> </span>
                    </form>
                </div>
            </div>
        </div>
    </div>
    <!-- Signup area end -->
  </section>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data() {
    return {
      email: '',
      password: '',
    }
  },
  methods: {
    ...mapActions(['onAuthStateChangedAction']),
    async googleSignIn() {
      try {
        const provider = new this.$fireModule.auth.GoogleAuthProvider()
        const { user } = await this.$fire.auth.signInWithPopup(provider)

        this.onAuthStateChangedAction({ authUser: user })

        console.log(user) // here you can do what you want with the user data
        // this.$router.push('/') // that return from firebase
      } catch (e) {
        // handle the error
      }
    },
  },
}
</script>
