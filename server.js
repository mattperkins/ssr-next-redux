const express = require('express')
const next = require('next')

const PORT = 3010
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare()
  .then(() => {
    const server = express()

    server.get('/page2', (req, res) => {
      return app.render(req, res, '/page2')
    })

    server.get('/lemon', (req, res) => {
      return app.render(req, res, '/lemon')
    })

    server.get('*', (req, res) => {
      return handle(req, res)
    })

    server.listen(PORT, (err) => {
      if (err) throw err
      console.log(`Running on ${PORT}`)
    })
  })
