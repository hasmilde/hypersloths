'use strict';

var moneysend = require('mastercard-moneysend');
var MasterCardAPI = moneysend.MasterCardAPI;

var mastercardAPIProperties = require('./../resources/mastercardAPI-properties.json');
var consumerKey = mastercardAPIProperties.consumerKey;   // You should copy this from "My Keys" on your project page e.g. UTfbhDCSeNYvJpLL5l028sWL9it739PYh6LU5lZja15xcRpY!fd209e6c579dc9d7be52da93d35ae6b6c167c174690b72fa
var keyStorePath = mastercardAPIProperties.keystorePath; // e.g. /Users/yourname/project/sandbox.p12 | C:\Users\yourname\project\sandbox.p12
var keyAlias =  mastercardAPIProperties.keyAlias;   // For production: change this to the key alias you chose when you created your production key
var keyPassword = mastercardAPIProperties.keyPassword;   // For production: change this to the key alias you chose when you created your production key

// You only need to do initialize MasterCardAPI once
// For production use pass sandbox: false



function getAuthentication(){
  return new MasterCardAPI.OAuth(consumerKey, keyStorePath, keyAlias, keyPassword);
}


function initializeAPI(){
  MasterCardAPI.init({
    sandbox: true,
    authentication: getAuthentication()
  });
}



var createFunding = function(req,resp){

console.log('');
console.log('start with createFunding');

initializeAPI();

moneysend.Funding.create(req
, function (error, data) {
    if (error) {
        console.error("An error occurred");
        console.error(error);
        resp(error);
    }
    else {
        console.log(data.Transfer.RequestId);     //Output-->1199008
        console.log(data.Transfer.TransactionReference);     //Output-->1122058832510050082
        console.log(data.Transfer.TransactionHistory.Transaction.Type);     //Output-->FUNDING
        console.log(data.Transfer.TransactionHistory.Transaction.SystemTraceAuditNumber);     //Output-->007512
        console.log(data.Transfer.TransactionHistory.Transaction.NetworkReferenceNumber);     //Output-->313286843
        console.log(data.Transfer.TransactionHistory.Transaction.SettlementDate);     //Output-->0105
        console.log(data.Transfer.TransactionHistory.Transaction.Response.Code);     //Output-->00
        console.log(data.Transfer.TransactionHistory.Transaction.Response.Description);     //Output-->Approved or completed successfully
        console.log(data.Transfer.TransactionHistory.Transaction.SubmitDateTime);     //Output-->2016-01-04T18:12:40Z
        resp(null,data);
    }
});
}

module.exports = createFunding;

