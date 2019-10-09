<template>
    <div>
        <v-form>
            <v-container>
                <v-col
                        cols="10"
                        md="5"
                >
                    <v-text-field
                            v-model="fruits.id"
                            label="id"
                            required
                    ></v-text-field>
                </v-col>

                <v-col
                        cols="10"
                        md="5"
                >
                    <v-text-field
                            v-model="fruits.name"
                            label="Name of fruit"
                            required
                    ></v-text-field>
                </v-col>

                <v-row>

                    <v-col
                            cols="10"
                            md="5"
                    >
                        <v-text-field
                                v-model="fruits.amount"
                                label="amount in one order"
                                required
                        ></v-text-field>
                    </v-col>
                </v-row>
                <v-row>

                    <v-col
                            cols="10"
                            md="5"
                    >
                        <v-text-field
                                v-model="fruits.price"
                                label="Price"
                                required
                        ></v-text-field>
                    </v-col>
                </v-row>
                <v-row>

                    <v-col
                            cols="10"
                            md="5"
                    >
                        <v-text-field
                                v-model="fruits.contents"
                                label="contains"
                                required
                        ></v-text-field>
                    </v-col>
                </v-row>
                <v-row>

                    <v-col
                            cols="10"
                            md="5"
                    >
                        <v-text-field
                                v-model="fruits.imgUrl"
                                label="imgUrl"

                        ></v-text-field>
                    </v-col>
                </v-row>


            </v-container>
        </v-form>
        <v-btn @click="goback()">gå tilbage</v-btn>
        <v-btn @click="updateFruits(fruits.id)" class="float-left">update</v-btn>


    </div>
</template>

<script>
    import restApi from '../../api/api'
    import router from "../../router";
    export default {
        mounted() {
            const { id } = this.$route.params;
            this.fetchProduct(id);
        },
        data: ()  => ({
            fruits: {},
        }),

        methods: {

            fetchProduct(id) {
                restApi.get('/fruits/' + id)
                    .then((data) => {
                        this.fruits = data.data;
                    });
            },
            updateFruits(id) {
                restApi.put('/fruits/'+id, {

                    id: this.fruits.id,
                    name: this.fruits.name,
                    price: this.fruits.price,
                    amount: this.fruits.amount,
                    contents: this.fruits.contents,
                    umgUrl: this.fruits.imgUrl


                })

            },
          goback(){
              router.go(-1)
          }

        }

    };
</script>