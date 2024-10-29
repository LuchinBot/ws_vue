<template>
  <div>
    <section class="section-contact container-fluid" id="contact">
      <div class="container my3">
        <div class="row">
          <div class="col-lg-4">
            <div class="box">
              <img :src="require('@/assets/img/logo_white.png')" alt="" />
              <p>
                Somos una institución que agremia a los Médicos Veterinarios del
                Departamento de San Martín con la finalidad de ejercer
                representación oficial de la profesión ante los organismos
                nacionales e internacionales.
              </p>
              <p style="font-weight: 500">
                <strong>
                  <i class="fas fa-map-marked-alt"></i> Av. Fernando Belaunde
                  Terry N° 548, Banda de Shilcayo, Provincia y Departamento de
                  San Martín.</strong
                >
              </p>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="box">
              <h3><i class="fa fa-info-circle mr-2"></i> CONTÁCTENOS</h3>
              <ul class="ul-contact">
                <li class="title">Información de Empresa</li>
                <li>
                  <a href="">
                    <i class="fa fa-hashtag"></i>
                    RUC: 20450284883
                  </a>
                </li>
                <li class="title">Escríbenos</li>
                <li>
                  <a href="contact.html">
                    <i class="fa-solid fa-share-from-square"></i>
                    Contáctenos
                  </a>
                </li>
                <li class="title">Horario de Atención</li>
                <li>
                  <i class="fa fa-clock"></i>
                  Lunes a Viernes de 9:00am - 12:30pm
                </li>
              </ul>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="box">
              <h3><i class="fa fa-newspaper mr-3"></i> FANPAGE</h3>
              <iframe
                style="height: 100%"
                src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FCMVDSM&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=5098249470225307"
                width="340"
                height="500"
                styles="border:none;overflow:hidden"
                scrolling="no"
                frameborder="0"
                allowfullscreen="true"
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
    <footer>
      <div class="container-fluid footer">
        <div class="container py-3">
          <div class="row">
            <div class="col d-flex justify-content-between">
              <div class="col-md-6">CMVP CDSM Tarapoto © Copyright 2024</div>
              <div class="col-md-6 text-right">
                Desarrollado <i class="fas fa-bolt"></i> por
                <a target="_blank" href="" class="text-white">LuchinBot</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
    <div id="show-comunicate" v-if="imageVisible" @click="closeImage" style="display: block;">
		<div class="base">
            <img :src="require('@/assets/img/comunicado2.jpg')" alt="" />
			<div class="close">
				<i class="fas fa-times"></i>
			</div>
		</div>
	</div>
    <button v-show="showScrollTop" @click="scrollToTop" class="scroll-to-top hidden-mobile visible"><i class="fas fa-chevron-up"></i></button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      submenuVisible: false,
      imageVisible: false,
      selectedImage: '',
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
    closeImage() {
      this.imageVisible = false;
    },

    // Scroll to top
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
    checkScroll() {
      this.showScrollTop = window.scrollY > 100;
    },
  },
};
</script>
<style>
.scroll-to-top {
  display: none !important;
}
.scroll-to-top.show {
  display: block !important;
}
</style>