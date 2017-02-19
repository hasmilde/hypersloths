'use strict';

const expect = require('chai').expect;
const sinon = require('sinon');
const mastercard_moneysend = require('mastercard-moneysend');
const moneysend = require('./../../../src/server/mastercard/PaymentResource');

var requestdata1 = require('./resources/requestdata_payment1.json');
var requestdata2 = require('./resources/requestdata_payment2.json');

  /**
  * describe is a key-word from
  */
  describe('moneysend.Payment.create', () => {
    let req;
    let res;

    beforeEach(()=> {
      req = {};
      res = {
        send: sinon.spy()
      }

  });

//  ignores based on not found by mastercardAPI
//describe('moneysend.Payment.create method', () => {
//   it('should respond by sending a correct response', (done) => {
//
//     moneysend(requestdata1,function(err, data){
//       expect(data.send.calledWith('Hello world 2')).to.equal(true);
//       done();
//     });
//
//   });
// });

  describe('moneysend.Payment.create method', () => {
      it('should respond by sending a correct response', (done) => {

      //mag niet gedupliceerd zijn...
      requestdata2.PaymentRequestV3.TransactionReference =
      Math.floor(
        1000000000000000000 + Math.random() *
        900000000000000000);;

        moneysend(requestdata2,function(err, data){
          expect(data.send.calledWith('Hello world 2')).to.equal(true);
          done();
        });

      });
    });

    });

