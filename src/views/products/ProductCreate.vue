<template>
    <div>
        <v-form v-model="valid">
            <v-container>

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
                                label="how many in one order"
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
                                label="Price in DKK"
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
                                required
                        ></v-text-field>
                    </v-col>
                </v-row>

            </v-container>
        </v-form>
        <v-btn @click="gobak()">gå tilbage</v-btn>
        <v-btn @click="buttonPost" class="float-left">Submit</v-btn>
    </div>
</template>

<script>
    import restApi from '../../api/api'
    import router from "../../router";
    export default {
        mounted() {

        },
        data: () => ({
            fruits: {
                name: '',
                amount: '',
                price: 0,
                contents: '',
                imgUrl: '',


            }


        }),
        methods: {
            buttonPost() {
                restApi.post('/fruits', {
                    name: this.fruits.name,
                    amount: this.fruits.amount,
                    price: this.fruits.price,
                    contents: this.fruits.contents,
                    imgUrl: this.fruits.imgUrl,

                })
            },

            gobak(){
                router.go(-1)
            }

        }

    };

</script>