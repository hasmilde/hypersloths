var moneysend = require('mastercard-moneysend');
var MasterCardAPI = moneysend.MasterCardAPI;

var mastercardAPIProperties = require('./mastercardAPI-properties.json')
var consumerKey = mastercardAPIProperties.consumerKey;   // You should copy this from "My Keys" on your project page e.g. UTfbhDCSeNYvJpLL5l028sWL9it739PYh6LU5lZja15xcRpY!fd209e6c579dc9d7be52da93d35ae6b6c167c174690b72fa
var keyStorePath = mastercardAPIProperties.keystorePath; // e.g. /Users/yourname/project/sandbox.p12 | C:\Users\yourname\project\sandbox.p12
var keyAlias =  mastercardAPIProperties.keyAlias;   // For production: change this to the key alias you chose when you created your production key
var keyPassword = mastercardAPIProperties.keyPassword;   // For production: change this to the key alias you chose when you created your production key

// You only need to do initialize MasterCardAPI once
// For production use pass sandbox: false
var authentication = new MasterCardAPI.OAuth(consumerKey, keyStorePath, keyAlias, keyPassword);
MasterCardAPI.init({
    sandbox: true,
    authentication: authentication
});

var requestData = {
  "FundingRequestV3": {
    "LocalDate": "0817",
    "LocalTime": "145547",
    "TransactionReference": "1112058832510050082",
    "FundingCard": {
      "AccountNumber": "5184680470000023",
      "ExpiryMonth": "11",
      "ExpiryYear": "2017"
    },
    "FundingUCAF": "5400984MTFTESTUCAFAAV9999999",
    "FundingMasterCardAssignedId": "400984",
    "FundingAmount": {
      "Value": "555",
      "Currency": "840"
    },
    "ReceiverName": {
      "First": "Jose",
      "Middle": "B",
      "Last": "Lopez"
    },
    "ReceiverAddress": {
      "Line1": "Pueblo Street",
      "Line2": "PO BOX 12",
      "City": "El PASO",
      "CountrySubdivision": "TX",
      "Country": "USA"
    },
    "ReceiverPhone": "1800639426",
    "ReceivingAccountNumber": "5184680420000073",
    "ReceiverDateOfBirth": "06211977",
    "SenderName": {
      "First": "Test",
      "Middle": "T",
      "Last": "Test"
    },
    "SenderDateOfBirth": "08061977",
    "SenderAddress": {
      "Line1": "123 Main Street",
      "Line2": "5A",
      "City": "Arlington",
      "CountrySubdivision": "VA",
      "PostalCode": "22207",
      "Country": "USA"
    },
    "SenderPhoneNumber": "7031234567",
    "AdditionalMessage": "Test",
    "LanguageData": "Test",
    "LanguageIdentification": "Tes",
    "ParticipationID": "Test",
    "Channel": "W",
    "UCAFSupport": "true",
    "ICA": "009674",
    "ProcessorId": "9000000442",
    "RoutingAndTransitNumber": "990442082",
    "CardAcceptor": {
      "Name": "THE BEST BANK",
      "City": "ANYTOWN",
      "State": "MO",
      "Country": "USA"
    },
    "TransactionDesc": "GDB",
    "MerchantId": "12345"
  }
};

moneysend.Funding.create(requestData
, function (error, data) {
    if (error) {
        console.error("An error occurred");
        console.error(error);
    }
    else {
        console.log(data.Transfer.RequestId);     //Output-->1413210
        console.log(data.Transfer.TransactionReference);     //Output-->1112058832510050082
        console.log(data.Transfer.TransactionHistory.Transaction.Type);     //Output-->FUNDING
        console.log(data.Transfer.TransactionHistory.Transaction.SystemTraceAuditNumber);     //Output-->212837
        console.log(data.Transfer.TransactionHistory.Transaction.NetworkReferenceNumber);     //Output-->213721259
        console.log(data.Transfer.TransactionHistory.Transaction.SettlementDate);     //Output-->0818
        console.log(data.Transfer.TransactionHistory.Transaction.Response.Code);     //Output-->00
        console.log(data.Transfer.TransactionHistory.Transaction.Response.Description);     //Output-->Approved or completed successfully
        console.log(data.Transfer.TransactionHistory.Transaction.SubmitDateTime);     //Output-->2016-08-17T09:25:50Z
        
    }
});

