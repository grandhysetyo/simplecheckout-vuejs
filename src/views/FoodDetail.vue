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
               <img v-if="product.gambar" :src="imageUrl(product.gambar)" width="100%" class="img-fluid shadows" />          
                
            </div>
            <div class="col-md-6">
                <h2>{{ product.nama }}</h2>
                <h4>Harga: <strong>Rp. {{ product.harga }}</strong></h4>
                <form class="mt-3" v-on:submit.prevent="">
                    <div class="form-group">
                        <label for="qty-order">Qty</label>
                        <input type="number" class="form-control" v-model="pesanan.qty">
                    </div>
                    <div class="form-group">
                        <label for="notes">Notes</label>
                        <textarea class="form-control" placeholder="ex. Nasi Pedes Bangett.." v-model="pesanan.notes"></textarea>
                    </div>
                    <button type="submit" class="btn btn-success" @click="handlePesanan"><b-icon-cart></b-icon-cart> Add to cart</button>
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
            product: [],
            pesanan: {}
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
                // this.product.gambar = this.imageUrl(response.data.gambar)
            })
            .catch((error) => {
                // handle error
                console.log(error);
            }) 
        },
        handlePesanan(){
            if(this.pesanan.qty) {
                this.pesanan.product = this.product
                axios.post('http://localhost:3000/keranjang', this.pesanan).then(() => {
                    // handle success
                    console.log('Success')
                    this.$toast.success('Berhasil menambahkan keranjang', {
                        type: 'success',
                        position: 'top-right',
                        duration: 3000,
                        dismissible: false
                    })
                    this.$router.push({path: "/cart" })
                })
                .catch((error) => {
                    // handle error
                    console.log(error);
                })
            }else {
                this.$toast.success('Qty pesanan harus diisi!', {
                        type: 'error',
                        position: 'top-right',
                        duration: 3000,
                        dismissible: false
                    })
            }
        }           
    },
    mounted() {
        this.setProduct();
    }
}
</script>

<style>

</style>