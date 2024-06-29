import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://localhost:7066', 
  headers: {
    'Content-Type': 'application/json'
  }
});

const port = process.env.PORT || 3301;

export default {
  getProdutos() {
    return apiClient.get('/produtos'); 
  },

  getProdutoById(id) {
    return apiClient.get(`/produtos/${id}`); 
  },

  getCategorias() {
    return apiClient.get(`/categorias`);
  },

  getProdutosByCategoria(idCategoria) { 
    return apiClient.get(`/produtosPorCategoria/{IdCategoria}?id=${idCategoria}`); 
  }
  


};
