<template>
  <div class="container">
    <div v-if="error.statusCode === 404">
      <!-- Error Area starts -->
      <div class="error-area padding-top-100 padding-bottom-100">
          <div class="container">
              <div class="row">
                  <div class="col-lg-12">
                      <div class="error-wrapper">
                          <div class="thumb">
                              <img src="@/assets/img/404.png" alt="">
                          </div>
                          <div class="contents margin-top-60">
                              <h2 class="title"> Page Not Found </h2>
                              <div class="btn-wrapper margin-top-50">
                                  <a href="index.html" class="cmn-btn btn-bg-1"> Back To Home </a>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      <!-- Error Area ends -->
    </div>
    <div v-else>
      <h1>Error Ocurred While trying to load the page</h1>
      <NuxtLink to="/">Home page</NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  props: ['error'],
  layout: 'blog' // you can set a custom layout for the error page
}
</script>