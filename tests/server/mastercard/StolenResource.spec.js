'use strict';

const expect = require('chai').expect;
const sinon = require('sinon');
const mastercard_moneysend = require('mastercard-moneysend');
const stolen = require('./../../../src/server/mastercard/StolenResource');

var requestdata = require('./resources/requestdata_stolen.json');

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

  describe('stolen.AccountInquiry.update method', () => {
      it('should respond by sending a correct response - for a stolen card', (done) => {

        stolen(requestdata.stolen,function(err, data){
          expect(data).to.deep.equal(
              { Account:
                  { Status: true,
                    Listed: true,
                    ReasonCode: 'S',
                    Reason: 'STOLEN' }
              });
          done();
        });

      });

      it('should respond by sending a correct response - for fraud', (done) => {

              stolen(requestdata.fraud,function(err, data){
                expect(data).to.deep.equal(
                    { Account: { Status: true, Listed: true, ReasonCode: 'F', Reason: 'FRAUD' } });
                done();
              });

            });

        it('should respond by sending a correct response - for a lost card', (done) => {

                stolen(requestdata.lost,function(err, data){
                  expect(data).to.deep.equal(
                      { Account: { Status: true, Listed: true, ReasonCode: 'L', Reason: 'LOST' } }
);
                  done();
                });
                });



          it('should respond by sending a correct response - for a captured card', (done) => {

                  stolen(requestdata.capturecard,function(err, data){
                    expect(data).to.deep.equal(
                        { Account:
                           { Status: true,
                             Listed: true,
                             ReasonCode: 'P',
                             Reason: 'CAPTURE CARD' } }
);
                    done();
                  });

                });


     it('should respond by sending a correct response - for an card with unauthorised usage', (done) => {

            stolen(requestdata.unauthorised_usage,function(err, data){
              expect(data).to.deep.equal(
                 { Account:
                    { Status: true,
                      Listed: true,
                      ReasonCode: 'U',
                      Reason: 'UNAUTHORIZED USE' } }
);
              done();
            });

          });


          it('should respond by sending a correct response - for a card with counterfeit', (done) => {

                    stolen(requestdata.counterfeit,function(err, data){
                      expect(data).to.deep.equal(
                          { Account:
                             { Status: true,
                               Listed: true,
                               ReasonCode: 'X',
                               Reason: 'COUNTERFEIT' } }
);
                      done();
                    });

                  });



  it('should respond by sending a correct response - for a non-registered card', (done) => {

            stolen(requestdata.false,function(err, data){
              expect(data).to.deep.equal(
                  { Account: { Status: true, Listed: false, ReasonCode: '', Reason: '' } }
);
              done();
            });

          });


    });
    });
