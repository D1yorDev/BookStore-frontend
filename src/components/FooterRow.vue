<script>
export default {
  name: "FooterRow",
  props: {
    foo: {
      type: String,
      required: true
    },
    bar: {
      type: Number,
      default: 24
    }
  }

}


</script>

<template>
  <div class="row mt-3">
    <div class="col">
      <footer class="bg-dark text-light p-5 mt-4">
        &copy; All rights reserved. 2024  {{ foo }} - {{ bar }}
      </footer>
    </div>
  </div>
</template>

<style scoped>

</style>