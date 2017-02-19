'use strict';

const expect = require('chai').expect;
const sinon = require('sinon');
const mastercard_moneysend = require('mastercard-moneysend');
const sanctionScreening = require('./../../../src/server/mastercard/SanctionScreeningResource');

var requestdata = require('./resources/requestdata_sanctionscreening.json');

  /**
  * describe is a key-word from
  */
  describe('sanction screening', () => {
    let req;
    let res;

    beforeEach(()=> {
      req = {};
      res = {
        send: sinon.spy()
      }

  });

  describe('read sanctionScreening method', () => {
      it('should respond by sending a correct response', (done) => {
        sanctionScreening(requestdata.notFound,function(err, data){

        // requestID changes, so deep-equal is not possible
          expect(data.SanctionScoreServiceResponse.Score).to.equal('0');
          expect(data.SanctionScoreServiceResponse.Status).to.equal('0');
          expect(data.SanctionScoreServiceResponse.TransactionReference).to.equal('0400967413501535988');
          expect(data.SanctionScoreServiceResponse.MatchList).to.equal(null);

          done();
        });

      });
    });

    });

