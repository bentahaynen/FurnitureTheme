<template>
  <nav class="navbar navbar-expand-lg bg-light">
    <div class="container-fluid">
      <!-- Logo Sol Taraf -->
      <a class="navbar-brand" href="/">
        <img src="@/assets/logo3.jpg" alt="Mobilya Logo" class="navbar-logo" />
      </a>
      <!-- Navbar Toggle Button -->
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <!-- Navbar Links ve Search Bar -->
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <!-- Navbar Links Ortada -->
        <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="/">Ana Sayfa</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/products">Ürünlerimiz</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/about">Hakkımızda</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/contact">İletişim</a>
          </li>
        </ul>

        <!-- Search Bar Sağda -->
        <form class="d-flex search-form" role="search">
          <input class="form-control me-2" type="search" placeholder="Ara" aria-label="Search">
          <button class="btn btn-outline-success" type="submit">Ara</button>
        </form>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'MainNavbar'
}
</script>

<style scoped>
/* Navbar styles */
.navbar {
  padding: 0.1rem;
}

.navbar-brand {
  flex-grow: 0; /* Logo sol tarafta başlasın */
}

.navbar-logo {
  margin-left: 60px;
  max-width: 110px; /* Logo boyutunu sınırlayın */
  height: auto; /* Orantılı yüksekliği korur */
}

.navbar-collapse {
  display: flex;
  justify-content: space-between; /* Navbar içeriğini aralarındaki boşluğu ayarla */
}

.navbar-nav {
  flex-direction: row;
  flex-grow: 1;
  justify-content: center; /* Nav item'ları ortada hizala */
}

.navbar-nav .nav-item {
  margin-left: 80px; /* Nav item'lar arasındaki boşluk */
}

.search-form {
  margin-left: auto; /* Search bar'ı sağa yaslar */
  margin-right: 40px; /* Sağdan boşluk bırakır */
}
</style>
