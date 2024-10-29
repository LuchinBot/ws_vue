<template>
  <div>
    <div class="bs-slider">
      <div id="sliderAutomatic" class="carousel slide" data-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              :src="require('@/assets/img/directiva.png')"
              class="d-block w-100"
              alt=""
            />
            <div class="carousel-caption">
              <div class="context">
                <h1>JUNTA DIRECTIVA PERIODO 2024 – 2026</h1>
                <p>Ceremonia de Juramentación Virtual Periodo 2024 – 2026</p>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <img
            :src="require('@/assets/img/slider2.jpeg')"
            class="d-block w-100"
              alt=""
            />
            <div class="carousel-caption">
              <div class="context">
                <h1>Juramentación de Junta Directiva</h1>
                <p>
                  Ceremonia de Juramentación de Junta Directiva 2024 -2026 del
                  Consejo Departamental de San Martín
                </p>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <img :src="require('@/assets/img/news.jpg')" class="d-block w-100" alt="" />
            <div class="carousel-caption">
              <div class="context">
                <h1>DESFILE CÍVICO POR DEL DÍA DEL MVP – 2024</h1>
                <p>
                  Ceremonia del Desfile Cívico en conmemoración del Día del
                  Médico Veterinario del Perú - 2024
                </p>
              </div>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-target="#sliderAutomatic"
          data-slide="prev"
        >
          <span class="base-icon">
            <span
              class="carousel-control-prev-icon icon"
              aria-hidden="true"
            ></span>
          </span>
          <span class="sr-only">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-target="#sliderAutomatic"
          data-slide="next"
        >
          <span class="base-icon">
            <span
              class="carousel-control-next-icon icon"
              aria-hidden="true"
            ></span>
          </span>
          <span class="sr-only">Next</span>
        </button>
      </div>
    </div>
    <section class="section-birthday container-fluid">
      <div class="birthday container">
        <div class="row p-0 m-0 d-flex justify-content-between">
          <div class="col-md-4 p-0 m-0">
            <div class="box">
              <h3>Cumpleañeros de hoy</h3>
              <h1>23 de Octubre</h1>
              <a href="news" class="caja-link">
                <i class="fa fa-arrow-right"></i>
              </a>
            </div>
          </div>
          <div class="col-md-4" style="position: relative">
            <div class="msg-hb">
              <p>
                Hoy es un día especial para brillar como la estrella que eres,
                ¡<strong style="font-weight: 900">Feliz cumpleaños</strong>!
              </p>
            </div>
          </div>
          <div class="col-md-4">
            <div class="hb">
              <img :src="require('@/assets/img/hb.png')" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="section-events-courses container-fluid">
      <div class="events-courses container">
        <div class="wrapper">
          <div class="col-md-6">
            <div class="box">
              <img :src="require('@/assets/img/women.png')" alt="" />
              <div class="context">
                <h1>Cursos</h1>
                <p>
                  Explora nuestra variada oferta de cursos diseñados para
                  profesionales y estudiantes interesados en actualizar y
                  profundizar sus conocimientos en diversas áreas.
                </p>
                <a href="courses">
                  <i class="fa fa-arrow-right"></i>
                </a>
                <span class="float-number">0</span>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="box">
              <img :src="require('@/assets/img/man.png')" alt="" />
              <div class="context">
                <h1>Eventos</h1>
                <p>
                  Mantente al día con los próximos eventos dedicados a la
                  comunidad veterinaria. Participa en seminarios, conferencias y
                  talleres diseñados para expandir tu red profesional.
                </p>
                <a href="events">
                  <i class="fa fa-arrow-right"></i>
                </a>
                <span class="float-number">0</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section
      class="section-process container-fluid"
      id="process"
      style="background-image: url('assets/img/process.jpg')"
    >
      <div class="process container">
        <div class="text-center mb-5">
          <h1 class="section-title text-white">Trámites</h1>
          <h6 class="section-subtitle">
            INFORMACIÓN DE REQUISITOS SOBRE LOS TRÁMITES
          </h6>
        </div>
        <div class="col">
          <div class="all-process">
            <div class="col-md-3">
              <div
                class="featured-box featured-box-primary featured-box-effect-3"
              >
                <a href="proce" class="box-content">
                  <span>
                    <i class="fa-solid fa-id-badge"></i>
                  </span>
                  <h4 class="pt-4 text-black font-weight-light">
                    Nueva <br />
                    <strong style="font-weight: 900">Colegiatura</strong>
                  </h4>
                  <p class="text-black font-weight-light">
                    Proceso y requerimeintos para trámite de Colegiatura.
                  </p>
                  <i class="fa fa-eye"></i>
                </a>
              </div>
            </div>
            <div class="col-md-3">
              <div
                class="featured-box featured-box-primary featured-box-effect-3"
              >
                <a href="proce" class="box-content">
                  <span>
                    <i class="fa-solid fa-certificate"></i>
                  </span>
                  <h4 class="pt-4 text-black font-weight-light">
                    Certificado <br />
                    <strong style="font-weight: 900">de Habilidad</strong>
                  </h4>
                  <p class="text-black font-weight-light">
                    Acredita la aptitud para ejercer la profesión.
                  </p>
                  <i class="fa fa-eye"></i>
                </a>
              </div>
            </div>
            <div class="col-md-3">
              <div
                class="featured-box featured-box-primary featured-box-effect-3"
              >
                <a href="proce" class="box-content">
                  <span>
                    <i class="fa-solid fa-id-card"></i>
                  </span>
                  <h4 class="pt-4 text-black font-weight-light">
                    Duplicado <br />
                    <strong style="font-weight: 900">de Carnet</strong>
                  </h4>
                  <p class="text-black font-weight-light">
                    Reemisión del carnet oficial por pérdida o deterioro.
                  </p>
                  <i class="fa fa-eye"></i>
                </a>
              </div>
            </div>
            <div class="col-md-3">
              <div
                class="featured-box featured-box-primary featured-box-effect-3"
              >
                <a href="proce" class="box-content">
                  <span>
                    <i class="fa-solid fa-money-bill-transfer"></i>
                  </span>
                  <h4 class="pt-4 text-black font-weight-light">
                    Traslado <br />
                    <strong style="font-weight: 900">de Colegiado</strong>
                  </h4>
                  <p class="text-black font-weight-light">
                    Cambio de inscripción entre sedes departamentales.
                  </p>
                  <i class="fa fa-eye"></i>
                </a>
              </div>
            </div>
            <!-- Repite para cada elemento -->
          </div>
          <div class="more-divider">
            <a href="process" class="bg-white text-brown"
              >Ver más <i class="fa fa-arrow-right ml-2"></i
            ></a>
          </div>
        </div>
      </div>
    </section>
    <section class="section-services container-fluid" id="services">
      <div class="services container">
        <div class="text-center mb-5">
          <h1 class="section-title text-brown">Servicios</h1>
          <h6 class="section-subtitle">NUESTROS SERVICIOS A SU DISPOSICIÓN</h6>
        </div>
        <div class="wrapper">
          <a href="mesa" class="stack">
            <div class="icon">
              <i class="fa-solid fa-book-open"></i>
            </div>
            <div class="text">
              <h5>Mesa de partes Virtual</h5>
              <p>
                Permite a los colegiados y ciudadanos en general realizar
                trámites administrativos de manera completamente en línea.
              </p>
            </div>
          </a>
          <a href="search-collegiate" class="stack">
            <div class="icon">
              <i class="fa-solid fa-magnifying-glass"></i>
            </div>
            <div class="text">
              <h5>Búsqueda colegiados</h5>
              <p>
                Este servicio permite a los usuarios consultar el registro
                oficial de los médicos veterinarios colegiados en nuestra
                institución.
              </p>
            </div>
          </a>
          <a href="statistics" class="stack">
            <div class="icon">
              <i class="fa-solid fa-magnifying-glass"></i>
            </div>
            <div class="text">
              <h5>Estadística Colegiados</h5>
              <p>
                Este servicio proporciona datos estadísticos sobre los
                colegiados inscritos en el Colegio de Médicos Veterinarios,
                tales como la cantidad de “Colegiados Activos”, etc.
              </p>
            </div>
          </a>
        </div>
        <div class="more-divider">
          <a href="services"
            >Ver más <i class="fa fa-arrow-right ml-2"></i
          ></a>
        </div>
      </div>
    </section>
    <section
      class="section-comun-pronun overlay container-fluid"
      style="background-image: url('assets/img/news.jpg')"
    >
      <div class="comun-pronun container">
        <div class="text-center mb-5">
          <h1 class="section-title text-white">
            Comunicados y Pronunciamientos
          </h1>
          <h6 class="section-subtitle">
            Conoce los comunicados y pronunciamientos del CMVDSM
          </h6>
        </div>
        <div class="wrapper">
          <div class="col-md-6">
            <div class="box">
              <div class="image">
                <img :src="require('@/assets/img/comun-default.png')" alt="" />
              </div>
              <div class="context">
                <div class="float-date">
                  <span>15 Jun 2024</span>
                </div>
                <p class="text-muted font-weight-bold">ÚLTIMO COMUNICADO</p>
                <h3>
                  <a href="comun"
                    >Médicos Veterinarios de San Martín Brindan Atención a
                    Animales Silvestres Afectados por Incendios
                  </a>
                </h3>
                <p>
                  El CMVDSM ha puesto a disposición un equipo de veterinarios
                  voluntarios para brindar atención médica a los animales
                  silvestres que han sido afectados por los recientes incendios
                  en la región. Estos profesionales están ofreciendo sus
                  servicios para ayudar a mitigar los efectos de esta emergencia
                  ambiental.
                </p>
                <span>
                  <a href="comun">
                    <i class="fa fa-plus mr-2"></i>
                    <small></small>
                    <small> Leer más</small>
                  </a>
                </span>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="box">
              <div class="image">
                <img :src="require('@/assets/img/pronun-default.png')" alt="" />
              </div>
              <div class="context">
                <div class="float-date">
                  <span>25 Jun 2024</span>
                </div>
                <p class="text-muted font-weight-bold">
                  ÚLTIMO PRONUNCIAMIENTO
                </p>
                <h3>
                  <a href="pronun"
                    >Pronunciamiento del Colegio Médico Veterinario del Perú
                    sobre la Huelga Nacional Indefinida de Trabajadores del
                    SENASA</a
                  >
                </h3>
                <p>
                  El Colegio Médico Veterinario del Perú, a través de su Decano
                  Nacional, ha emitido un pronunciamiento dirigido a las
                  autoridades del país, incluyendo a la Presidencia de la
                  República, el Primer Ministro y el Ministro de Desarrollo
                  Agrario y Riego. En este comunicado, se solicita la pronta
                  atención a las demandas del Sindicato de Trabajadores del
                  Servicio Nacional de Sanidad Agraria (SENASA).
                </p>
                <span>
                  <a href="pronun">
                    <i class="fa fa-plus mr-2"></i>
                    <small> Leer más</small>
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>