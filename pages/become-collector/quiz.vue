<template>
  <div>
    <!-- Intro Area -->
    <section class="margketplace-area padding-top-100 padding-bottom-100 section-bg-2">
      <div class="container">
        <div class="row align-items-center">
            <div class="col-lg-10">
                <div class="section-title">
                    <h2 class="title"> Empecemos con un caso hipotético </h2>
                    <span class="section-para"> Te presentaremos el caso hipotetico y luego tendras que responer una serie de preguntas. Buena suerte! </span>
                </div>
            </div>
              <!-- Button trigger modal -->
            <div class="col-lg-2">
              <button @click="showQuiz" type="button" class="btn" style="background-color: var(--main-color-one)" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Ver caso
              </button>
            </div>
        </div>
      </div>
    </section>
    <!-- Intro Area -->
    <section v-if="show" class="margketplace-area padding-top-10 padding-bottom-100 section-bg-2">
      <div class="container">
        <div class="row my-4" v-for="(q, index) in quiz" :key="`question-${index}`" >
            <div class="col-lg-12">
              <h5> {{ q.question }} </h5>
              <div class="form-check" v-for="(a, i) in q.answers" :key="`answers-${index}-${i}`">
                <input v-model="finalAnswers[index]" class="form-check-input" :value="i" type="radio" :name="`radio${index}`" :id="`input${index}${i}`">
                <label class="form-check-label" :for="`input${index}${i}`">
                  {{ a.value }}
                </label>
              </div>
            </div>
        </div>
        <div class="row my-4 justify-content-center">
          <button @click="sendQuiz()" class="btn" style="background-color: var(--main-color-one)">Enviar Respuestas</button>
        </div>
      </div>
    </section>
    <!-- Modal Starts-->
    <!-- Modal -->
    <div class="modal" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Caso Hipotetico</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <strong>Introducción:</strong> <br><br>
            Imagina que te asignamos a un vecindario residencial con una alta conciencia ambiental y una gran demanda de servicios de recolección de residuos reciclables. <br>
            Tienes acceso a un vehículo equipado especialmente para el transporte de materiales reciclables y cuentas con el equipo de protección personal necesario. <br>
            Ahora, te encuentras en una situación específica que requiere tu atención y habilidades para tomar decisiones acertadas. <br>
            A continuación, se presentan la situación y dos preguntas relacionadas:<br><br>
            <strong>Situación:</strong><br><br>
            Llegas a una vivienda y te encuentras con un contenedor de reciclaje lleno de materiales correctamente clasificados. 
            Sin embargo, notas que el contenedor está bloqueando la entrada de emergencia del edificio, 
            lo que viola las normas de seguridad contra incendios. <br>
            Además, no hay nadie presente en el lugar para mover el contenedor. ¿Cómo abordas esta situación?


          </div>
          <div class="modal-footer d-flex justify-content-center">
            <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Empezar cuestionario</button>
          </div>
        </div>
      </div>
    </div>
    <!-- Modal Ends -->
  </div>
</template>

<script>
export default {
  middleware: ['userIsLogged', 'quizTaken'],
  computed: {
    user() {
      return this.$store.state.user
    },
  },
  data() {
    return {
      show: false,
      finalAnswers: [
        null,
        null,
        null,
        null,
        null,
      ]
    }
  },
  async asyncData(context) {
    // Init default values
    let quiz = {}

    try {
      // Get quiz
      quiz =  (await context.$fire.database.ref('quiz').get()).val() 
    } catch (error) {
      console.error(error)
    }

    // Return reactive object
    return {
      quiz
    }
  },
  methods: {
    showQuiz () {
      if (this.show) return;
      this.show = true;
    },
    async sendQuiz() {
      // Check all question have answer
      const AUX_ANSWERS = this.finalAnswers.filter(el => el == null)
      if(AUX_ANSWERS.length) return this.$toast.error('Error, tienes que contestar todas las preguntas para poder continuar.')


      if(this.checkIfQuizPassed(this.finalAnswers, this.quiz)) {
        // TODO: Send quiz. If success, create collector account with quiz passed status

        // Else, keep pushing messages
        await this.$fire.database.ref(`collectors`).push({
          user_uid: this.user.uid,
          collector_status: 'QUIZ_PASSED' 
        })
      }
      // TODO: If no quiz passed, create collector account with quiz failed
      await this.$fire.database.ref(`collectors`).push({
        user_uid: this.user.uid,
        collector_status: 'QUIZ_FAILED' 
      })

      this.$route.push('become-collector/welcome')
    },
    /**
     * This function will receive the answers and will work as a reference for the 
     * final function that will calculate if collector passed the quiz or not
     * 
     * @param {*} answers 
     */
    checkIfQuizPassed(answers, quiz) {
      // The max is 5*3 = 15
      // We will allow only have 1 question at 1 point, so 4*3 + 1 = 13
      const SCORE_TO_PASS = 13;

      // Calculate total scored
      // TODO probable using reduce function is cleaner
      let score = 0;
      for(let i = 0; i < quiz.length; i++) {
        score += quiz[i].answers[answers[i]].weight
      }
      // Return true only if met conditions
      return score >= SCORE_TO_PASS;
    },
  }
}
</script>