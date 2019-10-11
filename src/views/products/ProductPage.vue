<template>
<div id="app">
    <v-app>
      <v-content>
        <v-container fluid>
          <!-- fluid === full width design -->
          <v-row id="header">
            <v-col cols="12" sm="2" id="logo">
                <div><img src="https://media.discordapp.net/attachments/617964163179872276/632108359541325834/logo.png" height="45" width="56" alt="">
                </div>
            </v-col>
            <v-col cols="12" sm="8" id="menu">
              <div class="text-center">
                <v-menu offset-y>
                  <template v-slot:activator="{ on }">
                    <v-btn color="primary" dark v-on="on">
                      Fruit Overview
                    </v-btn>
                  </template>
                  <v-list>
                    <v-list-item v-for="(item, index) in items1" :key="index" @click="">
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
                <v-btn :to="{name: 'Cart'}">
                  <v-icon left>
                    shopping_cart
                  </v-icon>
                  <span>Cart</span>
                </v-btn>
              </v-badge>
            </v-col>
          </v-row>




          <v-row id="main-p1">

            <v-card class="my-5" height="450px">

              <v-img height="450px" width="450px" :src="fruits.imgUrl">



              </v-img>

            </v-card>

            <v-card id="card1" class="my-5 white lighten-1 black--text" height="450px" width="450px">
              <v-card-title>
                <span class="display-1">{{fruits.name}}</span>
              </v-card-title>
              <v-card-text id="cardText">

                <li class="mt-18 mb-2">
                  <span class=" headline font-weight-medium black--text">
                    <p id="priceone">$ {{fruits.price}}</p> </span>
                </li>

                <v-card id="card_text" height="300px" width="450px" class="mb-max white lighten-1 black--text" flat>
                  <span>
                    <p>
                   {{fruits.contents}}
                  </p>
                  </span>

                  <div id="buy-btn">
                      <v-btn min-width="300px" class="yellow accent-4" @click="messages++">
                        <span>
                          Add to cart
                        </span>
                      </v-btn>
                    </div>
                </v-card>
              </v-card-text>

            </v-card>
          </v-row>

          <v-footer color="primary lighten-1" padless>
            <v-row justify="center" no-gutters>
              <v-btn v-for="link in links" :key="link" color="white" text rounded class="my-2">
                {{ link }}
              </v-btn>
              <v-col class="primary lighten-2 py-4 text-center white--text" cols="12">
                {{ new Date().getFullYear() }} — <medium>Deluxe Fruit</medium>
              </v-col>
            </v-row>
          </v-footer>

        </v-container>
      </v-content>
    </v-app>
    </div>
</template>

<script>
  import restApi from '../../api/api'

  export default {
    mounted() {
      const  { id } = this.$route.params;
      this.fetchProduct(id);
    },
    data: () => ({
      fruits: {},
      messages: 0,

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
    }),


 

    methods: {

      fetchProduct(id) {

        restApi.get('/fruits/' + id)
                .then((data) => {
                  this.fruits = data.data;
                })
      }


    }
  };
</script>


<style>
@import url('https://fonts.googleapis.com/css?family=Bad+Script&display=swap');
@import url('https://fonts.googleapis.com/css?family=Libre+Baskerville&display=swap');
@import url('https://fonts.googleapis.com/css?family=Muli&display=swap');


.container {
    padding: 0 !important;
}
#header{
    display: flex !important;
    justify-content: center!important;
    align-items: center !important;
    background-color: #ff5c8d !important;
}

#logo, #menu, #cart{
    display:flex !important;
    justify-content: center !important;
    align-items: center !important;
}

#main-p1 {
    display: flex !important;
    justify-content: center !important;
    background-color: blanchedalmond !important;
}

#productCont {
    display: flex !important;
    flex-flow: row wrap !important;
    justify-content: space-around !important;
    align-items: center !important;
    width: 1400px !important;
    margin: 0 auto 0 auto !important;
    background-color: whitesmoke !important;
}

#tt1 {
    text-decoration: none;
    color: #FF9800;
}

#card1{
    justify-content: center !important; 
}

#cardText li{
    list-style-type: none !important;
}

#card_text p1 {
    font-style: italic !important;
    font-size: 14px !important;
}

#card_text p{
    font-family: 'Muli', sans-serif !important;
    font-size: 18px !important;
}
#buy-btn {
    display: flex !important;
    justify-content: center !important;
    bottom: 0;
    position: absolute;
    margin-left: 59px;
}

#footer{
    height:100px !important;
    display: flex !important;
    background-color: blueviolet !important;
    width: 100% !important;
}

#about, #logo, #social{
    display:flex !important;
    justify-content: center !important;
    align-items: center !important;
}
#cardText {
    text-align: left
}
</style>