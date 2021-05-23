<template>
  <Auth>
    <form class="form-signin" @submit.prevent="singnUpSubmit">
      <h1 class="h3 mb-3 font-weight-normal">Sign Up</h1>
      <label for="inputEmail" class="sr-only">Full Name</label>
      <!--             @input="v$.user.email.$touch()"-->
      <!--             @blur="v$.user.email.$touch()" tab a bastığımızda-->
      <input type="text" id="fullName" class="form-control"
             :class="{'is-invalid' : v$.user.fullName.$error}"
             v-model="v$.user.fullName.$model"
             placeholder="Full Name" required autofocus>
      <small v-if="!v$.user.fullName.required.$response && v$.user.fullName.$error && submitted" class="text-danger">
        Full Nane alanı girilmesi zorunludur.
        <br>
      </small>
      <label for="inputEmail" class="sr-only">Email address</label>
      <!--             @input="v$.user.email.$touch()"-->
      <!--             @blur="v$.user.email.$touch()" tab a bastığımızda-->
      <input type="email" id="inputEmail" class="form-control"
             :class="{'is-invalid' : v$.user.email.$error}"
             v-model="v$.user.email.$model"
             placeholder="Email address">
            <small v-if="!v$.user.email.required.$response && v$.user.email.$error && submitted" class="text-danger">
                Email alanı girilmesi zorunludur.
              <br>
            </small>
            <small v-if="!v$.user.email.email.$response && v$.user.email.$error && submitted" class="text-danger">
              Lütfen geçerli bir email adresi girin.
            </small>
      <label for="inputPassword" class="sr-only">Password</label>
      <input type="password" id="inputPassword" class="form-control"
             :class="{'is-invalid' : v$.user.password.$error}"
             v-model="v$.user.password.$model"
             placeholder="Password"
             required>
            <small v-if="!v$.user.password.required.$response && v$.user.password.$error && submitted" class="text-danger">
              Parola alanı girilmesi zorunludur.<br>
            </small>
            <small v-if="!v$.user.password.valid.$response && v$.user.password.$error && submitted" class="text-danger">
              Parolanız en az bir küçük harf bir büyük harf ve rakam içermelidir.
            </small>
      <input type="password" id="inputPasswordConfirm" class="form-control"
             v-model="v$.user.passwordConfirmation.$model"
             :class="{'is-invalid' : v$.user.passwordConfirmation.$error}"
             placeholder="Password Confirmation"
             required>
            <small v-if="!v$.user.passwordConfirmation.required.$response && v$.user.passwordConfirmation.$error && submitted" class="text-danger">
              Parola onayı alanı girilmesi zorunludur.<br>
            </small>
            <small v-if="!v$.user.passwordConfirmation.sameAs.$response && v$.user.passwordConfirmation.$error && submitted" class="text-danger">
              Parolalarınız eşleşmiyor.
            </small>
      <button class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
      <p class="mt-5 mb-3 text-muted">&copy; 2017-2021</p>
    </form>
  </Auth>
</template>

<script>
/**
 * Vuelidate sadece data içerisinde tanımlı alanları validate eder.
 */
import Auth from "../layouts/Auth";
import useVuelidate from '@vuelidate/core'
import { required, email, sameAs } from '@vuelidate/validators'

export default {
  name: "Register",
  components: {Auth},
  setup () {
    return { v$: useVuelidate() }
  },
  data() {
    return {
      user: {
        fullName: null,
        email: null,
        password: null,
        passwordConfirmation: null
      },
      submitted: false
    }
  },
  validations() {
    return {
      user: {
        fullName: { required },
        email: { required, email},
        password: {
          required,
          valid: function(value) {
            const containsUppercase = /[A-Z]/.test(value)
            const containsLowercase = /[a-z]/.test(value)
            const containsNumber = /[0-9]/.test(value)
            return containsUppercase && containsLowercase && containsNumber
          }
        },
        passwordConfirmation: {
          required,
          sameAs: sameAs(this.user.password)
        }
      }
    }
  },
  methods: {
    singnUpSubmit() {
      this.submitted = true
    }
  }
}
</script>

<style scoped>

</style>
