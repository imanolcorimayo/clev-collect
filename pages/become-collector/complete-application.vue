<template>
  <div>
    <!-- Banner Inner area Starts -->
    <div class="banner-inner-area section-bg-2">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="banner-inner-contents text-center">
              <h2 class="banner-inner-title">Registrate y se parte de esta comunidad</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Banner Inner area end -->
    <!-- Register Step Form area starts -->
    <section class="registration-step-area padding-top-100 padding-bottom-100">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="registration-seller-btn">
              <ul class="registration-tabs tabs">
                <li data-tab="tab_one" class="active">
                  <div class="single-tabs-registration">
                    <div class="icon">
                      <i class="las la-briefcase"></i>
                    </div>
                    <div class="contents">
                      <h4 class="title">Recolector</h4>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div class="tab-content-item active" id="tab_one">
              <div class="registration-step-form margin-top-55">
                <form id="msform-two" class="msform">
                  <ul class="registration-list step-list-two">
                    <li class="list active">
                      <a class="list-click" href="javascript:void(0)"> 1 </a>
                    </li>
                    <li class="list">
                      <a class="list-click" href="javascript:void(0)"> 2 </a>
                    </li>
                    <li class="list">
                      <a class="list-click" href="javascript:void(0)"> 3 </a>
                    </li>
                    <li class="list">
                      <a class="list-click" href="javascript:void(0)"> 4 </a>
                    </li>
                    <li class="list">
                      <a class="list-click" href="javascript:void(0)"> 5 </a>
                    </li>
                  </ul>
                  <!-- Information -->
                  <transition name="fade" mode="out-in">
                    <fieldset v-if="step == 1" class="fieldset-info">
                      <div class="information-all margin-top-55">
                        <h3 class="register-title">Información básica</h3>
                        <span class="section-para"> 
                          Te pedimos esta informacion para poder estar en contacto contigo por cualquier 
                          situacion que lo pueda requerir. 
                        </span>
                        <div class="info-forms">
                          <div class="single-forms">
                            <div class="single-content margin-top-30">
                              <label class="forms-label"> Nombre* </label>
                              <FormulateInput
                                @validation="handleError"
                                v-model="basicInformation.firstName"
                                input-class="form--control"
                                errors-class=""
                                error-class="text-danger custom-error"
                                type="text"
                                name="firstName"
                                placeholder="Nombre"
                                validation="required|max:64,length"
                                validation-name="Nombre"
                                error-behavior="live"
                              />
                            </div>
                            <div class="single-content margin-top-30">
                              <label class="forms-label"> Apellido* </label>
                              <FormulateInput
                                @validation="handleError"
                                v-model="basicInformation.lastName"
                                input-class="form--control"
                                errors-class=""
                                error-class="text-danger custom-error"
                                type="text"
                                name="lastName"
                                placeholder="Apellido"
                                validation="required|max:64,length"
                                validation-name="Apellido"
                                error-behavior="live"
                              />
                            </div>
                          </div>
                          <div class="single-forms">
                            <div class="single-content margin-top-30">
                              <label class="forms-label"> Email* </label>
                              <input
                                disabled
                                v-model="basicInformation.email"
                                class="form--control"
                                type="text"
                                name="email"
                                placeholder="Type Email"
                              />
                            </div>
                            <div class="single-content margin-top-30">
                              <label class="forms-label"> Teléfono* </label>
                              <FormulateInput
                                @validation="handleError"
                                v-model="basicInformation.phone"
                                error-behavior="live"
                                input-class="form--control"
                                help-class="small-text position-absolute"
                                errors-class=""
                                error-class="text-danger custom-error"
                                type="tel"
                                name="phone"
                                maxlength=14
                                :error="fromHasErrors.phone ? 'Número inválido.' : null"
                                placeholder="Ingresá tu telefono"
                                validation="required|max:14,length"
                                validation-name="Telefono"
                                help="Ej: (111) 111-1111"
                              />
                            </div>
                          </div>
                          <div class="btn-wrapper margin-top-40">
                            <button 
                              @click="submitBasicInformation" 
                              class="cmn-button btn-bg-1"
                              form="noForm"
                            >
                              Guardar
                            </button>
                          </div>
                        </div>
                      </div>
                      <input
                        type="button"
                        name="next"
                        @click="goToNext"
                        :disabled="!basicInfoSubmitted"
                        :class="{disabled: !basicInfoSubmitted}"
                        class="next action-button"
                        value="Siguiente"
                      />
                    </fieldset>
                  </transition>
                  <!-- Listing service and bio -->
                  <transition name="fade" mode="out-in">
                    <fieldset v-if="step == 2" class="fieldset-listings">
                      <div class="information-all margin-top-55">
                        <h3 class="register-title">Informacion de venta</h3>
                        <div class="info-service single-forms">
                          <div class="single-info-service margin-top-30">
                            <div class="single-content">
                              <label class="forms-label"> Titulo de perfil como recolector </label>
                              <FormulateInput
                                type="text"
                                error-behavior="live"
                                @input="validateListing('title')"
                                input-class="form--control"
                                help-class="small-text position-absolute"
                                error-class="text-danger custom-error"
                                v-model="listing.listingTitle"
                                label="Listing Title"
                                :maxlength="64"
                                name="listingTitle"
                                :error="
                                  (listingErrors.listingTitle ? 
                                  'Este campo no puede estar vacío' : null)"    
                                required
                              />
                            </div>
                          </div>
                          <div class="single-info-service margin-top-30">
                            <div class="single-content">
                              <label class="forms-label"> Biografia que resume tu perfil de reciclador </label>
                              <FormulateInput
                                @validation="listingErrors"
                                @input="validateListing('bio')"
                                type="textarea"
                                error-behavior="live"
                                input-class="form--control text-area"
                                help-class="small-text position-absolute"
                                error-class="text-danger custom-error"
                                v-model="listing.listingBio"
                                label="Listing Bio"
                                name="listingBio"
                                :error="
                                  (listingErrors.listingBio ? 
                                  listingBioErrorMessage : null)"                              required
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <input
                        type="button"
                        @click="submitListing"
                        name="next"
                        class="next action-button"
                        value="Siguiente"
                      />
                      <input
                        type="button"
                        @click="goToPrev"
                        name="previous"
                        class="previous action-button-previous"
                        value="Previo"
                      />
                    </fieldset>
                  </transition>
                  <!-- Service -->
                  <transition name="fade" mode="out-in">
                    <fieldset  v-if="step == 3" class="fieldset-service">
                      <div class="information-all margin-top-55">
                        <h3 class="register-title">Service Area</h3>
                        <div class="info-service">
                          <div class="single-info-service margin-top-30">
                            <div class="single-content">
                              <label class="forms-label"> Service City* </label>
                              <select>
                                <option value="1">London</option>
                                <option value="2">Barcelona</option>
                                <option value="3">Washington</option>
                                <option value="4">Tokyo</option>
                                <option value="5">Paris</option>
                              </select>
                            </div>
                          </div>
                          <div class="single-info-service margin-top-30">
                            <div class="single-content">
                              <label class="forms-label"> Service Area* </label>
                              <select>
                                <option value="1">London</option>
                                <option value="2">Barcelona</option>
                                <option value="3">Washington</option>
                                <option value="4">Tokyo</option>
                                <option value="5">Paris</option>
                              </select>
                            </div>
                          </div>
                        </div>
                      </div>
                      <input
                        type="button"
                        name="next"
                        class="next action-button"
                        value="Next"
                      />
                      <input
                        type="button"
                        name="previous"
                        class="previous action-button-previous"
                        value="Previous"
                        @click="goToPrev"
                      />
                    </fieldset>
                  </transition>
                  <!-- Terms & Condition -->
                  <transition name="fade" mode="out-in">
                    <fieldset v-if="step == 4" class="fieldset-condition">
                      <div class="information-all margin-top-55">
                        <h3 class="register-title">Terms and Conditions</h3>
                        <div class="condition-info">
                          <div class="single-condition margin-top-30">
                            <div class="condition-content">
                              <div class="checkbox-inlines">
                                <input
                                  class="check-input"
                                  type="checkbox"
                                  id="check9"
                                />
                                <label class="checkbox-label" for="check9">
                                  It is a long established fact that a reader will
                                  be distracted by the readable content of a page
                                  when looking at its layout. The point of using
                                  Lorem Ipsum is that it has a more-or-less
                                  normal.
                                </label>
                              </div>
                            </div>
                          </div>
                          <div class="single-condition margin-top-30">
                            <div class="condition-content">
                              <div class="checkbox-inlines">
                                <input
                                  class="check-input"
                                  type="checkbox"
                                  id="check10"
                                />
                                <label class="checkbox-label" for="check10">
                                  It is a long established fact that a reader will
                                  be distracted by the readable content of a page
                                  when looking at its layout. The point of using
                                  Lorem Ipsum is that it has a more-or-less
                                  normal.
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <input
                        type="button"
                        name="submit"
                        class="next action-button"
                        value="Submit"
                      />
                      <input
                        type="button"
                        name="previous"
                        class="previous action-button-previous"
                        value="Previous"
                      />
                    </fieldset>
                  </transition>
                  <!-- Registration Successful -->
                  <transition name="fade" mode="out-in">
                    <fieldset v-if="step == 5" class="fieldset-message">
                      <div class="information-all margin-top-60">
                        <div class="info-success">
                          <div class="single-success margin-top-30">
                            <div class="success-content">
                              <div class="icon">
                                <i class="las la-check"></i>
                              </div>
                              <h3 class="success-title">
                                Your Seller Account
                                <small>Registration Successful</small>
                              </h3>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="btn-wrapper text-center margin-top-35">
                        <a href="index.html" class="cmn-btn btn-bg-1">
                          Back To Home</a
                        >
                      </div>
                    </fieldset>
                  </transition>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Register Step Form area end -->
  </div>
