<script setup>
import { ref, onMounted, watch } from 'vue';
import { RouterLink, RouterView, useRoute } from 'vue-router';
import api from './api';

const categorias = ref({});

const pesquisa = ref('');

const route = useRoute();

watch(pesquisa, ()=> {
  console.log(pesquisa.value);
});

onMounted(() => {
  api.getCategorias().then(response => {
    categorias.value = response.data;
    console.log(categorias.value);
  }).catch(error => {
    console.error("Erro ao buscar produtos:", error);
  });
});
</script>

<template>
  <header>
    <nav class="navbar navbar-expand-lg bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="#"><img src="./assets/img/logo.png" alt="Logo" width="60" height="50"></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll"
          aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarScroll">
          <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style="--bs-scroll-height: 100px;">
            <li class="nav-item">
              <RouterLink class="nav-link " aria-current="page" to="/">Início</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" to="/sobre">Sobre</RouterLink>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                aria-expanded="false">
                Categorias
              </a>
              <ul class="dropdown-menu">
                <li>
                  <RouterLink v-for="categoria in categorias" class="dropdown-item" :to="`/categoria/${categoria.id}`">
                    {{ categoria.nome }}
                  </RouterLink>
                </li>
                <li>
                  <hr class="dropdown-divider">
                </li>
              </ul>
            </li>
            
            <li class="nav-item">
              <RouterLink class="nav-link" to="/sobre">Promoção</RouterLink>
            </li>
          </ul>
          <form class="d-flex" role="search">
            <input class="form-control me-2" v-model="pesquisa" type="search" placeholder="Search" aria-label="Search"
              style="width: 250px;">
            <button class="btn btn-outline-success" type="submit"><i class="bi bi-search"
                style="align-items: center; justify-content: center;"> </i></button>
          </form>
          <RouterLink to="/favoritos" class="icon-link" style="margin-left: 10px;">
            <i class="bi bi-heart"></i>
          </RouterLink>
          <RouterLink to="/profile" class="icon-link" style="margin-left: 15px;">
            <i class="bi bi-person"></i>
          </RouterLink>
          <RouterLink to="/carrinho" class="icon-link" style="margin-left: 15px;">
            <i class="bi bi-cart2"></i>
          </RouterLink>
        </div>
      </div>
    </nav>



  </header>
  <RouterView :key="route.fullPath" />
  <footer class="rodape" style="margin-top: 100px; text-align: center; background-color: #343a40; padding: 20px;">
    <p>&copy; 2024 DU Pé Calçados. Todos os direitos reservados.</p>
    <p><i class="bi bi-envelope"></i> <a href="mailto:dupecalcados@example.com">dupecalcados@example.com</a> | <i
        class="bi bi-telephone-inbound"></i> <a href="tel:+551199999999">(11) 9999-9999</a></p>
    <div style="margin: 10px 0;">
      <a href="https://www.facebook.com" target="_blank" style="margin: 0 10px; color: #3b5998;"><i
          class="bi bi-facebook"></i></a>
      <a href="https://www.twitter.com" target="_blank" style="margin: 0 10px; color: #1da1f2;"><i
          class="bi bi-twitter"></i></a>
      <a href="https://www.instagram.com" target="_blank" style="margin: 0 10px; color: #e4405f;"><i
          class="bi bi-instagram"></i></a>
      <a href="https://www.whatsapp.com" target="_blank" style="margin: 0 10px; color: #25d366;"><i
          class="bi bi-whatsapp"></i></a>
    </div>
    <p>A Du Pé Calçados oferece uma ampla variedade de tênis combinando estilo, conforto e desempenho.</p>
    <p>Nossa missão é proporcionar uma experiência de compra excepcional com produtos de alta qualidade e atendimento
      personalizado.</p>
    <p>Trabalhamos com as melhores marcas, garantindo durabilidade e conforto.</p>
    <p>Visite-nos e descubra por que somos a escolha certa para os apaixonados por tênis.</p>
  </footer>

</template>

<style scoped>
.navbar {
  background-color: #343a40;
}

.bi {
  margin-left: 15px;
}

.nav-link {
  color: #ffffff;
  margin-right: 10px;
}

.nav-link:hover {
  color: #adb5bd;
}

.dropdown-menu {
  background-color: #495057;
}

.dropdown-item {
  color: #ffffff;
}

.dropdown-item:hover {
  background-color: #6c757d;
}

.navbar-toggler {
  border-color: rgba(255, 255, 255, 0.1);
}

.navbar-toggler-icon {
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba%28255, 255, 255, 0.5%29' stroke-width='2' linecap='round' linejoin='round' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E");
}

.icon-link {
  color: white;
  font-size: 1.5rem;
}

.icon-link:hover {
  color: #adb5bd;
}

.btn-outline-success {
  color: #ffffff;
  border-color: #28a745;
}

.btn-outline-success:hover {
  background-color: #28a745;
  color: #ffffff;
}

.form-control {
  background-color: #495057;
  color: white;
  border: 1px solid #6c757d;
}

.form-control::placeholder {
  color: #adb5bd;
}

footer.rodape {
  background-color: #343a40;
  color: white;
  text-align: center;
  padding: 20px 0;
}

footer.rodape p,
footer.rodape a {
  color: white;
  margin: 5px 0;
}

footer.rodape a:hover {
  color: #adb5bd;
}
</style>
