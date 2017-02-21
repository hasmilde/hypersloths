'use strict';

const lostStolenService = require('./serviceInvokers/LostStolenService');
const moneysendService = require('./serviceInvokers/MoneysendService');

// Inquire if an account has been stolen
function performSecurityChecks(body) {
  const requestData = {
    AccountInquiry: {
      AccountNumber: body.FundingRequestV3.FundingCard.AccountNumber
    }
  }

  return lostStolenService.accountInquiry(requestData);
}

// Screen the sanction
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

  return moneysendService.screenSanctions(requestData);
}

// Save the transaction in the blockchain
function saveTransactionInBlockChain(body) {
  // TODO: koppeling met Jerre zijn BlockChainCode
  console.log('should now be saved in the blockchain');
}

// Start the transaction
function startTransaction(body) {
  // Investigate if we still need this abstraction function
  return moneysendService.createPayment(body);
}

const payment = {
  payment(req, res) {
    console.log('Starting the payment process');

    const body = req.body;

    performSecurityChecks(body)
      .then((data) => {
        console.log('lostStolenService.accountInquiry response:');
        console.log(data);
      })
      .catch((error) => {
        console.log('lostStolenService.accountInquiry error:');
        console.log(error);
      });

    screenSanction(body)
      .then((data) => {
        console.log('moneysendService.screenSanctions response:')
        console.log(data);
      })
      .catch((error) => {
        console.log('moneysendService.screenSanctions error:');
        console.log(error);
      });

    // TODO: Use async library to call the below methods after all checks have been done
    saveTransactionInBlockChain(body);

    startTransaction(body)
      .then((data) => {
        console.log('moneysendService.createPayment response:');
        console.log(data);

        res.status(200);
        res.json(data);
      })
      .catch((error) => {
        console.log('moneysendService.createPayment error:');
        console.log(error);

        res.status(500);
        res.json(error);
      });
  }
};

module.exports = payment;
