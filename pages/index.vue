<template>
  <div>
    <!-- Banner area Starts -->
    <div class="banner-area section-bg-2">
        <div class="container container-two">
            <div class="row justify-content-between align-items-center">
                <div class="col-xl-5">
                    <div class="banner-contents style-02" style="padding-top: 0px">
                        <h2 class="banner-title"> Encontrá profesionales <span class="span-shape"> Calificados </span> </h2>
                        <span class="title-top"> Busca el servicio que buscas y contactálos directamente </span>
                        <div class="banner-bottom-content">
                            <form action="#" class="banner-search-form">
                                <div class="banner-address-select">
                                    <select>
                                        <option value="1">Select Location</option>
                                        <option value="2">London</option>
                                        <option value="2">Eden Garden</option>
                                        <option value="2">Paris</option>
                                        <option value="2">Barcelona</option>
                                    </select>
                                </div>
                                <div class="banner-address-select">
                                    <select>
                                        <option value="1">Find Service</option>
                                        <option value="2">Cleaning</option>
                                        <option value="2">Electrician</option>
                                        <option value="2">Saloon</option>
                                        <option value="2">Painting</option>
                                    </select>
                                </div>
                                <div class="banner-button">
                                    <NuxtLink to="/services" class="banner-submit"> Search </NuxtLink>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div class="col-xl-6 align-self-start" style="margin-top: 1rem">
                    <div class="banner-right-contents">
                        <div class="banner-right-thumb wow slideInUp" data-wow-delay=".2s">
                            <img class="rounded" src="https://media.istockphoto.com/photos/technician-repairing-air-conditioner-picture-id1308375294?k=20&m=1308375294&s=612x612&w=0&h=ATgNus5-ruCRtRbuKdxIvEX8YJBex1TFCb4ZAdpwO_o=" alt="">
                        </div>
                        <div class="banner-cleaning-service">
                            <div class="icon">
                                <i class="las la-broom"></i>
                            </div>
                            <div class="icon-contents">
                                <span class="thumb-cleaning-title"> Cleaning Service </span>
                                <ul class="review-cleaning">
                                    <li> <i class="las la-star"></i> </li>
                                    <li> <i class="las la-star"></i> </li>
                                    <li> <i class="las la-star"></i> </li>
                                    <li> <i class="las la-star"></i> </li>
                                    <li> <i class="las la-star"></i> </li>
                                </ul>
                            </div>
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
                        <img src="@/assets/img/people-recycling.webp" alt="">
                    </div>
                </div>
                <div class="col-lg-6 margin-top-30">
                    <div class="seller-wrapper seller-content-padding">
                        <div class="section-title text-left">
                            <h2 class="title"> Comenza a recolectar! </h2>
                            <span class="section-para"> It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. It is a long established fact that a reader will be distracted by the readable content of a page when
                                looking at its layout. </span>
                        </div>
                        <div class="seller-contents style-02">
                            <ul class="seller-list">
                                <li class="list">
                                    <span class="span-list"> It is a long established fact that a reader will be distracted by the readable content of a page. </span>
                                </li>
                                <li class="list">
                                    <span class="span-list"> It is a long established fact that a reader will be distracted by the readable content of a page. </span>
                                </li>
                            </ul>
                            <div class="btn-wrapper">
                                <a href="/become-collector" class="cmn-btn btn-bg-2"> Become a Seller </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- Seller area end -->
    <!-- Marketplace area end -->
    <section class="margketplace-area padding-top-100 padding-bottom-100 section-bg-2">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-xl-6 col-lg-7 col-md-10">
                    <div class="section-title">
                        <h2 class="title"> Why Our Marketplace? </h2>
                        <span class="section-para"> It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </span>
                    </div>
                </div>
            </div>
            <div class="row margin-top-20">
                <div class="col-lg-4 col-md-6 margin-top-30 marketplace-child">
                    <div class="single-marketplace style-02 wow fadeInUp" data-wow-delay=".2s">
                        <div class="icon">
                            <i class="las la-tools"></i>
                        </div>
                        <div class="marketplace-contents">
                            <h4 class="common-title-two hover-color-two"> <a href="javascript:void(0)"> Service Commitment </a> </h4>
                            <p class="common-para"> It is a long established fact that a reader will be distracted by the readable. It is a long established fact that a reader. </p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 margin-top-30 marketplace-child">
                    <div class="single-marketplace style-02 wow fadeInDown" data-wow-delay=".2s">
                        <div class="icon">
                            <i class="las la-users-cog"></i>
                        </div>
                        <div class="marketplace-contents">
                            <h4 class="common-title-two hover-color-two"> <a href="javascript:void(0)"> Super Experience </a> </h4>
                            <p class="common-para"> It is a long established fact that a reader will be distracted by the readable. It is a long established fact that a reader. </p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 margin-top-30 marketplace-child">
                    <div class="single-marketplace style-02 wow fadeInUp" data-wow-delay=".2s">
                        <div class="icon">
                            <i class="las la-shield-alt"></i>
                        </div>
                        <div class="marketplace-contents">
                            <h4 class="common-title-two hover-color-two"> <a href="javascript:void(0)"> User Data Secure </a> </h4>
                            <p class="common-para"> It is a long established fact that a reader will be distracted by the readable. It is a long established fact that a reader. </p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 margin-top-30 marketplace-child">
                    <div class="single-marketplace style-02 wow fadeInDown" data-wow-delay=".2s">
                        <div class="icon">
                            <i class="las la-stopwatch"></i>
                        </div>
                        <div class="marketplace-contents">
                            <h4 class="common-title-two hover-color-two"> <a href="javascript:void(0)"> Fast Service </a> </h4>
                            <p class="common-para"> It is a long established fact that a reader will be distracted by the readable. It is a long established fact that a reader. </p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 margin-top-30 marketplace-child">
                    <div class="single-marketplace style-02 wow fadeInUp" data-wow-delay=".2s">
                        <div class="icon">
                            <i class="las la-file-invoice-dollar"></i>
                        </div>
                        <div class="marketplace-contents">
                            <h4 class="common-title-two hover-color-two"> <a href="javascript:void(0)"> Secure Payment </a> </h4>
                            <p class="common-para"> It is a long established fact that a reader will be distracted by the readable. It is a long established fact that a reader. </p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 margin-top-30 marketplace-child">
                    <div class="single-marketplace style-02 wow fadeInDown" data-wow-delay=".2s">
                        <div class="icon">
                            <i class="las la-headset"></i>
                        </div>
                        <div class="marketplace-contents">
                            <h4 class="common-title-two hover-color-two"> <a href="javascript:void(0)"> Dedicated Support </a> </h4>
                            <p class="common-para"> It is a long established fact that a reader will be distracted by the readable. It is a long established fact that a reader. </p>
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
  name: 'IndexPage',
  data() {
    return {
      place: '',
    }
  },
}
</script>
