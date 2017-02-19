'use strict';


const stolenService = require('./../../../src/server/mastercard/serviceInvokers/StolenResource');
const paymentService = require('./../../../src/server/mastercard/serviceInvokers/PaymentResource');
const sanctionScreeningService = require('./../../../src/server/mastercard/serviceInvokers/SanctionScreeningResource');



function performSecurityChecks(req){
  // TODO: perform check to stolenService
  // TODO: perform check to sanctionScreeningService

  console.log('should have perfomed some security checks.')
}

function saveTransactionInBlockChain(req){
  // TODO: koppeling met Jerre zijn BlockChainCode
  console.log('should now be saved in the blockchain');
}

function startTransaction(req){
  paymentService(req, function(error, data){
    // TODO: errorhandling.
    console.log('should have performed a payment.')
  });
}

const payment = {
  payment(req, res) {
    console.log('started with the payment process.')

    performSecurityChecks(req);
    saveTransactionInBlockChain(req);
    startTransaction(req);

    res.send('First Response');
  }
};

module.exports = payment;
