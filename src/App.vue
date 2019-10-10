<template>
  <div id="app">
     <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/ProductPage">View Product</router-link> |
      <router-link to="/Cart">Cart</router-link> |
      <router-link to="/products">Products</router-link> |
      <router-link to="/productCreate">Create new fruit</router-link> |
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {},
  data: () => ({
    
         
 }),
};
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif !important;
    -webkit-font-smoothing: antialiased !important;
    -moz-osx-font-smoothing: grayscale !important;
    text-align: center !important;
    color: #2c3e50 !important;
    margin-top: 60px !important;
  }
  .container {
    padding: 0 !important;
}

#header{
    display: flex !important;
    justify-content: center !important;
    align-items: center !important;
    background-color: #ff5c8d !important;
}

#logo, #menu, #cart{
    display:flex !important;
    justify-content: center !important;
    align-items: center !important;
}

#main{

background-size: cover !important;
}

#products{
    display: flex !important;
    flex-flow: row wrap !important;
    justify-content: center !important;
    align-items: center !important;
    width: 350px !important;
}

#product1, #product2, #product3, #product4, #product5, #product6{
    height: 530px !important;
    width: 350px !important;
    margin: 5px 5px 5px 5px !important;
    background-color: rgb(221, 217, 255) !important;
}

.product-price,.product-description,.product-headline {
    padding: 0 10px !important;
}

.product-price p{
    text-align: start !important;
}

.product-headline h2{
    font-family: 'Libre Baskerville', serif !important;
    display: flex !important;
    justify-content: center !important;
    margin-top: 10px !important;
    margin-bottom: 10px !important;
}

#products img{
    height: 350px !important;
    width: 350px !important;
}

.product-button{
    width: 100px !important;
}

#tt1{
  text-decoration: none !important;
}

#footer{
    height:100px !important;
    display: flex !important;
    width: 100% !important;
}

#about, #logo, #social{
    display:flex !important;
    justify-content: center !important;
    align-items: center !important;
}
</style>
