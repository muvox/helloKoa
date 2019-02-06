const Plan = require('../models/plan')
const axios = require('axios')
const stripe = require('stripe')('SK_TEST_APIKEY')

async function findAll (ctx) {
  const plans = await Plan.find({})
  console.log(plans)
  console.log(typeof plans)
  ctx.body = plans
}

async function create (ctx) {
  const newPlan = new Plan(ctx.request.body)
  const savedPlan = await newPlan.save()
  ctx.body = savedPlan
}

async function destroy (ctx) {
  const id = ctx.params.id
  const plan = await Plan.findById(id)

  const deletePlan = await plan.remove()
  ctx.body = deletedPlan
}

async function stripePlans (ctx) {
  const plans = await stripe.plans.list( {limit: 3})
  const returnPlans = []
  const array = plans.data

  for(var i = 0; i < array.length; i++){
    const obj = array[i]

    const dtoPlan = {
      description: obj.nickname,
      length: obj.interval_count,
      price: obj.amount
    }

    const newPlan = new Plan(dtoPlan)

    console.log(newPlan)

    returnPlans.push(newPlan)


  }
  console.log(typeof returnPlans)
  console.log(returnPlans)
  ctx.body = returnPlans
}

// async function findSubs (ctx) {
//   const headers = {
//         'Authorization': 'Bearer sk_test_lZ7JO4FsjEsp2JjeUiK1iScz'
//       }
//   console.log('Alotetaan axios kutsu')
//    return axios.get('https://api.stripe.com/v1/plans',{headers:headers})
//     .then(response => {
//       const plans = response.data
//       //TODO: convert response data into plan objects and save to database
//       // console.log(plans) will show you se full response from stripe api
//
//         console.log(plans)
//
//       //return plans <- ei toimi kun pitää kääntää Plan modelin mukaisiksi olioiks
//     })
// }
// async function update (ctx) {
//   const id = ctx.params.id
//   const plan = await Plan.findById(id)
//   plan.done = !plan.done
  // const updatePlan = await plan.save()
  // ctx.body = updatePlan
// }

module.exports = {
  findAll,
  create,
  destroy,
  // findSubs,
  stripePlans
}
