<script>
import BooksRow from "@/components/BooksRow.vue";
import PaginationRow from "@/components/PaginationRow.vue";

export default {
  name: 'HomePage',
  components: {
    BooksRow,
    PaginationRow
  }
}


</script>

<template>
  <BooksRow />

  <PaginationRow />

</template>

<style scoped>

</style>