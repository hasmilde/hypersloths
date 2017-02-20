var paypalService = require('./paypalService.js');

var paypalPayoutData = {
        "sender_batch_header": {
            "sender_batch_id": "",
            "email_subject": "You have a payment"
        },
        "items": [
            {
                "recipient_type": "EMAIL",
                "amount": {
                    "value": 1.23,
                    "currency": "USD"
                },
                "receiver": "eduardwu-facilitator@gmail.com",
                "note": "Thank you!",
                "sender_item_id": "someStuff01"
            }
        ]
    };

var createNewPaypalPayment = paypalService.paypalCreateSinglePayout(paypalPayoutData)
