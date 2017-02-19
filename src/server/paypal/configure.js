var paypal = require('paypal-rest-sdk');

//email: hypersloths@api.io
//pass: 123456789
//client_id: AffTndaChElyS25LoO8dEjfl5RKI_oZ2wqfssTK0Fnb8YfjpFLffkUAv3a1Ons0F0gUhCcc9NS_8CQDQ
//client_secret: ELBOy81_bIGllz9j6fLvMF3_4Q6Cip8Rj_cBNQkn006sexh_JkEgEAf3ar2dWmBSPNN6V6PlVUpxYITE

paypal.configure({
    'mode': 'sandbox', //sandbox or live
    'client_id': 'AffTndaChElyS25LoO8dEjfl5RKI_oZ2wqfssTK0Fnb8YfjpFLffkUAv3a1Ons0F0gUhCcc9NS_8CQDQ',
    'client_secret': 'ELBOy81_bIGllz9j6fLvMF3_4Q6Cip8Rj_cBNQkn006sexh_JkEgEAf3ar2dWmBSPNN6V6PlVUpxYITE',
    'headers' : {
		'custom': 'header'
    }
});
