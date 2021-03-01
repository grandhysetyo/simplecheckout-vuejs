<template>
    <div class="container">
        <div class="row mt-5">
            <div class="col">
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item">
                            <router-link class="text-dark" to="/">Home</router-link>
                        </li>
                        <li class="breadcrumb-item">
                            <router-link class="text-dark" to="/foods">Foods</router-link>
                        </li>
                        <li class="breadcrumb-item active" aria-current="page">Cart</li>
                    </ol>
                </nav>
            </div>
        </div>

        <div class="row">
            <div class="col">
                <h2>My <strong>Cart</strong></h2>
                <div class="table-responsive mt-3 ">
                    <table class="table">
                    <thead>
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">Image</th>
                        <th scope="col">Foods</th>
                        <th scope="col">Notes</th>
                        <th scope="col">Qty</th>
                        <th scope="col" align="right">Price</th>                        
                        <th scope="col" align="right">Total Price</th>
                        <th scope="col">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(item,index) in keranjang" :key="item.id">
                            <td>{{ index }}</td>
                            <td><img :src="imageUrl(item.product.gambar)" alt="" class="img-fluid shadows" width="100"></td>
                            <td>{{ item.product.nama }}</td>
                            <td>{{ item.notes ? item.notes : "-" }}</td>
                            <td>{{ item.qty }}</td>
                            <td>Rp. {{ item.product.harga }}</td>
                            <td>Rp. {{ item.product.harga*item.qty }}</td>
                            <td class="text-danger">
                                <b-icon-trash @click="deleteKeranjang(item.id)"></b-icon-trash>
                            </td>
                        </tr>
                        <tr>
                            <td colspan="6" align="right">Total: </td>
                            <td>Rp. {{ totalHarga }}</td>
                            <td></td>
                        </tr>                       
                    </tbody>
                    </table>
                </div>
            </div>
        </div>
        <div class="row justify-content-end">
            <div class="col-md-4">
                <form class="mt-3" v-on:submit.prevent>
                    <div class="form-group">
                        <label for="name">Name</label>
                        <input type="text" class="form-control" v-model="pesans.name">
                    </div>
                    <div class="form-group">
                        <label for="address">Address</label>
                        <textarea class="form-control" placeholder="ex. Jl. Gurami RT/04/01" v-model="pesans.address"></textarea>
                    </div>
                    <button type="submit" class="btn btn-success float-right" @click="handleCheckout"> Checkout <b-icon-arrow-bar-right></b-icon-arrow-bar-right></button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'Cart',
    data() {
        return {
            keranjang: [],
            pesans: {}
        }
    },    

    mounted() {
        this.setKeranjangs()
    },
    methods: {
        imageUrl(name) {
            return require('../assets/images/' + name)
        },
        setKeranjangs(){
            axios.get('http://localhost:3000/keranjang').then((response) => {
                // handle success                
                this.keranjang = response.data                                
                //console.log(response.data);
            })
            .catch((error) => {
                // handle error
                console.log(error);
            }) 
        },
        deleteKeranjang(id){
            axios.delete('http://localhost:3000/keranjang/'+id).then(() => {
                // handle success                                                
                this.$toast.success('1 Item terhapus', {
                        type: 'error',
                        position: 'top-right',
                        duration: 3000,
                        dismissible: false
                })
                this.setKeranjangs()
            })
            .catch((error) => {
                // handle error
                console.log(error);
            }) 
        },
        handleCheckout(){
            console.log(this.totalHarga)
            if(this.pesans.name && this.pesans.address) {                
                this.pesans.total = this.totalHarga
                this.pesans.keranjang = this.keranjang
                console.log(this.pesans)
                axios.post('http://localhost:3000/pesanan', this.pesans).then(() => {
                    // handle success 
                    // delete all data keranjang
                    this.keranjang.map(function(item){
                        return axios.delete('http://localhost:3000/keranjang/'+item.id)
                        .catch((error) => {                            
                            console.log(error);
                        })  
                    })
                                                                 
                    this.$toast.success('Success order your foods', {
                            type: 'success',
                            position: 'top-right',
                            duration: 3000,
                            dismissible: false
                    })
                    this.$router.push({ path:'/success-order' })
                    
                })
                .catch((error) => {
                    // handle error
                    console.log(error);
                }) 
            }
            else{
                this.$toast.success('Name and address must be filled', {
                        type: 'error',
                        position: 'top-right',
                        duration: 3000,
                        dismissible: false
                })
            }
        }
    },
    computed:{
        totalHarga(){
            return this.keranjang.reduce(function(item, data){
                return item + data.product.harga*data.qty
            }, 0)
        }        
    }
}
</script>

<style>

</style>