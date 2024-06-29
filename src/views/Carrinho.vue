<template>
     <div class="container">
        <h1>Carrinho de Compras</h1>
        <div class="cart-item">
            <img src="../assets/img/tenis_preto.jpg" alt="Produto">
            <div class="cart-item-details">
                <p class="cart-item-title">Nome do Produto</p>
                <p class="cart-item-price">R$ 99,99</p>
            </div>
            <div class="cart-item-quantity">
                <label for="quantity">Qtd:</label>
                <input type="number" id="quantity" name="quantity" value="1">
            </div>
        </div>
        <div class="cart-summary">
            <h2>Resumo do Pedido</h2>
            <p>Total: R$ 99,99</p>
            <button class="checkout-btn">Finalizar Compra</button>
        </div>
    </div>
  </template>
  

  
  <style>
body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 0;
        }

        .container {
            width: 80%;
            margin: 50px auto;
            background: #fff;
            padding: 20px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }

        h1 {
            text-align: center;
            color: #333;
        }

        .cart-item {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 15px 0;
            border-bottom: 1px solid #ddd;
        }

        .cart-item:last-child {
            border-bottom: none;
        }

        .cart-item img {
            width: 100px;
            height: 100px;
            object-fit: cover;
        }

        .cart-item-details {
            flex: 1;
            margin-left: 20px;
        }

        .cart-item-title {
            font-size: 18px;
            margin: 0;
            color: #555;
        }

        .cart-item-price {
            font-size: 16px;
            color: #888;
        }

        .cart-item-quantity {
            display: flex;
            align-items: center;
        }

        .cart-item-quantity input {
            width: 50px;
            margin-left: 10px;
            padding: 5px;
            border: 1px solid #ddd;
            border-radius: 5px;
            text-align: center;
        }

        .cart-summary {
            margin-top: 30px;
            padding: 20px;
            background: #f9f9f9;
            border: 1px solid #ddd;
        }

        .cart-summary h2 {
            margin: 0;
            font-size: 24px;
            color: #333;
        }

        .cart-summary p {
            font-size: 18px;
            color: #555;
        }

        .checkout-btn {
            display: block;
            width: 100%;
            padding: 15px;
            background: #28a745;
            color: #fff;
            text-align: center;
            font-size: 18px;
            text-decoration: none;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            margin-top: 20px;
        }

        .checkout-btn:hover {
            background: #218838;
        }

  @media (min-width: 1024px) {
    .about {
      min-height: 100vh;
      display: flex;
      align-items: center;
    }
  }
  </style>