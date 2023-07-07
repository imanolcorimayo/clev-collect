<template>
  <div>
    <!-- preloader area start -->
    <div class="preloader" id="preloader">
        <div class="preloader-inner">
            <div class="loader_bars">
                <span></span>
            </div>
        </div>
    </div>
    <!-- preloader area end -->
    <header class="header-style-01">
        <!-- Menu area Starts -->
        <nav class="navbar navbar-area color-two nav-relative navbar-two navbar-expand-lg">
            <div class="container container-two nav-container">
                <div class="responsive-mobile-menu">
                    <div class="logo-wrapper">
                        <a href="/">
                            <img class="rounded" style="width: 250px" src="@/assets/img/logo-214-51.png" alt="logo de search service">
                        </a>
                    </div>
                    <a href="#0" class="click_show_icon">
                        <i class="las la-ellipsis-v"></i>
                    </a>
                    <button class="navbar-toggler black-color" type="button" data-toggle="collapse" data-target="#bizcoxx_main_menu" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                </div>
                <div class="collapse navbar-collapse" id="bizcoxx_main_menu">
                    <ul class="navbar-nav">
                        <li><NuxtLink to="/">Home</NuxtLink></li>
                        <li><NuxtLink to="/about-us">Sobre Nosotros</NuxtLink></li>
                        <li><NuxtLink to="/services">Servicios</NuxtLink></li>
                        <li><NuxtLink to="/professional">Profesional Mode</NuxtLink></li>
                        <li><NuxtLink to="/blog">Blog</NuxtLink></li>
                        <li><NuxtLink to="/contact-us">Contactanos</NuxtLink></li>
                        <li><NuxtLink to="/chat"><i class="bi bi-envelope"></i>Bandeja</NuxtLink></li>
                    </ul>
                </div>
                <div class="nav-right-content">
                    <client-only>
                        <div v-if="isLogged" class="info-bar-item">
                            <div class="notification-icon icon">
                                <a class="single-icon" href="javascript:void(0)"> <i class="las la-bell"></i> </a>
                                <span class="notification-number"> 5 </span>
                                <div class="notification-list-wrapper">
                                    <h6 class="notification-title"> Notifications </h6>
                                    <ul class="notification-list">
                                        <li class="list">
                                            <div class="notification-list-flex">
                                                <div class="item-icon">
                                                    <i class="las la-bell"></i>
                                                </div>
                                                <div class="notification-contents">
                                                    <a class="list-title" href="javascript:void(0)"> Notification One </a>
                                                    <span class="list-sub"> 4 hours ago </span>
                                                </div>
                                            </div>
                                        </li>
                                        <li class="list">
                                            <div class="notification-list-flex">
                                                <div class="item-icon">
                                                    <i class="las la-bell"></i>
                                                </div>
                                                <div class="notification-contents">
                                                    <a class="list-title" href="javascript:void(0)"> Notification Two </a>
                                                    <span class="list-sub"> 8 hours ago </span>
                                                </div>
                                            </div>
                                        </li>
                                        <li class="list">
                                            <div class="notification-list-flex">
                                                <div class="item-icon">
                                                    <i class="las la-bell"></i>
                                                </div>
                                                <div class="notification-contents">
                                                    <a class="list-title" href="javascript:void(0)"> Notification Three </a>
                                                    <span class="list-sub"> 1 day ago </span>
                                                </div>
                                            </div>
                                        </li>
                                        <li class="list">
                                            <div class="notification-list-flex">
                                                <div class="item-icon">
                                                    <i class="las la-bell"></i>
                                                </div>
                                                <div class="notification-contents">
                                                    <a class="list-title" href="javascript:void(0)"> Notification Four </a>
                                                    <span class="list-sub"> 3 day ago </span>
                                                </div>
                                            </div>
                                        </li>
                                        <li class="list">
                                            <div class="notification-list-flex">
                                                <div class="item-icon">
                                                    <i class="las la-bell"></i>
                                                </div>
                                                <div class="notification-contents">
                                                    <a class="list-title" href="javascript:void(0)"> Notification Five </a>
                                                    <span class="list-sub"> 7 day ago </span>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                    <a href="javascript:void(0)" class="all-notification"> See All Notification </a>
                                </div>
                            </div>
                        </div>
                        <div v-if="isLogged" class="nav-item btn-group">
                            <button 
                                class="info-bar-item-two nav-link dropdown-toggle" 
                                id="userDropdown" 
                                data-bs-toggle="dropdown" 
                                aria-expanded="false"
                            >
                                <div class="author-thumb">
                                    <img :src="user.photoURL" :alt="`${user.displayName }'s profile img'`">
                                </div>
                                <div class="author-nav-content">
                                    <span class="title"> {{ user.displayName }} </span>
                                </div>
                            </button>
                            <ul class="dropdown-menu" aria-labelledby="userDropdown">
                                <li><a class="dropdown-item" href="profile.html">Profile</a></li>
                                <li><a class="dropdown-item" href="#section1">Section 1</a></li>
                                <li><a class="dropdown-item" href="#section2">Section 2</a></li>
                                <li><hr class="dropdown-divider"></li>
                                <li><button class="dropdown-item" @click="signOut()">Cerrar Sesión</button></li>
                            </ul>
                        </div>
                        <NuxtLink v-else to="/auth/sign-in" class="info-bar-item-two">
                            <div class="author-nav-content">
                                <span class="title"> Iniciar Sesión </span>
                            </div>
                        </NuxtLink>
                    </client-only>
                </div>
            </div>
        </nav>
        <!-- Menu area end -->
    </header>
    <div class="overlays"></div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  computed: {
    user() {
      return this.$store.state.user
    },
    isLogged() {
      return this.$store.state.isLogged
    },
  },
  methods: {
    ...mapActions(['logout']),
    async signOut() {
        try {
            // Sign out from firebase
            const FIREBASE_PROVIDER = new this.$fireModule.auth.GoogleAuthProvider()
            await this.$fire.auth.signOut(FIREBASE_PROVIDER)

            // Clean up store
            this.logout()
        } catch (error) {
            console.error(error)      
        }

    },
  }
}
</script>
