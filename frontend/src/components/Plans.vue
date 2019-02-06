<template>
  <section class="page-plans">
    <h1> Plans page </h1>
    <p class="loading" v-if="loading">loading gif</p>
    <article v-for="plan in plans" :key="plan.id">
      <h2>{{plan.description}}</h2>
      <span>{{plan.price}}€</span>
</article>
</section>
</template>
<script>

import StripeApi from '@/services/api/StripeApi'

export default {
  name: "Plans",
  data() {
    return {
      loading: true,
      plans:[]
    }
  },
  created() {
    StripeApi.getPlans()
    .then(plans => {
      this.plans = plans
    })
    /* eslint-disable no-console */
    .catch(error => console.log(error))
        /* eslint-enable no-console */
    .finally(() => {
      this.loading = false
    })
  }
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
