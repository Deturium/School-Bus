const fs = require('fs')

const Koa = require('koa')
const Router = require('koa-router')
const serve = require('koa-static')
// const assert = require('assert')

const app = new Koa()
const router = new Router()


// api/v1/announcement
const announcement = require('./mock/announcement.js')

router.get('/api/v1/announcement/*', (ctx, next) => {
  ctx.body = announcement
})


// api/v1/ranks
const ranks = require('./mock/ranks.js')

router.get('/api/v1/ranks/*', (ctx, next) => {
  ctx.body = ranks
})

// api/v1/challenges
const challenges = require('./mock/challenges.js')

router.get('/api/v1/challenges', (ctx, next) => {
  ctx.body = challenges
})


// log request url
app.use(async (ctx, next) => {
  console.log(ctx.url)
  await next()
})


app
  .use(router.routes())
  .use(router.allowedMethods())
  .use(serve('./dist'))


// stupid redirect
app.use(async (ctx) => {
  ctx.response.type = 'text/html'
  ctx.body = fs.readFileSync('./dist/index.html')
})

app.listen(3000);

console.log('Mock server start!\n')
