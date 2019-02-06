const Koa = require('koa')
const Router = require('koa-router')
const Logger = require('koa-logger')
const Cors = require('@koa/cors')
const BodyParser = require('koa-bodyparser')
const Helmet = require('koa-helmet')
const respond = require('koa-respond')
const mongoose = require('mongoose')
const Plan = require('./models/plan')


const app = new Koa()
const router = new Router()



function testi(){
  console.log('toimiiko')
  const testiPlani = {
      'description' : 'testiplaania',
      'length' : 199,
      'price' : 2099
  }

  const newPlan = new Plan(testiPlani)
  const savedPlan = newPlan.save()
}

testi();

app.use(Helmet())

if (process.env.NODE_ENV === 'development') {
  app.use(Logger())
}

app.use(Cors())
app.use(BodyParser({
  enableTypes: ['json'],
  jsonLimit: '5mb',
  strict: true,
  onerror: function (err, ctx) {
    ctx.throw('body parse error', 422)
  }
}))





app.use(respond())

// API routes
require('./routes')(router)
app.use(router.routes())
app.use(router.allowedMethods())

mongoose.connect('mongodb://super2:korkki12@ds253284.mlab.com:53284/testikoa')

module.exports = app
