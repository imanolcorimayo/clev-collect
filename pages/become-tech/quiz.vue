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
        <div class="row my-4">
            <div class="col-lg-12">
                <h4> ¿Que pasos realizas en una instalación? </h4>
              <div class="form-check">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked>
                <label class="form-check-label" for="flexRadioDefault2">
                  No estas seguro
                </label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked>
                <label class="form-check-label" for="flexRadioDefault2">
                  Nitrógeno porque la particula es menor
                </label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked>
                <label class="form-check-label" for="flexRadioDefault2">
                  Controlas con alguna herramienta casera si la instalación tiene pérdida
                </label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked>
                <label class="form-check-label" for="flexRadioDefault2">
                  Todas son correctas
                </label>
              </div>
            </div>
        </div>
        <div class="row my-4">
            <div class="col-lg-12">
                <h4> ¿Que pasos realizas en una instalación? </h4>
              <div class="form-check">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked>
                <label class="form-check-label" for="flexRadioDefault2">
                  No estas seguro
                </label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked>
                <label class="form-check-label" for="flexRadioDefault2">
                  Nitrógeno porque la particula es menor
                </label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked>
                <label class="form-check-label" for="flexRadioDefault2">
                  Controlas con alguna herramienta casera si la instalación tiene pérdida
                </label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked>
                <label class="form-check-label" for="flexRadioDefault2">
                  Todas son correctas
                </label>
              </div>
            </div>
        </div>
        <div class="row my-4">
            <div class="col-lg-12">
                <h4> ¿Que pasos realizas en una instalación? </h4>
              <div class="form-check">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked>
                <label class="form-check-label" for="flexRadioDefault2">
                  No estas seguro
                </label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked>
                <label class="form-check-label" for="flexRadioDefault2">
                  Nitrógeno porque la particula es menor
                </label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked>
                <label class="form-check-label" for="flexRadioDefault2">
                  Controlas con alguna herramienta casera si la instalación tiene pérdida
                </label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked>
                <label class="form-check-label" for="flexRadioDefault2">
                  Todas son correctas
                </label>
              </div>
            </div>
        </div>
        <div class="row my-4">
            <div class="col-lg-12">
                <h4> ¿Que pasos realizas en una instalación? </h4>
              <div class="form-check">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked>
                <label class="form-check-label" for="flexRadioDefault2">
                  No estas seguro
                </label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked>
                <label class="form-check-label" for="flexRadioDefault2">
                  Nitrógeno porque la particula es menor
                </label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked>
                <label class="form-check-label" for="flexRadioDefault2">
                  Controlas con alguna herramienta casera si la instalación tiene pérdida
                </label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked>
                <label class="form-check-label" for="flexRadioDefault2">
                  Todas son correctas
                </label>
              </div>
            </div>
        </div>
        <div class="row my-4 justify-content-center">
          <button class="btn" style="background-color: var(--main-color-one)">Enviar Respuestas</button>
        </div>
      </div>
    </section>
    <!-- Modal Starts-->
    <!-- Modal -->
    <div class="modal" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            ...
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>
    <!-- Modal Ends -->
  </div>
</template>

<script>
export default {
  /* middleware: ['auth'], */
  data() {
    return {
      show: false
    }
  },
  async asyncData(context) {
    /* const questions = await context.$axios.$get('/api/v1/on-boarding/questions')
    return {
      questions,
    } */
  },
  methods: {
    showQuiz () {
      if (this.show) return;
      this.show = true;
    }
  }
}
</script>