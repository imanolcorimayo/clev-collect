<template>
  <section class="sign-in text-center" style="max-width: 30rem; margin: auto">
    <form class="form-signin" @submit.prevent="signIn()">
      <img
        class="mb-4"
        src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg"
        alt=""
        width="72"
        height="72"
      />
      <h1 class="h3 mb-3 font-weight-normal">Por favor inicie sesión</h1>
      <label for="inputEmail" class="sr-only">Email</label>
      <input
        type="email"
        id="inputEmail"
        class="form-control"
        placeholder="Email address"
        required=""
        autofocus=""
        v-model="email"
      />
      <label for="inputPassword" class="sr-only">Contraseña</label>
      <input
        type="password"
        id="inputPassword"
        class="form-control"
        placeholder="Password"
        required=""
        v-model="password"
      />
      <div class="checkbox mb-3">
        <label>
          <input type="checkbox" value="remember-me" /> Mantener sesion
        </label>
      </div>
      <div class="checkbox mb-3">
        <label>
          No tienes cuenta? <NuxtLink to='/auth/sign-up'>registrarme</NuxtLink>
        </label>
      </div>
      <button class="btn btn-lg btn-primary btn-block" type="submit">
        Iniciar Sesion
      </button>
      <p class="mt-5 mb-3 text-muted">© 2022-2023</p>
    </form>
  </section>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
    }
  },
  methods: {
    async signIn() {
      const response = await this.$axios.$post('/api/v1/user/sign-in', {
        email: this.email,
        password: this.password,
      })
      if (!response) {
        console.log('here will be an alert')
      } else {
        this.$store.commit('auth/setUser', {
          name: response.name,
          isLogged: true,
          // Profesional will come in 0,1 format
          isProfessional: response.isProfessional ? true : false,
          email: response.email,
        })
        this.$router.push('/')
      }
    },
  },
}
</script>
