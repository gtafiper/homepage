<template>
<div id="app">
        <v-app>
            <v-content>
                <v-container fluid>
                    <!-- fluid === full width design -->
                    <v-row id="header">
                        <v-col cols="12" sm="2" id="logo">
                            <div><img src="../assets/logo.png" height="45" width="56" alt="">
                            </div>
                        </v-col>
                        <v-col cols="12" sm="8" id="menu">
                                <div class="text-center">
                                        <v-menu offset-y>
                                          <template v-slot:activator="{ on }">
                                            <v-btn
                                              color="primary"
                                              dark
                                              v-on="on"
                                            >
                                              Fruit Overview
                                            </v-btn>
                                          </template>
                                          <v-list>
                                            <v-list-item
                                              v-for="(item, index) in items1"
                                              :key="index"
                                            >
                                              <v-list-item-title>{{ item.title }}</v-list-item-title>
                                            </v-list-item>
                                          </v-list>
                                        </v-menu>
                                      </div>
                        </v-col>
                        <v-col cols="12" md="2" id="cart">
                            <v-badge overlap left color="yellow accent-4">
                            <template v-slot:badge v-if="messages > 0">{{ messages}}

                            </template>
                            <v-btn>
                                <v-icon left>
                                    shopping_cart
                            </v-icon>
                            <span>Cart</span>
                            </v-btn>
                        </v-badge>
                        </v-col>
                    </v-row>

                    <!--Carousel-->

                    <v-row>
                        <v-carousel cycle>
                            <v-carousel-item v-for="(item,i) in items" :key="i" :src="item.src"
                                reverse-transition="fade-transition" transition="fade-transition"></v-carousel-item>
                        </v-carousel>
                    </v-row>


                    <!--Section with products below this-->



                    <v-row id="main" :style="{'background-image': 'url(' + require('@/assets/background.png') + ')'}">
                        <v-col id="products">
                            <!--<v-card class="my-5 mx-auto" max-width="350">
                                <a href="productpage.html">
                                    <v-img class="white--text" height="350px"
                                        src="http://lacasanelverde.it/images/placeholder-350x350.jpg">
                                        <v-card-title class="align-end fill-height">Dragon Fruit
                                        </v-card-title>
                                    </v-img>
                                </a>

                                <v-card-actions>
                                    <v-btn text color="orange" class="mx-1" @click="messages++">
                                        Add to cart
                                    </v-btn>
                                    <v-btn text >
                                        <a id="tt1" href="productpage.html">View product</a>
                                    </v-btn>
                                </v-card-actions>
                            </v-card>
                            <v-card class="my-5 mx-auto" max-width="350">
                                <a id="tt1" href="productpage.html">
                                    <v-img class="white--text" height="350px"
                                        src="http://lacasanelverde.it/images/placeholder-350x350.jpg">
                                        <v-card-title class="align-end fill-height"> Kumquat
                                        </v-card-title>
                                    </v-img>
                                </a>

                                <v-card-actions>
                                    <v-btn text color="orange" class="mx-1" @click="messages++">
                                        Add to cart
                                    </v-btn>
                                    <v-btn text>
                                        <a id="tt1" href="productpage.html">View product</a>
                                    </v-btn>
                                </v-card-actions>
                            </v-card>-->
                            <v-card class="my-5 mx-auto" max-width="350" v-for="fruit in fruits" v-bind:key="fruit.id">
                                <a id="tt1" href="/ProductPage">
                                    <v-img class="white--text" height="350px"
                                        :src="fruit.imgUrl">
                                        <v-card-title class="align-end fill-height">{{fruit.name}}
                                        </v-card-title>
                                    </v-img>
                                </a>

                                <v-card-actions>
                                    <v-btn text color="orange" class="mx-1" @click="messages++">
                                        Add to cart
                                    </v-btn>
                                    <v-btn :to="{
                                        name: 'ProductPage',
                                         params: {
                                            id: fruit.id
                    }
                                                }">View Product</v-btn>
                                </v-card-actions>
                            </v-card>
                            <!--
                            <v-card class="my-5 mx-auto" max-width="350">
                                <a id="tt1" href="productpage.html">
                                    <v-img class="white--text" height="350px"
                                        src="http://lacasanelverde.it/images/placeholder-350x350.jpg">
                                        <v-card-title class="align-end fill-height">Rambutan
                                        </v-card-title>
                                    </v-img>
                                </a>

                                <v-card-actions>
                                    <v-btn text color="orange" class="mx-1" @click="messages++">
                                        Add to cart
                                    </v-btn>
                                    <v-btn text>
                                        <a id="tt1" href="productpage.html">View product</a>
                                    </v-btn>
                                </v-card-actions>
                            </v-card>
                            <v-card class="my-5 mx-auto" max-width="350">
                                <a id="tt1" href="productpage.html">
                                    <v-img class="white--text" height="350px"
                                        src="http://lacasanelverde.it/images/placeholder-350x350.jpg">
                                        <v-card-title class="align-end fill-height">Durian
                                        </v-card-title>
                                    </v-img>
                                </a>

                                <v-card-actions>
                                    <v-btn text color="orange" class="mx-1" @click="messages++">
                                        Add to cart
                                    </v-btn>
                                    <v-btn text>
                                        <a id="tt1" href="productpage.html">View product</a>
                                    </v-btn>
                                </v-card-actions>
                            </v-card>
                            <v-card class="my-5 mx-auto" max-width="350">
                                <a id="tt1" href="productpage.html">
                                    <v-img class="white--text" height="350px"
                                        src="http://lacasanelverde.it/images/placeholder-350x350.jpg">
                                        <v-card-title class="align-end fill-height">Guanabana
                                        </v-card-title>
                                    </v-img>
                                </a>

                                <v-card-actions>
                                    <v-btn text color="orange" class="mx-1" @click="messages++">
                                        Add to cart
                                    </v-btn>
                                    <v-btn text>
                                        <a id="tt1" href="productpage.html">View product</a>
                                    </v-btn>
                                </v-card-actions>
                            </v-card>-->

                        </v-col>
                    </v-row>


                    <!--Row below is our footer-->

                    <v-footer
                    color="primary lighten-1"
                    padless
                  >
                    <v-row
                      justify="center"
                      no-gutters
                    >
                      <v-btn
                        v-for="link in links"
                        :key="link"
                        color="white"
                        text
                        rounded
                        class="my-2"
                      >
                        {{ link }}
                      </v-btn>
                      <v-col
                        class="primary lighten-2 py-4 text-center white--text"
                        cols="12"
                      >
                        {{ new Date().getFullYear() }} — <medium>Deluxe Fruit</medium>
                      </v-col>
                    </v-row>
                  </v-footer>

                </v-container>
            </v-content>
        </v-app>
      </div>

</template>

//jrbrj

<script>
  import axios from 'axios';
  import slideOne from '../assets/slideone.png'
  import slideTwo from '../assets/slidetwo.png'
  import slideThree from '../assets/slidethree.png'
  import slideFrontpage from '../assets/frontpage.png'
  export default {
    mounted() {
      this.fetchProducts()
    },
    data () { return {
      fruits: [],
      items: [
        {
          src: slideFrontpage,
        },
        {
          src: slideOne,
        },
        {
          src: slideTwo,
        },
        {
          src: slideThree,
        },
      ],
      items1: [
        { title: 'Origin' },
        { title: 'Recipes' },
        { title: 'Nutrients' },
        { title: 'Allergens' },
      ],
              links: [
        'Home',
        'About Us',
        'Team',
        'Services',
        'Blog',
        'Contact Us',
      ],
    }},
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


<style>

</style>

