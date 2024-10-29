<template>
  <div class="header">
    <nav class="navbar">
      <!-- Usa require o @ para la ruta de la imagen en Vue -->
      <a class="navbar-brand" href="/">
        <img :src="require('@/assets/img/logo_white.png')" alt="Logo" />
      </a>
      <div class="menubar" @click="toggleMenu" style="display: none">
        <i class="fa fa-bars"></i>
      </div>
      <ul class="navbar-nav" :class="{ active: isMenuVisible }">
        <li class="nav-item">
          <router-link class="nav-link" to="/">Inicio</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/process">Trámites</router-link>
        </li>
        <li class="nav-item menu-item">
          <router-link class="nav-link" to="/services">Servicios</router-link>
        </li>
        <li
          class="nav-item menu-item"
          @mouseover="showSubmenu"
          @mouseleave="hideSubmenu"
        >
          <p class="nav-link m-0">
            Institucional <i class="fa fa-angle-down ml-2"></i>
          </p>
          <ul v-show="submenuVisible" class="submenu border">
            <li class="nav-item">
              <router-link class="nav-link" to="/about"
                >Sobre nosotros</router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/docs"
                >Documentos normativos</router-link
              >
            </li>
          </ul>
        </li>
        <li class="nav-item menu-item">
          <router-link class="nav-link" to="/news">Noticias</router-link>
        </li>
        <li class="nav-item intranet">
          <a class="nav-link" href="#">
            Acceso Colegiado <i class="fa fa-user ml-2"></i>
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>
<script>
export default {
  data() {
    return {
      submenuVisible: false,
      imageVisible: false,
      selectedImage: "",
      showScrollTop: false,
      isMenuVisible: false,
      images: ["/src/assets/img1.jpg", "/src/assets/img2.jpg"],
    };
  },
  mounted() {
    window.addEventListener("scroll", this.checkScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.checkScroll);
  },
  methods: {
    // Submenú
    showSubmenu() {
      this.submenuVisible = true;
    },
    hideSubmenu() {
      this.submenuVisible = false;
    },
    // Menú responsive
    toggleMenu() {
      console.log("Mostrar menu");
      this.isMenuVisible = !this.isMenuVisible;
    },
  },
};
</script>
<style>
.submenu {
  display: none !important;
}
.active {
  display: block !important;
}
</style>