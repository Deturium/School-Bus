
const Koa = require('koa')
const Router = require('koa-router')
// const assert = require('assert')

const app = new Koa()
const router = new Router()


// api/v1/announcement
const announcement = require('./mock/announcement.js')

router.get('/api/v1/announcement', function (ctx, next) {
  ctx.body = announcement
  console.log("/announcement")
});


// api/v1/ranks
const ranks = require('./mock/ranks.js')

router.get('/api/v1/ranks', function (ctx, next) {
  ctx.body = ranks
  console.log("/ranks")
});

// api/v1/challenges
const challenges = require('./mock/challenges.js')

router.get('/api/v1/challenges', function (ctx, next) {
  ctx.body = challenges
  console.log("/challenges")
});


app
  .use(router.routes())
  .use(router.allowedMethods());
app.listen(3000);

console.log('Mock server start!')
