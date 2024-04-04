<script>
import {mapActions,mapGetters} from "vuex";

export default {
	name: "BookInfoPage",
	computed: {
		...mapGetters(["getBook"])
	},
	methods: {
		...mapActions(['fetchBook'])
	},
	mounted() {
    this.fetchBook(this.$route.params.bookId);
  }
}
</script>

<template>
  <div class="col-12 col-md-10 mt-4 mt-md-0">

    <div class="row">
      <div class="col">
        <h1>{{getBook.name}}</h1>
	      
	      <p>{{getBook.text}}</p>
      </div>
    </div>


  </div>
</template>

<style scoped>

</style>