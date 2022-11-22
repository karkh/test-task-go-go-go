const nanoid = require('nanoid')

/**
 * create a Payment.
 * @constructor
 * @param {number} amount - payment amount.
 * @param {string} kind - payment kind.
 */
function Payment(amount, kind) {
  return {
    id: nanoid(30), // string
    amount,
    kind,
    createdAt: Date.now(), // date
  }
}


module.exports = Payment