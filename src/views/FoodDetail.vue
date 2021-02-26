<template>
    <div class="container">
        <div class="row mt-5">
            <div class="col">
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item">
                            <router-link class="text-dark" to="/">Home</router-link>
                        </li>
                        <li class="breadcrumb-item" aria-current="page">
                            <router-link class="text-dark" to="/foods">Foods</router-link>
                        </li>
                        <li class="breadcrumb-item active" aria-current="page">Food Detail</li>
                    </ol>
                </nav>
            </div>
        </div>
        <div class="row mt-3">
            <div class="col-md-6">                
                <img :src="product.gambar" width="100%" class="img-fluid shadows">
            </div>
            <div class="col-md-6">
                <h2>{{ product.nama }}</h2>
                <h4>Harga: <strong>Rp. {{ product.harga }}</strong></h4>
                <form action="" class="mt-3">
                    <div class="form-group">
                        <label for="qty-order">Qty</label>
                        <input type="number" class="form-control">
                    </div>
                    <div class="form-group">
                        <label for="notes">Notes</label>
                        <textarea class="form-control" placeholder="ex. Nasi Pedes Bangett.."></textarea>
                    </div>
                    <button type="submit" class="btn btn-success"><b-icon-cart></b-icon-cart> Add to cart</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'


export default {
    name: 'FoodDetail',
    props: ['id'],
    data() {
        return {
            product: []
        }
    },
    computed: {
        
    },
    methods:{
        imageUrl(name) {
            return require('../assets/images/' + name)
        },
        setProduct(){
            axios.get('http://localhost:3000/products/'+this.id).then((response) => {
                // handle success
                console.log(response);
                this.product = response.data     
                this.product.gambar = this.imageUrl(response.data.gambar)
            })
            .catch((error) => {
                // handle error
                console.log(error);
            }) 
        }           
    },
    mounted() {
        this.setProduct()
    }
}
</script>

<style>

</style>