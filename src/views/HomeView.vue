<template>
  <div>
    <div id="carouselExampleControlsNoTouching" class="carousel slide" data-bs-touch="false" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="../assets/img/logo3.png" class="d-block w-100" alt="Promoção 1">
        </div>
        <div class="carousel-item">
          <img src="../assets/img/car_promo2.png" class="d-block w-100" alt="Promoção 2">
        </div>
        <div class="carousel-item">
          <img src="../assets/img/car_promo3.png" class="d-block w-100" alt="Promoção 3">
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Anterior</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Próximo</span>
      </button>
    </div>

    <div class="container">
      <div v-for="produto in produtos" :key="produto.id" class="card">
        <img :src="produto.imagem" class="card-img-top" :alt="produto.nome">
        <div class="card-body">
          <h5 class="card-title">{{ produto.nome }}</h5>
          <p class="rating">
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-half"></i>
          </p>
          <p class="product-price">R$ {{ produto.preco }}</p>
          <RouterLink :to="`/Produto/${produto.id}`" class="btn btn-outline-primary">Informação</RouterLink>
          <a href="/carrinho" class="icon-link1">
            <i class="bi bi-cart2"></i>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import api from '../api';

const produtos = ref([]);

onMounted(() => {
  api.getProdutos().then(response => {
    produtos.value = response.data.products;
  }).catch(error => {
    console.error("Erro ao buscar produtos:", error);
  });
});
</script>

<style scoped>



/* ------------------- Estilo do ícone no carrinho */
.icon-link1 .bi {
  color: #007bff;
  border: 2px solid #007bff;
  border-radius: 25%;
  padding: 4px;
  transition: background-color 0.3s, color 0.3s;
}

.icon-link1 {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-left: 10px;
}

.icon-link1:hover .bi {
  background-color: #007bff;
  color: #fff;
}

/* ------------------ Estilo dos cards */
.card {
  width: 18rem;
  background: #fff;
  border: none;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;
}

.card:hover {
  transform: translateY(-10px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
}

.card-img-top {
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  height: 280px;
  object-fit: cover;
}

.card-body {
  padding: 15px;
  text-align: center;
}

.card-title {
  font-size: 1.2rem;
  margin-bottom: 10px;
  color: #333;
}

.rating {
  display: flex;
  justify-content: center;
  color: #ffc107;
  margin-bottom: 10px;
  gap: 5px;
}

.product-price {
  font-size: 1.1rem;
  color: #000;
  margin-bottom: 15px;
}

.btn-outline-primary {
  border-color: #007bff;
  color: #007bff;
  transition: background-color 0.3s, color 0.3s;
}

.btn-outline-primary:hover {
  background-color: #007bff;
  color: #fff;
}

/* ---------------------------- Estilo do carrossel */
.carousel {
  position: relative;
  margin: 20px 110px;
}

.carousel-inner {
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.carousel-item img {
  object-fit: cover;
  height: 500px;
}

.carousel-control-prev-icon,
.carousel-control-next-icon {
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 50%;
  width: 50px;
  height: 50px;
}

.carousel-control-prev,
.carousel-control-next {
  top: 50%;
  transform: translateY(-50%);
  width: 50px;
  height: 50px;
}

.carousel-control-prev:hover,
.carousel-control-next:hover {
  background-color: rgba(0, 0, 0, 0.7);
}

@media (max-width: 768px) {
  .carousel-item img {
    height: 300px;
  }

  .carousel-control-prev,
  .carousel-control-next {
    width: 40px;
    height: 40px;
  }

  .carousel-control-prev-icon,
  .carousel-control-next-icon {
    width: 40px;
    height: 40px;
  }
}

/* Estilo do container dos card ------------------ */
.container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 50px;
  padding: 20px;
}

</style>