</template>


<script>
import {email,phoneNumber, bioMinLength} from '~/helpers/fieldValidations.js'
export default {
  middleware: ['userIsLogged', "userIsCollector"],
  async asyncData({store, $fire}) {
    // Update basic information
    const SPLIT_NAME = store.state.user.displayName.split(' ');
    const FIRST_NAME = store.state.user.firstName ? store.state.user.firstName : SPLIT_NAME[0];
    const LAST_NAME = SPLIT_NAME[SPLIT_NAME.length - 1];

    const RECYCLER_INFORMATION = (await $fire.database.ref('collectors').orderByChild('user_uid').equalTo(store.state.user.uid).get()).val();
     

    let basicInformation =  {
      firstName: FIRST_NAME,
      lastName: LAST_NAME,
      email: store.state.user.email,
      phone: store.state.user.phone ? store.state.user.phone : '',
    }

    let basicInfoSubmitted = true;
    // Iterate through the properties of the object
    for (const field in basicInformation) {
      if (!basicInformation.hasOwnProperty(field) || !basicInformation[field]) {
        basicInfoSubmitted = false
      }
    }

      return {
        basicInformation,
        basicInfoSubmitted,
        recyclerInformation: RECYCLER_INFORMATION
      }
  },
  computed: {
    user() {
      return this.$store.state.user
    },
  },
  data() {
    return {
      step: 1,
      fromHasErrors: {
        email: false,
        phone: false,
        firstName: false,
        lastName: false,
      },
      listingErrors: {
        listingTitle: false,
        listingBio: false
      },
      listingBioErrorMessage: '',
      listing: {
        listingTitle: '',
        listingBio: ''
      },
    }
  },
  methods: {
    // This function will update the user basic information
    async submitBasicInformation() {
      // Show loader first
      this.$helpers.switchLoader(true);
      // Validate all properties are complete
      const ERRORS = this.validateBasicProperties();
      if(ERRORS) {
        // Stop loader and show error message
        this.$helpers.switchLoader(false);
        return alert(ERRORS);
      } 

      try {
        // Submit information in firebase
        await this.$fire.database.ref(`users/${this.user.uid}`).update({
          ...this.basicInformation
        })

        // Enable "next" button
        this.basicInfoSubmitted = true;

        // Show success message
        this.$toast.success('La informacion se guardo con exito')
      } catch (e) {
        // Hide loader
        // handle the error
        console.error('Error trying to sign up user: ', e.message)
        this.formErrors.push(e.message)
        // Show error message
        this.$toast.error(`Hubo un error tratando de guardar la informacion: ${e.message}. Si no reconoce este mensaje comuniquese con nosotros.`)
      }

      // Hide loader on the end of the function
      this.$helpers.switchLoader(false);

    },
    // For now this represents basic validation
    validateBasicProperties() {
      // First name
      if(
        typeof this.basicInformation.firstName !== 'string' || 
        !this.basicInformation.firstName.length) {
          this.fromHasErrors.firstName = true;
      }

      // Last name
      if(
        typeof this.basicInformation.lastName !== 'string' || 
        !this.basicInformation.lastName.length) {
          this.fromHasErrors.lastName = true;
      }

      // Email
      if(
        typeof email(this.basicInformation.email) == 'string'
      ) {
          this.fromHasErrors.email = true;
      }

      // Phone and format
      if(
        typeof phoneNumber(this.basicInformation.phone) == 'string'
      ) {
          this.basicInformation.phone = ''
          this.fromHasErrors.phone = true;
      }

      //? If some values is false in fromHasErrors, then return error 

      // Create an array to store failed fields
      const failedFields = [];
      // Iterate through the properties of the object
      for (const field in this.fromHasErrors) {
        if (this.fromHasErrors.hasOwnProperty(field) && this.fromHasErrors[field]) {
          failedFields.push(field);
        }
      }

      // Create an error message if any fields failed
      if (failedFields.length > 0)
        return `The following fields are invalid: ${failedFields.join(', ')}`;

      return false;

    },
    handleError(val) {
      // Change object status
      this.fromHasErrors[val.name] = val.hasErrors
    },

    /* Listing functions */
    async submitListing() {
      // Show loader first
      this.$helpers.switchLoader(true);
      // Validate all properties are complete
      const ERRORS = this.validateListing();
      if(ERRORS) {
        // Stop loader and show error message
        this.$helpers.switchLoader(false);
        return alert(ERRORS);
      } 

      try {

        // Update recycler information in firebase
        const RECYCLER_ID = Object.keys(this.recyclerInformation)[0];
        await this.$fire.database.ref(`collectors/${RECYCLER_ID}`)
          .update({
            ...this.listing
        })

        // Show success message
        this.$toast.success('La informacion se guardo con exito')
      } catch (e) {
        // Hide loader
        // handle the error
        console.error('Error trying to sign up user: ', e.message)
        this.formErrors.push(e.message)
        // Show error message
        this.$toast.error(`Hubo un error tratando de guardar la informacion: ${e.message}. Si no reconoce este mensaje comuniquese con nosotros.`)
      }

      // Hide loader on the end of the function
      this.$helpers.switchLoader(false);
      this.goToNext();
    },
    validateListing(type) {

      // Listing title
      if(
        (typeof this.listing.listingTitle !== 'string' || 
        !this.listing.listingTitle.length) && type !== 'bio'
      ) {
        this.listingErrors.listingTitle = true;
      } else {
        this.listingErrors.listingTitle = false;
      }

      // Phone and format
      const BIO_VALIDATION = bioMinLength(this.listing.listingBio)
      if(
        typeof BIO_VALIDATION == 'string' && type !== 'listing'
      ) {
          this.listingBioErrorMessage = BIO_VALIDATION;
          this.listingErrors.listingBio = true;
      } else {
          this.listingErrors.listingBio = false;
      }

      //? If some values is false in listingErrors, then return error 

      // Create an array to store failed fields
      const failedFields = [];
      // Iterate through the properties of the object
      for (const field in this.listingErrors) {
        if (this.listingErrors.hasOwnProperty(field) && this.listingErrors[field]) {
          failedFields.push(field);
        }
      }

      // Create an error message if any fields failed
      if (failedFields.length > 0)
        return `The following fields are invalid: ${failedFields.join(', ')}`;

      return false;

    },
    handleListingError(val) {
      // Change object status
      this.listingErrors[val.name] = val.hasErrors
    },

    /** Form management functions */
    goToNext() {
      this.step++
    },
    goToPrev() {
      this.step--
    }
  }
}
</script>

<style>
.custom-error {
  position: relative;
  top: 1.2rem
}

.text-area {
  height: 10rem !important;
  padding-top: 15px !important;
  padding-bottom: 15px !important;
}

/* Define your CSS styles for the fade transition */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0;
}
</style>