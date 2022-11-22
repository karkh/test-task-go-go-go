const express = require('express')
const paymentController = require('./controllers/pament-controller')
const http = require('http')

const PORT = process.env.PORT || 8029
const app = express()
app.use(express.json({ limit: "1000MB" }))

app.use('/api/payment', paymentController)

const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`Server started at ${PORT} port`)
})