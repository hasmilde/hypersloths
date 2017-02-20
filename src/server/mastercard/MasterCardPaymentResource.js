'use strict';

const stolenService = require('./../../../src/server/mastercard/serviceInvokers/StolenResource');
const paymentService = require('./../../../src/server/mastercard/serviceInvokers/PaymentResource');
const fundingService = require('./../../../src/server/mastercard/serviceInvokers/FundingResource');
const sanctionScreeningService = require('./../../../src/server/mastercard/serviceInvokers/SanctionScreeningResource');

function performSecurityChecks(req, res) {
  // TODO: perform check to stolenService
  // TODO: perform check to sanctionScreeningService

  console.log('should have perfomed some security checks.');
}

function saveTransactionInBlockChain(req, res) {
  // TODO: koppeling met Jerre zijn BlockChainCode
  console.log('should now be saved in the blockchain');
}

function startTransaction(body) {
  return new Promise((resolve, reject) => {
    paymentService(body)
      .then(resolve)
      .catch(reject);
  });
}

const payment = {
  payment(req, res) {
    console.log('started with the payment process.');

    performSecurityChecks(req, res);
    saveTransactionInBlockChain(req, res);
    startTransaction(req.body)
      .then((data) => {
        console.log('sending response:');
        console.log(data);
        res.status(200);
        res.json(data);
      })
      .catch((error) => {
        res.status(500);
        res.json(error);
      });
  }
};

module.exports = payment;
