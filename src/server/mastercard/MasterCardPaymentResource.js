'use strict';

const stolenService = require('./../../../src/server/mastercard/serviceInvokers/StolenResource');
const paymentService = require('./../../../src/server/mastercard/serviceInvokers/PaymentResource');
const fundingService = require('./../../../src/server/mastercard/serviceInvokers/FundingResource');
const sanctionScreeningService = require('./../../../src/server/mastercard/serviceInvokers/SanctionScreeningResource');

function performSecurityChecks(body) {
  // TODO: perform check to stolenService
  // TODO: perform check to sanctionScreeningService
}

function screenSanction(body) {
  const requestData = {
    SanctionScoreServiceRequest: {
      TransactionReference: body.FundingRequestV3.TransactionReference,
      ICA: body.FundingRequestV3.ICA,
      FirstName: body.FundingRequestV3.ReceiverName.First,
      LastName: body.FundingRequestV3.ReceiverName.Last,
      Country: body.FundingRequestV3.FundingAmount.Currency
    }
  };

  return new Promise((resolve, reject) => {
    sanctionScreeningService(requestData)
      .then(resolve)
      .catch(reject);
  });
}

function saveTransactionInBlockChain(body) {
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

    const body = req.body;

    performSecurityChecks(body);

    screenSanction(body)
      .then((data) => {
        console.log(data);
        console.log('I am a teapot :)');
      })
      .catch((error) => {
        console.log(error);
        console.log('I am not a teapot :(');
      });

    saveTransactionInBlockChain(body);

    // TODO: Use async library to call this method after all checks have been done
    startTransaction(body)
      .then((data) => {
        console.log('sending good response:');
        console.log(data);
        res.status(200);
        res.json(data);
      })
      .catch((error) => {
        console.log('sending bad response');
        res.status(500);
        res.json(error);
      });
  }
};

module.exports = payment;
