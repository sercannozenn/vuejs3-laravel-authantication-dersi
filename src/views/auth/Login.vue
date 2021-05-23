<template>
  <Auth>
<!--    prevent varsayılan özelliğini ezerek bizim işlemimizin öncelikli olarak yapılmasını sağlar.-->
    <form class="form-signin" @submit.prevent="loginFormSubmit">
      <h1 class="h3 mb-3 font-weight-normal">Sign In</h1>
      <label for="inputEmail" class="sr-only">Email address</label>
      <input type="email" id="inputEmail" class="form-control"
             v-model="user.email"
             placeholder="Email address"
             required autofocus>
      <label for="inputPassword" class="sr-only">Password</label>
      <input type="password" id="inputPassword" class="form-control" v-model="user.password" placeholder="Password" required>
      <button class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
      <p class="mt-5 mb-3 text-muted">&copy; 2017-2021</p>
    </form>
  </Auth>
</template>

<script>
import Auth from "../layouts/Auth";
export default {
  name: "Login",
  components: {Auth},
  data(){
    return {
      user: {
        email: null,
        password: null
      },
      isUser: false
    }
  },
  methods:{
    loginFormSubmit(){
      console.log(this.user)
    }
  }
}
</script>

<style scoped>

</style>
