<template>
    <div class ="row wrap">


        <v-card  v-for="fruit in fruits" v-bind:key="fruit.id"
            max-width="344"
            class="col-sm-4 ma-2"
            >
            <v-card-title>{{fruit.name}}</v-card-title>
            <v-card-text >

                amount: {{fruit.amount}}
                <br >
                DKK: {{fruit.price}}
                <br>
                Contains: {{fruit.contents}}
                <br>
                id: {{fruit.id}}

            </v-card-text>
            <v-card-actions>
                <v-btn :to="{
                    name: '/ProductsUpdate',
                    params: {
                    id: fruit.id
                    }
                }">View</v-btn>
                <v-btn v-on:click="DeleteById(fruit)" class="">Delete</v-btn>
            </v-card-actions>
        </v-card>

    </div>
</template>
¨
<script>
    import axios from 'axios';
    import restApi from '../../api/api'
    export default {
        mounted() {
            this.fetchProducts()
        },
        data: ()  => ({
          fruits  : []
        }),
        methods: {
            fetchProducts() {

                axios.get('http://fruitshop.azurewebsites.net/api/fruits')
                    .then((data) => {
                        this.fruits = data.data;

                    });
            },
            async DeleteById(fruit) {
                let result = await restApi.delete('/fruits/' + fruit.id)
                if (result.status !== 200) {
                    //wat
                } else {
                    this.fetchProducts()
                }
            }

        }
    };
</script>