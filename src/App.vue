<template>
  <div id="main">
    <headerComponent />
    <!--CAMBIAR DE ACUERDO LA PAGINA SELECCIONADA-->
    <router-view />
    <footerComponent />

  </div>
</template>


<script>
import headerComponent from './components/includes/HeaderComponent.vue';
import footerComponent from './components/includes/FooterComponent.vue';
export default {
  name: "App",
  components: {
    headerComponent,
    footerComponent
  },
};
</script>
<style>
/* Añade tus estilos aquí */
.submenu {
  display: none;
}
.active {
  display: block !important;
}
.scroll-to-top {
  display: none;
}
.scroll-to-top.show {
  display: block;
}
</style>