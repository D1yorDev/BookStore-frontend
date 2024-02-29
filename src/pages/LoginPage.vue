<script>

import {mapActions} from "vuex";

export default {
  name: 'LoginPage',
  data() {
    return {
      form: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    ...mapActions(["fetchUserToken","fetchCategories"]),
    auth() {
        this.fetchUserToken(this.form)
            .then(() => {
              console.log('token muvaffaqiyatli olindi')
              this.fetchCategories()
              this.$router.push('/')
            })
      console.log('Bu LOGIN sahifasi auth funkisyasi')
    }
  }

}

</script>

<template>
  <form class="col-6" @submit.prevent="auth">
    <div class="mb-3">
      <label class="col-sm-2 col-form-label" for="inputEmail3">Email</label>
      <div class="col-sm-10">
        <input id="inputEmail3" v-model="form.email" class="form-control" type="email">
      </div>
    </div>
    <div class="mb-3">
      <label class="col-sm-2 col-form-label" for="inputPassword3">Password</label>
      <div class="col-sm-10">
        <input id="inputPassword3" v-model="form.password" class="form-control" type="password">
      </div>
    </div>
    <button class="btn btn-primary" type="submit">Kirish</button>
    <br>
  </form>
</template>

<style scoped>

</style>