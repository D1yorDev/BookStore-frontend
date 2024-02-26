<script>

import HeaderRow from "@/components/HeaderRow.vue";
import SideBar from "@/components/SideBar.vue";
import FooterRow from "@/components/FooterRow.vue";
import HomePage from "@/pages/HomePage.vue";
import BooksRow from "@/components/BooksRow.vue";
import BookInfoPage from "@/pages/BookInfoPage.vue";

export default {
  name: 'App',
  components: {
    BookInfoPage,
    BooksRow,
    HomePage,
    FooterRow,
    SideBar,
    HeaderRow
  }
}
</script>

<template>
  <div class="container-fluid">

    <!-- navbar boshlandi -->
    <HeaderRow/>
    <!-- navbar tugadi -->

    <!-- main qator boshlandi -->

    <div class="row mt-4">

      <!-- sidebar boshlandi -->
      <SideBar/>
      <!-- sidebar tugadi -->

      <!-- kontent qism bowlandi -->
      <div class="col-12 col-md-10 mt-4 mt-md-0">

        <router-view />

      </div>
      <!-- kontent qism tugadi -->
    </div>
    <!-- main qator tugadi -->

    <!-- footer qator boshlandi -->
    <FooterRow/>
    <!-- footer qator tugadi -->

  </div>

</template>

<style>
</style>
