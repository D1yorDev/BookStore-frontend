<script>
export default {
  name: 'HeaderRow'
}
</script>

<template>
  <div class="row">
    <nav class="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
      <div class="container-fluid">
        <router-link class="navbar-brand" to="/">Kitoblar</router-link>
        <button aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" class="navbar-toggler"
                data-bs-target="#navbarSupportedContent" data-bs-toggle="collapse" type="button">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div id="navbarSupportedContent" class="collapse navbar-collapse">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link class="nav-link" to="/login">Kirish</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/register">Registration</router-link>
            </li>
            <li class="nav-item dropdown">
              <a aria-expanded="false" class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#"
                 role="button">
                Dropdown
              </a>
              <ul class="dropdown-menu">
                <li>
                  <router-link class="dropdown-item" to="/create-category">CreateCategory</router-link>
                </li>
                <li>
                  <router-link class="dropdown-item" to="/create-book">CreateBook</router-link>
                </li>

                <li>
                  <hr class="dropdown-divider">
                </li>
                <li><a class="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled">Disabled</a>
            </li>
          </ul>
          <form class="d-flex" role="search">
            <input aria-label="Search" class="form-control me-2" placeholder="Search" type="search">
            <button class="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  </div>
</template>

<style>

</style>