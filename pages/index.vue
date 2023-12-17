<template>
  <div>
    <!-- Banner area Starts -->
    <div class="banner-area section-bg-2">
      <div class="container container-two">
        <div class="row justify-content-between align-items-center">
          <div class="col-xl-5">
            <div class="banner-contents style-02" style="padding-top: 0px">
              <h2 class="banner-title">
                Emprezá a
                <span class="span-shape"> Reciclar! </span>
              </h2>
              <span class="title-top">
               Llená el formulario y encontrá el recolector ideal
              </span>
              <div class="banner-bottom-content">
                <div class="banner-search-form">
                  <div class="banner-address-select">
                    <select @change="searchCollectors">
                      <option value="1">Select Location</option>
                      <option value="2">Córdoba</option>
                      <option value="3">Buenos Aires</option>
                    </select>
                  </div>
                  <div class="banner-button">
                    <NuxtLink to="/checkout" class="banner-submit">
                      Empezar
                    </NuxtLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-6 align-self-start" style="margin-top: 1rem">
            <div class="banner-right-contents">
              <div
                class="banner-right-thumb wow slideInUp"
                data-wow-delay=".2s"
              >
                <img
                  class="rounded"
                  src="@/assets/img/woman-holding-paper-and-plastic-bags-1202x800.jpg"
                  alt="Mujer sosteniendo bolsas de basura"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Banner area end -->
    <!-- Seller area starts -->
    <section class="seller-area padding-top-70 padding-bottom-100">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6 margin-top-30">
            <div class="seller-thumbs wow slideInLeft" data-wow-delay=".2s">
              <img src="@/assets/img/people-recycling.webp" alt="" />
            </div>
          </div>
          <div class="col-lg-6 margin-top-30">
            <div class="seller-wrapper seller-content-padding">
              <div class="section-title text-left">
                <h2 class="title">Comenza a recolectar!</h2>
                <span class="section-para">
                  Aquellos comprometidos con la sostenibilidad pueden generar un impacto
                  profundo. Al convertirte en recolector en nuestra plataforma, no solo estás recogiendo materiales reciclables; estás alimentando un ciclo de cambio. Es un hecho ampliamente conocido que cada contribución remodela el futuro de nuestro planeta.  Unite a nosotros, redefinamos la forma en que reciclamos.
                </span>
              </div>
              <div class="seller-contents style-02">
                <ul class="seller-list">
                  <li class="list">
                    <span class="span-list">
                      Da el paso hoy, sé el catalizador de un mañana más verde.
                    </span>
                  </li>
                  <li class="list">
                    <span class="span-list">
                      Tu contribución tiene valor, y será recompensado.
                    </span>
                  </li>
                </ul>
                <div class="btn-wrapper">
                  <NuxtLink to="/become-collector" class="cmn-btn btn-bg-2">
                    Mas Información
                  </NuxtLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Seller area end -->
    <!-- Marketplace area end -->
    <section
      class="margketplace-area padding-top-100 padding-bottom-100 section-bg-2"
    >
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-xl-6 col-lg-7 col-md-10">
            <div class="section-title">
              <h2 class="title">Por Qué Nuestro Marketplace?</h2>
            </div>
          </div>
        </div>
        <div class="row margin-top-20">
          <div class="col-lg-4 col-md-6 margin-top-30 marketplace-child">
            <div
              class="single-marketplace style-02 wow fadeInUp"
              data-wow-delay=".2s"
            >
              <div class="icon">
                <i class="las la-tools"></i>
              </div>
              <div class="marketplace-contents">
                <h4 class="common-title-two hover-color-two">
                  <span> Compromiso </span>
                </h4>
                <p class="common-para">
                  Estamos comprometidos con el impacto ambiental.
                  Estamos dispuestos a llevar la tecnologia al máximo nivel para
                  solucionar problemas medioambientales.
                </p>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 margin-top-30 marketplace-child">
            <div
              class="single-marketplace style-02 wow fadeInDown"
              data-wow-delay=".2s"
            >
              <div class="icon">
                <i class="las la-users-cog"></i>
              </div>
              <div class="marketplace-contents">
                <h4 class="common-title-two hover-color-two">
                  <span> Experiencia </span>
                </h4>
                <p class="common-para">
                  Trabajamos hace mas de 10 años en diversos proyectos que nos
                  convierten en expertos en marketplaces y medioambiente
                </p>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 margin-top-30 marketplace-child">
            <div
              class="single-marketplace style-02 wow fadeInUp"
              data-wow-delay=".2s"
            >
              <div class="icon">
                <i class="las la-shield-alt"></i>
              </div>
              <div class="marketplace-contents">
                <h4 class="common-title-two hover-color-two">
                  <span> Datos Seguros </span>
                </h4>
                <p class="common-para">
                  Contamos con los mejores proveedores de servicios
                  en protección de datos.
                </p>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 margin-top-30 marketplace-child">
            <div
              class="single-marketplace style-02 wow fadeInDown"
              data-wow-delay=".2s"
            >
              <div class="icon">
                <i class="las la-stopwatch"></i>
              </div>
              <div class="marketplace-contents">
                <h4 class="common-title-two hover-color-two">
                  <span> Servicio Innovador </span>
                </h4>
                <p class="common-para">
                  Poponemos romper con el status quo, uniendo 2 campos funamentales hoy
                  en dia; Los marketplaces y las voluntades de reciclar.
                </p>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 margin-top-30 marketplace-child">
            <div
              class="single-marketplace style-02 wow fadeInUp"
              data-wow-delay=".2s"
            >
              <div class="icon">
                <i class="las la-file-invoice-dollar"></i>
              </div>
              <div class="marketplace-contents">
                <h4 class="common-title-two hover-color-two">
                  <span> Pago Seguro </span>
                </h4>
                <p class="common-para">
                  Seremos mediadores de los pagos, por lo que el mismo esta asegurado.
                </p>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 margin-top-30 marketplace-child">
            <div
              class="single-marketplace style-02 wow fadeInDown"
              data-wow-delay=".2s"
            >
              <div class="icon">
                <i class="las la-headset"></i>
              </div>
              <div class="marketplace-contents">
                <h4 class="common-title-two hover-color-two">
                  <span> Soporte Dedicado </span>
                </h4>
                <p class="common-para">
                  Contamos con un equipo comprometido de atencion al cliente, todos
                  elegidos en base a su compromiso con el medio ambiente!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "IndexPage",
  data() {
    return {
      place: "",
    };
  },
  methods:{
    searchCollectors() {
      console.log("working")
    }
  }
};
</script>
