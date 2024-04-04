<script>

import {mapActions} from "vuex";

export default {
  name: 'CreateCategory',
  data() {
    return {
      form: {
        name: '',

      }
    }
  },
  methods: {
    ...mapActions(["fetchCreateKategory"]),
    CreateCategories() {
      this.fetchCreateKategory(this.form)
          .then(() => {
            console.log('muvaffaqiyatli Categorya yaratinggiz')
            this.$router.push('/')
          })
      console.log('Bu Create Category pagedasiz')
    }
  }

}

</script>

<template>
  <form class="col-6" @submit.prevent="CreateCategories">
    <div class="mb-3">
      <label class="col-sm-2 col-form-label" for="inputCategory">Category</label>
      <div class="col-sm-10">
        <input id="inputCategory" v-model="form.name" class="form-control" placeholder="new category name" type="text">
      </div>
    </div>

    <button class="btn btn-primary" type="submit">Submit</button>
    <br>
  </form>
</template>

<style>

</style>