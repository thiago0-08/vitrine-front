<template>
  <div class="container text-center mt-4">
    <div class="row">
      <div class="col-md-6">
        <div class="card h-100">
          <img :src="produto.imagem" class="card-img-top" :alt="produto.nome">
        </div>
      </div>
      <div class="col-md-6">
        <div class="card h-100">
          <div class="card-body text-left">
            <h3 class="card-title">{{ produto.nome }}</h3>
            <p class="card-text"><strong>Preço:</strong> R$ {{ produto.preco }}</p>
            <p><strong class="titulo">Descrição</strong></p>
            {{ produto.descricao }}
            <ul class="list-unstyled">
              <li><strong>Material da Palmilha:</strong> EVA</li>
              <li><strong>Material da Sola:</strong> Borracha</li>
              <li><strong>Características:</strong> Ajustável, Respirável</li>
            </ul>
            <h5>Selecione o tamanho:</h5>
            <div class="btn-group mb-3" role="group" aria-label="Selecione o tamanho" id="sizes-button">
              <button type="button" class="btn btn-outline-secondary" v-for="tamanho in produto.tamanhos" @click="changeSize(tamanho)">{{ tamanho }}</button>
              
            </div>
            <p><strong>Tamanho selecionado:</strong> <span id="selected-size">Nenhum</span></p>
            <h5>Selecione a cor:</h5>
            <div class="btn-group mb-3" role="group" aria-label="Selecione a cor">
              <button type="button" class="btn btn-outline-secondary" v-for="cor in produto.cores" @click="selectColor(cor)">{{ cor }}</button>
            </div>
            <p><strong>Cor selecionada:</strong> <span id="cor-selecionada">Nenhuma</span></p>
            <RouterLink class="btn btn-primary mt-3" to="/carrinho">Adicionar ao carrinho</RouterLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { RouterLink } from 'vue-router';

export default {
  components: {
    RouterLink
  },
  data() {
    return {
      produto: {
        tamanhos: [37, 38, 39, 40, 41]
      },
      selectedSize: 'Nenhum',
      selectedColor: 'Nenhuma'
    };
  },
  mounted() {
  },
  methods: {
    showProduct() {
      const sizesButton = document.getElementById("sizes-button");
      sizesButton.innerHTML = ""; // Limpa os botões de tamanho
      this.produto.tamanhos.forEach(tamanho => {
        let button = document.createElement("button");
        button.className = "btn btn-outline-secondary";
        button.innerText = tamanho;
        button.addEventListener("click", () => this.changeSize(tamanho));
        sizesButton.appendChild(button);
      });
    },
    changeSize(tamanho) {
      this.selectedSize = tamanho;
      document.getElementById("selected-size").innerText = tamanho;
    },
    selectColor(cor) {
      this.selectedColor = cor;
      document.getElementById("cor-selecionada").innerText = cor;
    }
  }
};
</script>

<script setup>
import { useRoute } from 'vue-router';
import { ref, onMounted } from 'vue';
import api from '../api';

const produto = ref([]);

onMounted(() => {
  api.getProdutoById(useRoute().params.id).then(response => {
    produto.value = response.data;
    console.log(produto.value);
  }).catch(error => {
    console.error("Erro ao buscar produtos:", error);
  });
});
</script>

<style>
.container {
  margin-top: 20px;
}

.card {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border: none;
}

.card-title {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
}

.card-text {
  font-size: 1.25rem;
}

.titulo {
  font-weight: bold;
  margin-top: 1rem;
}

.list-unstyled {
  padding-left: 0;
  list-style: none;
}

.btn-group .btn {
  margin-right: 5px;
}

.btn-primary {
  background-color: #007bff;
  border-color: #007bff;
  color: #fff;
}

.btn-primary:hover {
  background-color: #0056b3;
  border-color: #0056b3;
}

.mt-3 {
  margin-top: 1rem;
}

.mt-4 {
  margin-top: 1.5rem;
}
</style>
