<template>
  <section class="sign-in text-center" style="max-width: 30rem; margin: auto">
    <div class="alert alert-danger" v-if="error.match" role="alert">
      {{error.message}}
    </div>
    <form class="form-signin" @submit.prevent="signUp">
      <img
        class="mb-4"
        src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg"
        alt=""
        width="72"
        height="72"
      />
      <h1 class="h3 mb-3 font-weight-normal">Por favor ingrese sus datos</h1>
      <label for="inputName" class="sr-only">Nombre Completo</label>
      <input
        type="name"
        id="inputName"
        class="form-control"
        placeholder="Full Name"
        required=""
        autofocus=""
        v-model="name"
      />
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
      <label for="inputPassword" class="sr-only">Repetir Contraseña</label>
      <input
        type="password"
        id="inputPassword2"
        class="form-control"
        placeholder="Password"
        required=""
        v-model="password2"
      />
      <div class="checkbox mb-3">
        <label>
          <input type="checkbox" value="remember-me" /> Mantener sesion
        </label>
      </div>
      <div style="display:block; margin: 15px 0px">
        <div class="btn-group" role="group" aria-label="Basic example" >
          <button id="client" type="button" class="btn" :class="{ 'btn-success': !isProfessional, 'btn-outline-success': isProfessional}" @click="switchProfessional">Como Cliente</button>
          <button id="professional" type="button" class="btn" :class="{'btn-success': isProfessional, 'btn-outline-success': !isProfessional}" @click="switchProfessional">Como Profesional</button>
        </div>
      </div>
      <button class="btn btn-lg btn-block" type="submit" style="background-color: var(--light-bg-color); color: white">
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
      name: '',
      email: '',
      password: '',
      password2: '',
      error: {
        match: false,
        message: '',
      },
      isProfessional: false
    }
  },
  methods: {
    async signUp() {
      if (this.checkForm()) return

      try {
        const response = await this.$axios.$post('/api/v1/user/sign-up', {
          name: this.name,
          email: this.email,
          password: this.password,
          isProfessional: this.isProfessional ? 1 : 0,
        })

        this.error = {
          match: false,
          message: '',
        };

        this.$store.commit('auth/setUser', {
          name: response.name,
          isLogged: true,
          // Professional will come in 0,1 format
          isProfessional: response.isProfessional ? true : false,
          email: response.email,
        })
        this.$router.push('/')
      } catch (error) {

        this.error = {
          match: true,
          message: error.response.data.message,
        };
      }

    },
    checkForm() {
      if (this.password !== this.password2) {
        this.error = {
          match: true,
          message: 'Las contraseñas no coinciden!'
        };
        return true
      }
      this.error = {
        match: false,
        message: ''
      };
      return false
    },
    switchProfessional(event) {

      if(event.target.id == 'professional') {
        this.isProfessional = true;
      } else {
        this.isProfessional = false;
      }

    }
  },
}
</script>
