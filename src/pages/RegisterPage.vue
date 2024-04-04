<script>

import {mapActions} from "vuex";

export default {
  name: 'RegisterPage',
  data() {
    return {
      form: {
        email: '',
        password: '',
        age: ''
      }
    }
  },
  methods: {
    ...mapActions(["fetchUser"]),
    register() {
      this.fetchUser(this.form)
          .then(() => {
            console.log('Registratsiyadan muvaffaqiyatli otinggiz')
            this.$router.push('/login')
          })
      console.log('Bu LOGIN PAGEDASIZ')
    }
  }

}

</script>

<template>
  <form class="col-6" @submit.prevent="register">
    <div class="mb-3">
      <label class="col-sm-2 col-form-label" for="inputEmail3">Email</label>
      <div class="col-sm-10">
        <input id="inputEmail3" v-model="form.email" class="form-control" type="email">
      </div>
    </div>
    <div>
      <label class="col-sm-2 col-form-label" for="inputPassword3">Password</label>
      <div class="col-sm-10">
        <input id="inputPassword3" v-model="form.password" class="form-control" type="password">
      </div>
    </div>
    <div class="mb-3">
      <label class="col-sm-2 col-form-label" for="inputAge3">Age</label>
      <div class="col-sm-10">
        <input id="inputAge13" v-model="form.age" class="form-control" type="number">
      </div>
    </div>
    <button class="btn btn-primary" type="submit">Register</button>
    <br>
  </form>
</template>

<style>

</style>