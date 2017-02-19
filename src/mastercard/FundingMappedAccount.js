var moneysend = require('mastercard-moneysend');
var MasterCardAPI = moneysend.MasterCardAPI;

var consumerKey = "your consumer key";   // You should copy this from "My Keys" on your project page e.g. UTfbhDCSeNYvJpLL5l028sWL9it739PYh6LU5lZja15xcRpY!fd209e6c579dc9d7be52da93d35ae6b6c167c174690b72fa
var keyStorePath = "path to your .p12 private key file"; // e.g. /Users/yourname/project/sandbox.p12 | C:\Users\yourname\project\sandbox.p12
var keyAlias = "keyalias";   // For production: change this to the key alias you chose when you created your production key
var keyPassword = "keystorepassword";   // For production: change this to the key alias you chose when you created your production key

// You only need to do initialize MasterCardAPI once
// For production use pass sandbox: false
var authentication = new MasterCardAPI.OAuth(consumerKey, keyStorePath, keyAlias, keyPassword);
MasterCardAPI.init({
    sandbox: true,
    authentication: authentication
});

var requestData = {
  "FundingRequestV3": {
    "LocalDate": "0612",
    "LocalTime": "161222",
    "TransactionReference": "1122058832510050082",
    "FundingMapped": {
      "SubscriberId": "CMV5304276531@mc.com",
      "SubscriberType": "EMAIL_ADDRESS",
      "SubscriberAlias": "Email Address Test"
    },
    "FundingUCAF": "MjBjaGFyYWN0ZXJqdW5rVUNBRjU\u003d1111",
    "FundingMasterCardAssignedId": "123456",
    "FundingAmount": {
      "Value": "470",
      "Currency": "840"
    },
    "ReceiverName": {
      "First": "Lopez",
      "Middle": "R",
      "Last": "Jose"
    },
    "ReceiverAddress": {
      "Line1": "Pueblo Street",
      "City": "El PASO",
      "CountrySubdivision": "TX",
      "PostalCode": "79906",
      "Country": "USA"
    },
    "ReceiverPhone": "1800639426",
    "ReceivingAccountNumber": "5184680420000073",
    "ReceiverDateOfBirth": "06061980",
    "SenderName": {
      "First": "Lopez",
      "Middle": "R",
      "Last": "Jose"
    },
    "SenderDateOfBirth": "06061980",
    "SenderPhoneNumber": "1800639426",
    "SenderAddress": {
      "Line1": "123 Main Street",
      "Line2": "5A",
      "City": "Arlington",
      "CountrySubdivision": "VA",
      "PostalCode": "22207",
      "Country": "USA"
    },
    "Channel": "W",
    "UCAFSupport": "true",
    "ICA": "009674",
    "ProcessorId": "9000000442",
    "RoutingAndTransitNumber": "990442082",
    "CardAcceptor": {
      "Name": "My Local Bank",
      "City": "Saint Louis",
      "State": "MO",
      "PostalCode": "63101",
      "Country": "USA"
    },
    "TransactionDesc": "P2P",
    "MerchantId": "123456",
    "LanguageData": "Test",
    "LanguageIdentification": "ENG",
    "ParticipationID": "154789564",
    "AdditionalMessage": "Personal message here"
  }
};

moneysend.Funding.create(requestData
, function (error, data) {
    if (error) {
        console.error("An error occurred");
        console.error(error);
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
        
    }
});

