<template>
  <div class="container">
      <div class="row justify-content-center mt-5">
          <div class="col text-center">
              <img :src="require(`@/assets/images/waiting.png`)" width="40%" />
              <h3>Success!!</h3>
              <h4>Your order will be <strong>processed immediately</strong>, <br>please wait for your order :)</h4>
          </div>
      </div>
      
  </div>
</template>

<script>
export default {
    name: 'SuccessCheckout'
}
</script>

<style>

</style>