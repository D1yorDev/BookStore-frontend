<script>
import {mapActions, mapGetters} from "vuex";

export default {
  name: 'SideBar',
  computed: {
    ...mapGetters(['getCategories'])
  },
  methods: {
    ...mapActions(['fetchCategories'])
  }
}
</script>

<template>
  <div class="col-12 col-md-2">
    <div v-if="$route.path !== '/login' && '/register' " class="list-group">
      <router-link
          v-for="category of getCategories"
          v-bind:key="category.id"
          :to="'/categories/' + category.id"
          class="list-group-item list-group-item-action"
          :class="parseInt($route.params.id) === category.id ? 'active' : ''"
      >
        {{ category.name }}
      </router-link>

    </div>
  </div>


</template>

<style>

</style>