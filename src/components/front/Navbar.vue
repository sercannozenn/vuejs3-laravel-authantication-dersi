<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container">
      <a class="navbar-brand" href="#">VueJs 3 Laravel Auth</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mx-auto">
            <router-link :to="{ name: 'Home' }" tag="li" class="nav-item" active-class="active">
              <a href="#" class="nav-link">
                Anasayfa
              </a>
            </router-link>
            <router-link :to="{ name: 'hidden-page-1' }" tag="li" class="nav-item" active-class="active">
              <a href="#" class="nav-link">
                Gizli Sayfa 1
              </a>
            </router-link>
          <router-link :to="{ name: 'hidden-page-2' }" tag="li" class="nav-item" active-class="active">
            <a href="#" class="nav-link">
              Gizli Sayfa 2
            </a>
          </router-link>
        </ul>
        <div class="row un-authenticated" v-show="!authShow">
          <div class="col-6">
            <router-link :to="{ name: 'register' }" class="btn btn-warning btn-block">
              Register
            </router-link>
          </div>
          <div class="col-6">
            <router-link :to="{ name: 'login' }" class="btn btn-primary btn-block">
              Login
            </router-link>
          </div>
        </div>
        <div class="row authenticated" v-show="authShow">
          <div class="col-md-12">
            <div class="dropdown">
              <button class="btn btn-info btn-block dropdown-toggle" type="button" id="dropdownMenuButton"
                      data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Sercan Özen
              </button>
              <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a href="#" class="dropdown-item" @click.prevent="logout">
                  Logout
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped>
@media screen and (min-width: 991px) {
  .un-authenticated, .authenticated{
    min-width: 250px;
  }
}
</style>
<script>
import store from '../../store'
export default {
  name: "Navbar",
  data() {

  },
  computed: {
    authShow() {
      return store.isAuthenticated
    }
  },
  methods: {
    logout(){

    }
  }
}
</script>

