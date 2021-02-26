<template>
    <div class="card shadow card-product">
        <img class="card-img-top" :src="image" alt="Card image cap">
        <div class="card-body">
            <h5 class="card-title">{{ item.nama }}</h5>
            <p class="card-text">Harga : Rp. {{item.harga}}</p>
            <a href="#" class="btn btn-success"><b-icon-cart></b-icon-cart> Order</a>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CardProduct',
    props: ['item'],
    computed: {
        image: function(){
            return require('../assets/images/' + this.item.gambar)
        }
    }
}
</script>

<style>

</style>