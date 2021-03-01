<template>        
    <b-navbar toggleable="lg" variant="light">
        <div class="container">
            <b-navbar-brand href="#">MamiFoods</b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav>
                    <li class="nav-item">                        
                            <router-link class="nav-link" to="/">Home</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" to="/foods">Foods</router-link>
                    </li>        
                </b-navbar-nav>

                <!-- Right aligned nav items -->
                <b-navbar-nav class="ml-auto">
                    <li class="nav-item">                        
                            <router-link class="nav-link" to="/cart"><b-icon-bag></b-icon-bag> <span class="badge badge-success">{{ updateKeranjang ? updateKeranjang.length : jumPesanan.length }}</span></router-link>
                    </li> 
                </b-navbar-nav>
            </b-collapse>
        </div>
    </b-navbar>
    
</template>

<script>
import axios from 'axios'

export default {
    name: "Navbar",
    props: ['updateKeranjang'],
    data(){
        return {
            jumPesanan: []
        }
    },
    methods: {
        setJumlah(){
            axios.get('http://localhost:3000/keranjang').then((response) => {
                // handle success
                console.log(response);
                this.jumPesanan = response.data
            })
            .catch((error) => {
                // handle error
                console.log(error);
            }) 
        }
    },
    mounted(){
        this.setJumlah()
    }
};
</script>

<style>
</style>