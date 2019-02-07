const Plan = require('../models/plan')
const axios = require('axios')
const stripe = require('stripe')('sk_test_lZ7JO4FsjEsp2JjeUiK1iScz')

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
  const plans = await stripe.plans.list( {limit: 5})
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
    const savedPlan = await newPlan.save()

    returnPlans.push(newPlan)


  }
  console.log(typeof returnPlans)
  console.log(returnPlans)
  ctx.body = returnPlans
}

module.exports = {
  findAll,
  create,
  destroy,
  // findSubs,
  stripePlans
}
