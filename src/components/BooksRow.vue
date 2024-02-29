<script>
import {mapActions,mapGetters} from "vuex";
export default {
  name: "BooksRow",
  computed: {
    ...mapGetters(['getBooks'])
  },
  methods: {
    ...mapActions(['fetchBooks'])
  },
  watch: {
    '$route.params.id'() {
      console.log('id changed bro')
      this.fetchBooks(this.$route.params.id)
    }
  },
  mounted() {
    console.log("booksRow componentimiz yuklandi")
    this.fetchBooks(this.$route.params.id)
  }
}
</script>

<template>
  <div class="row">

    <!-- kitob boshlandi -->
    <div
        v-for="book of getBooks"
        v-bind:key="book.id"
        class="col-12 col-sm-6 col-lg-4 col-xl-3 mb-4">
      <div class="card">
        <img src="../img/sherlock.jpg" class="card-img-top" alt="sherlock-holmes-picture">
        <div class="card-body">
          <h5 class="card-title">{{book.name}}</h5>
          <p class="card-text">{{book.description}}</p>
          <router-link :to="'/book-info/' + book.id" class="btn btn-primary">Read</router-link>
        </div>
      </div>
    </div>
    <!-- kitob tugadi -->
  </div>

</template>

<style scoped>

</style>
