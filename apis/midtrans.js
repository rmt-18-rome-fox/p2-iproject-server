
const axios = require(`axios`)
// const midtransClient = require('midtrans-client');
// Create Snap API instance


// let coreApi = new midtransClient.CoreApi({
//     isProduction : false,
//     serverKey : process.env.MID_SERVER_KEY,
//     clientKey : process.env.MID_CLIENT_KEY
// });

const SANDBOX_BASE_URL = `https://app.sandbox.midtrans.com/snap/v1/transactions`
const PRODUCTION_BASE_URL = `https://api.midtrans.com/v2`

// let snap = new midtransClient.Snap({
//     isProduction : false,
//     serverKey : process.env.MID_SERVER_KEY,
//     clientKey : process.env.MID_CLIENT_KEY
// });


 
// snap.createTransaction(parameter)
//     .then((transaction)=>{
//         // transaction token
//         let transactionToken = transaction.token;
//         console.log('transactionToken:',transactionToken);
//     })
//     .catch((err) => console.log(err))



let testingMidtrans = async (req, res, next) => {
    try {

        let AUTH_STRING = Buffer.from("SB-Mid-server-3qGo9ieIwlQHXNn7ezFDGBvZ:").toString('base64')

        console.log(Buffer.from("SB-Mid-server-3qGo9ieIwlQHXNn7ezFDGBvZ:").toString('base64'));

        console.log(AUTH_STRING,` ======================================================`)

        // console.log.log(AUTH_STRING)

        const headers = {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization : `Basic ${AUTH_STRING}`,
        }

        // let parameter = {
        //     "transaction_details": {
        //         "order_id": "YOUR-ORDERID-123456",
        //         "gross_amount": 10000
        //     },
        //     "credit_card":{
        //         "secure" : true
        //     },
        //     "customer_details": {
        //         "first_name": "budi",
        //         "last_name": "pratama",
        //         "email": "ari@lala",
        //         "phone": "08111222333"
        //     }
        // };
        
        let parameter = {
            "transaction_details": {
              "order_id": "ORDER-101",
              "gross_amount": 10000
            }
          }

        const response = await axios.post( 
            SANDBOX_BASE_URL, 
            parameter, 
            {
                headers: headers
            }
        )

        console.log(response.data)

        const result = response.data

        res.status(200).json({
            result
        })
        
    } catch (error) {
        console.log(error.response.data,` ini errrorna`)
        next(error)
    }
}






// class Config {
//     static serverKey = process.env.MID_SERVER_KEY
//     static isProduction = false
//     static is3ds = false
//     static isSanitized = false

//     static getBaseUrl(){
//         return Config.isProduction ? PRODUCTION_BASE_URL : SANDBOX_BASE_URL
//     }
// }

module.exports = {
    testingMidtrans
}

