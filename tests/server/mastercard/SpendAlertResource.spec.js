'use strict';

const expect = require('chai').expect;
const sinon = require('sinon');
const mastercard_moneysend = require('mastercard-moneysend');
const spendalert = require('./../../../src/server/mastercard/SpendAlertResource');

var requestdata = require('./resources/requestdata_spendalerts.json');

  /**
  * describe is a key-word from
  */
  describe('spend alert', () => {
    let req;
    let res;

    beforeEach(()=> {
      req = {};
      res = {
        send: sinon.spy()
      }

  });

  describe('query alert method', () => {
      it('should respond by sending a correct response', (done) => {

      //mag niet gedupliceerd zijn...
      requestdata.AlertsRequestV1.TransactionReference =
      Math.floor(
        1000000000000000000 + Math.random() *
        900000000000000000);;

        spendalert(requestdata,function(err, data){
          expect(data.send.calledWith('Hello world 2')).to.equal(true);
          done();
        });

      });
    });

    });

