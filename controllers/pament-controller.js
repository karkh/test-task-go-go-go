const express = require('express')
const Payments = require('../db-models/payment')
const paymentsKind = require('../data/payments-kind')
const { data } = require('../data/payments')

const app = express()

const response = (res, payload, status = 200, error = null) => {
  res.status = status
  res.json({
    error,
    result: payload,
  })
}

const create = (req, res) => {
  const {kind} = req.body
  const paymentAmount = paymentsKind[kind]

  if (!kind || !paymentAmount) {
    response(res, null, 400, 'wrong_or_miss_kind')
    return
  }

  const payment = new Payments(paymentAmount, kind)
  response(res, payment, 201)
}

const getPayment = (req, res) => {
  const {id} = req.params
  if (!id) {
    response(res, null, 'miss_payment_id', 400)
    return
  }

  const payment = data.find((element) => element.id === id)

  if (!payment) {
    response(res, null, 404, 'not_found' )
  } else {
    response(res, payment)
  }
}

app.post('/', create)
app.get('/:id', getPayment)

module.exports = app
