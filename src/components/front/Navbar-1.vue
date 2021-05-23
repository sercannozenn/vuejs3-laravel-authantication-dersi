<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container">
      <a class="navbar-brand" href="#">VueJs 3 Laravel Auth</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mx-auto">
          <li class="nav-item active">
            <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Dropdown
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="#">Action</a>
              <a class="dropdown-item" href="#">Another action</a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="#">Something else here</a>
            </div>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
          </li>
        </ul>
        <div class="row un-authenticated">
          <div class="col-6"><a href="" class="btn btn-warning btn-block">Register</a></div>
          <div class="col-6"><a href="" class="btn btn-primary btn-block">Login</a></div>
        </div>
        <div class="row authenticated">
          <div class="col-md-12">
            <div class="dropdown">
              <button class="btn btn-info btn-block dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Sercan Özen
              </button>
              <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a class="dropdown-item" href="#">Logout</a>
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
export default {
  name: "Navbar1",
  data() {

  },
  computed: {

  },
  methods: {

  }
}
</script>

