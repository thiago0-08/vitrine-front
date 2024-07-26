import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://localhost:7066',
  headers: {
    'Content-Type': 'application/json'
  }
});

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
    
    return apiClient.get(`/produtosPorCategoria/${idCategoria}`);
  }
};
// codigo corrigido
