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
    return {}
  },
  methods: {
  },
}
</script>
