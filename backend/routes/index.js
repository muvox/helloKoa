module.exports = (router) => {
  router.prefix('/v1')
  router.use('/plans', require('./plans'))
}
