<template>
    <div class="hero">
        <!-- Desktop -->
        <div class="d-md-block d-none">
            <div class="row mt-4 ">
                <div class="col-md-6">
                        <div class="d-flex h-100 ">
                            <div class="justify-content-center align-self-center">
                                <h2><strong>Delicius Food Menu, </strong> <br> in your gadget!!</h2>
                                <p>let's immediately select and order your favorite food</p>
                                <a href="" class="btn btn-md btn-success "><b-icon-arrow-right></b-icon-arrow-right> Order</a>
                            </div>
                        </div>
                </div>
                <div  class="col-md-6">
                    <img src="../assets/images/hero.png" width="100%" srcset="">
                </div>
            </div>
        </div>
        
        <!-- Mobile -->
        <div class="row mt-4 d-sm-block d-md-none">            
            <div  class="col-md-6 mb-4">
                <img src="../assets/images/hero.png" width="100%" srcset="">
            </div>
            <div class="col-md-6">
                    <div class="d-flex h-100 ">
                        <div class="justify-content-center align-self-center">
                            <h2><strong>Delicius Food Menu, </strong> <br> in your gadget!!</h2>
                            <p>let's immediately select and order your favorite food</p>
                            <a href="" class="btn btn-md btn-success "><b-icon-arrow-right></b-icon-arrow-right> Order</a>
                        </div>
                    </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Hero'
}
</script>

<style>

</style>