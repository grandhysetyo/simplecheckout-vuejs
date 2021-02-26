<template>
     <div class="container">
        <Hero> </Hero>
        <div class="row mt-4">
          <div class="col">
            <h2>Best <strong>Foods</strong></h2>
          </div>
          <div class="col">
            <router-link to="/foods" class="btn btn-success float-right"><b-icon-eye></b-icon-eye> See All</router-link>
          </div>
        </div>
        <div class="row mt-2">
          <div class="col-md-3 mt-4" v-for="item in product" :key="item.id">
            <CardProduct v-bind:item="item"> </CardProduct>
          </div>
        </div>
     </div>  
</template>

<script>
import axios from 'axios'
import Hero from '@/components/Hero.vue'
import CardProduct from '@/components/CardProduct.vue'

export default {
  name: 'Home',
  components: {   
    Hero,
    CardProduct
  },
  data() {
    return {
      product: []
    }
  },
  methods: {
    setBestProduct(data) {
      this.product = data
    }
  },
  mounted() {
    axios.get('http://localhost:3000/best-products').then((response) => {
      // handle success
      console.log(response);
      this.setBestProduct(response.data)
    })
    .catch( (error) => {
      // handle error
      console.log(error);
    })      
  }
}
</script>
