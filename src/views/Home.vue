<template>
  <div>
    <h1>Home</h1>
  </div>
</template>


//jrbrj

<script>
  import axios from 'axios';

  export default {
    mounted() {
      this.fetchProducts()
    },
    data: () => ({
      fruits: []
    }),
    methods: {
      fetchProducts() {

        axios.get('http://fruitshop.azurewebsites.net/api/fruits')
                .then((data) => {
                  this.fruits = data.data;

                });
      }
    }
  };
</script>

