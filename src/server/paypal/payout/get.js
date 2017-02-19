/* Copyright 2015-2016 PayPal, Inc. */
"use strict";

var paypal = require('paypal-rest-sdk');
require('../configure');

var payoutId = "S3AUGVEHC937J";

paypal.payout.get(payoutId, function (error, payout) {
    if (error) {
        console.log(error);
        throw error;
    } else {
        console.log("Get Payout Response");
        console.log(JSON.stringify(payout));
    }
});
