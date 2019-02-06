<template>
  <div class="base">
    <card class='stripe-card'
     :class='{complete}'
     stripe='pk_test_Ooes7vJbV2dJFlvJA37if7E2'
     :options='stripeOptions'
     @change='complete = $event.complete' />
    <button class='pay-with-stripe' @click='pay' :disabled='!complete'> Pay with credit card </button>
  </div>
</template>
<script>

import { Card, createToken } from 'vue-stripe-elements-plus'

export default {
  data() {
    return {
      complete: false,
      stripeOptions: {
        hidePostalCode: true,

      }
    }
  },
  name: 'Tyhja',
  methods: {
    pay() {
      /* eslint-disable no-console */
      console.log('Button pressed');

      createToken().then(data => console.log(data.token))
      /* eslint-enable no-console */
    },
  },
  props: {
    message: String
  },
  components: { Card },
}
</script>


<style>
.stripe-card {
  padding: 5px;
  width: 300px;
  border: 1px solid grey;
}
.stripe-card.complete {
  border-color: green;
}
.base {
  width: 500px;
  height: 200px;
  border-color: lightgray;
  border: 2px;
  border-radius: 4px;
}
</style>
