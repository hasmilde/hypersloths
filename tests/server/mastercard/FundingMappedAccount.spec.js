'use strict';

const expect = require('chai').expect;
const sinon = require('sinon');
const mastercard_moneysend = require('mastercard-moneysend');
const moneysend = require('./../../../src/server/mastercard/FundingMappedAccount');

  /**
  * describe is a key-word from
  */
  describe('moneysend.Funding.create', () => {
    let req;
    let res;

    beforeEach(()=> {
      req = {};
      res = {
        send: sinon.spy()
      }

  });

  describe('moneysend.Funding.create method', () => {
    it('should respond by sending a correct response', (done) => {


    var req = {
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






      moneysend(req,function(err, data){
        expect(data.send.calledWith('Hello world 2')).to.equal(true);
        done();
      });

    });
  });

    });
