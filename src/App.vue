<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/productPage">View Product</router-link> |
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
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  .container {
    padding: 0 !important;
}

#header{
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #ff5c8d
}

#logo, #menu, #cart{
    display:flex;
    justify-content: center;
    align-items: center;
}

#main{

background-size: cover;
}

#products{
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    width: 350px;
}

#product1, #product2, #product3, #product4, #product5, #product6{
    height: 530px;
    width: 350px;
    margin: 5px 5px 5px 5px;
    background-color: rgb(221, 217, 255);
}

.product-price,.product-description,.product-headline {
    padding: 0 10px;
}

.product-price p{
    text-align: start;
}

.product-headline h2{
    font-family: 'Libre Baskerville', serif;
    display: flex;
    justify-content: center;
    margin-top: 10px;
    margin-bottom: 10px;
}

#products img{
    height: 350px;
    width: 350px;
}

.product-button{
    width: 100px;
}

#tt1{
  text-decoration: none;
}

#footer{
    height:100px;
    display: flex;
    width: 100%;
}

#about, #logo, #social{
    display:flex;
    justify-content: center;
    align-items: center;
}
</style>
