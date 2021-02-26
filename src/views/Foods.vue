<template>
    <div class="container">
        <div class="row mt-4">
            <div class="col">
                <h3>List <strong>Foods</strong></h3>
            </div>
        </div>
        <div class="row mt-3">
            <div class="col">
                <div class="input-group mb-3">
                    <input type="text" class="form-control" placeholder="Search your favorite foods"  v-model="search" v-on:keyup="searchFood">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="basic-addon1"><b-icon-search></b-icon-search></span>
                    </div>
                </div>
            </div>
        </div>
        <div class="row mb-3">
            <div class="col-md-3 mt-4" v-for="item in product" :key="item.id">
                <CardProduct v-bind:item="item"> </CardProduct>
            </div>
        </div>        
    </div>
</template>

<script>
import axios from 'axios'
import CardProduct from '@/components/CardProduct.vue'
export default {
    name: 'Foods',
    components: {       
        CardProduct
    },
    data() {
        return {
        product: [],
        search: ''
        }
    },
    methods: {
        setBestProduct(data) {
            this.product = data
        },
        searchFood(){
            axios.get('http://localhost:3000/products?q='+this.search).then((response) => {
                // handle success
                console.log(response);
                this.setBestProduct(response.data)
            })
            .catch((error) => {
                // handle error
                console.log(error);
            }) 
        }
    },
    mounted() {
        axios.get('http://localhost:3000/products').then((response) => {
            // handle success
            console.log(response);
            this.setBestProduct(response.data)
        })
        .catch((error) => {
            // handle error
            console.log(error);
        })      
    }
}
</script>

<style>

</style>