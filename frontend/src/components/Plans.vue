<template>
  <section class="page-plans">
    <h1> Plans page </h1>
    <p class="loading" v-if="loading">loading gif</p>
    <div class="container">
    <article class="card" v-for="plan in plans" :key="plan.id">
      <h2>{{plan.description}}</h2>
      <span>{{plan.price}}€</span>
</article>
</div>
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
.container {
  padding: 2px 16px;
}
.card {
  max-width: 500px;
  border: 1px solid grey;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  margin-top: 5px;
}
.card:hover{
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}

</style>
