<template>
  <div id="app">
    <v-app>
      <v-content>
        <v-container fluid>
          <!-- fluid === full width design -->
          <v-row id="header">
            <v-col cols="12" sm="2" id="logo">
              <div>
                <img src="https://media.discordapp.net/attachments/617964163179872276/632108359541325834/logo.png" height="45" width="56" alt />
              </div>
            </v-col>
            <v-col cols="12" sm="8" id="menu">
              <div class="text-center">
                <v-menu offset-y>
                  <template v-slot:activator="{ on }">
                    <v-btn color="primary" dark v-on="on">Fruit Overview</v-btn>
                  </template>
                  <v-list>
                    <v-list-item v-for="(item, index) in items1" :key="index" @click>
                      <v-list-item-title>{{ item.title }}</v-list-item-title>
                    </v-list-item>
                  </v-list>
                </v-menu>
              </div>
            </v-col>
            <v-col cols="12" md="2" id="cart">
              <v-badge overlap left color="yellow accent-4">
                <template v-slot:badge v-if="messages > 0">{{ messages}}</template>
                <v-btn>
                  <v-icon left>shopping_cart</v-icon>
                  <span>Cart</span>
                </v-btn>
              </v-badge>
            </v-col>
          </v-row>
          <!-- Table -->

          <v-simple-table id="table" height="600px" width="600px">
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-center">Product</th>
                  <th class="text-center">Price</th>
                  <th class="text-center">Quantity</th>
                  <th class="text-center">Total</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in Fruits" :key="item.name">
                  <td>{{ item.items }}</td>
                  <td> {{ item.price }}</td>
                  <td>{{ item.quantity }}</td>
                  <td>$ {{ item.total }}</td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
          <!-- Checkout etc -->
          <div id="box-box-holder">
              <v-spacer></v-spacer>
          <div class="box">
            <v-btn id="shop" color="warning" dark>Continue Shopping</v-btn>
          </div>
          <div class="box">
            <v-btn id="checkout" color="warning" dark>Checkout</v-btn>
          </div>
</div>
          <!-- Footer -->

          <v-footer color="primary lighten-1" padless>
            <v-row justify="center" no-gutters>
              <v-btn
                v-for="link in links"
                :key="link"
                color="white"
                text
                rounded
                class="my-2"
              >{{ link }}</v-btn>
              <v-col class="primary lighten-2 py-4 text-center white--text" cols="12">
                {{ new Date().getFullYear() }} —
                <medium>Deluxe Fruit</medium>
              </v-col>
            </v-row>
          </v-footer>
        </v-container>
      </v-content>
    </v-app>
  </div>
</template>

<script>
import axios from "axios";

export default {
  mounted() {
    this.fetchProducts();
  },
  data: () => ({
    fruits: [],

    items1: [
      { title: "Origin" },
      { title: "Recipes" },
      { title: "Nutrients" },
      { title: "Allergens" }
    ],
    links: ["Home", "About Us", "Team", "Services", "Blog", "Contact Us"],
    Fruits: [
      {
        items: "Dragon Fruit",
        price: "$ " +20,
        quantity: 5,
        total: 100
      },
      {
        items: "Star Fruit",
        price: "$ " + 11,
        quantity: 5,
        total: 55
      },
      {
        items: "Durian",
        price: "$ " +  41,
        quantity: 3,
        total: 123
      },
      {
        items: "Kumquat",
        price: "$ " + 15,
        quantity: 5,
        total: 100
      },
      {
        items: "Rambutan",
        price: "$ " + 6,
        quantity: 10,
        total: 60
      },
      {
        items: "Guanabana",
        price: "$ " + 375,
        quantity: 5,
        total: 1.875
      },
      {
        items: "Kumquat",
        price: "$ " + 15,
        quantity: 6,
        total: 90
      },
      {
        items: "Durian",
        price: "$ " + 41,
        quantity: 2,
        total: 82
      },
          {
        items: "Durian",
        price: "$ " + 15,
        quantity: 2,
        total: 30
      },
          {
        items: "Durian",
        price: "$ " + 41,
        quantity: 2,
        total: 82
      },
                {
        total: 2597
      },
    ]
  }),
  methods: {
    fetchProducts() {
      axios.get("http://fruitshop.azurewebsites.net/api/fruits").then(data => {
        this.fruits = data.data;
      });
    }
  }
};
</script>

<style>
.container {
  padding: 0 !important;
}
#box-box-holder {
    display: flex;

}
#header {
  display: flex !important;
  justify-content: center !important;
  align-items: center !important;
  background-color: #ff5c8d !important;
}

#logo,
#menu,
#cart {
  display: flex !important;
  justify-content: center !important;
  align-items: center !important;
}

#table {
  justify-content: center;
}

.box{
    margin: 15px;
    margin-bottom: 50px;
    display:
}

#shop, #checkout{
    width: 300px;
    flex-flow: row wrap !important;

}



#footer {
  height: 100px !important;
  display: flex !important;
  background-color: blueviolet !important;
  width: 100% !important;
}

#about,
#logo,
#social {
  display: flex !important;
  justify-content: center !important;
  align-items: center !important;
}
</style>
