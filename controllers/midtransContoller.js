// const { Config } = require(`../apis/midtrans`)
// const axios = require(`axios`)

// class Apirequestor {

//     static get(url, server_key, data_hash){
//         return this.remoteCall(url, server_key, data_hash, false)
//     }

//     static get(url, server_key, data_hash){
//         return this.remoteCall(url, server_key, data_hash, true)
//     }

//     static remoteCall(url, server_key, data_hash, post = true){
//         const headers = {
//             "Content-Type"  :   "application/json",
//             Accept          :   "application/json",
//             Authorization   : 
//             "Basic" + Buffer.from(server_key +  ":").toString("base64"),
//         }

//         let body = JSON.stringify(data_hash)

//         let result;

//         if (post) {
//             result = axios.post(url, body, {
//                         headers: headers
//                     })
//                     .then((res) => {
//                         return res.data
//                     }).catch((err) => console.log(err) )
//         } else {
//             result = axios.get(url, {
//                 headers: headers
//             })
//             .then((res) => {
//                 return res.data
//             }).catch((err) => console.log(err) )
//         }

//         return result
//     }
// }

// class CoreApi {
//     static charge(payload){
//         Config.getBaseUrl()+ "/cahrge",
//         Config.serverKey,
//         payload
//     }
// }

// class BankTransfer {
//     constructor(items = [], customer){
//         this.items = items
//         this.customer = customer
//     }

//     baseBody(){
//         let gross_ammout = 0
//         let order_id = new Date().getTime()

//         let items = this.items
//         let customer = this.customer

//         items.forEach( item =>{
//             gross_ammout += items.price * item.quantity
//         })

//         let body  = {
//             payment_type: "bank_transfer",
//             transactio_details: {
//                 gross_ammout,
//                 order_id
//             },
//             customer_details: {
//                 email: customer_details,
//                 first_name : customer.first_name,
//                 last_name : customer.last.name,
//                 phone: customer.phone
//             },
//             item_details: this.items
//         }

//         return body
//     }

//     bca(){
//         let base = this.baseBody();
//         let mybody = {
//             payment_type: base.payment_type,
//             transactio_details: base.transactio_details,
//             customer_details: base.customer_details,
//             item_details: base.item_details,
//             bank_transfer: {
//                 bank: "BCA",
//                 va_number: "12345678901",
//                 free_text: {
//                     inquiry: [
//                         {
//                             id: "text indonesia",
//                             en: "text english"
//                         }
//                     ],
//                     payment: [
//                         {
//                             id: "pembayaran product",
//                             en: "product payment"
//                         }
//                     ]
//                 }
//             },
//         }

//         return mybody
//     }

//     bni(){
//         let base = this.baseBody();
//         let mybody = {
//             payment_type: base.payment_type,
//             transactio_details: base.transactio_details,
//             customer_details: base.customer_details,
//             item_details: base.item_details,
//             bank_transfer: {
//                 bank: "bni",
//                 va_number: "12345678901"
//             },
//         }

//         return mybody
//     }

//     permata(){
//         let base = this.baseBody();
//         let mybody = {
//             payment_type: base.payment_type,
//             transactio_details: base.transactio_details,
//             customer_details: base.customer_details,
//             item_details: base.item_details,
//             bank_transfer: {
//                 bank: "permata",
//                 va_number: "12345678901"
//             },
//         }

//         return mybody
//     }

// }

// class IndexController {

//     async bankTransfer (req, res){
//         let data;
//         let body = req.body

//         console.log(body)
//         let customer = {
//             email: "tester@mail.com",
//             first_name: "first name",
//             last_name: "last name",
//             phone: "nomor telpon"
//         }

//         let bankTransfer = new BankTransfer(body.items, customers)
//         switch (body.channel) {
//             case "BCA":
//                 data = bankTransfer.bca()
//                 break;
//             case "BNI":
//                 data = bankTransfer.bni()
//                 break;
//             case "PERMATA":
//                 data = bankTransfer.permata()
//                 break;
//             default:
//                 break;
//         }
//         // return data
//         return CoreApi.charge(data)
//     }
// }

// module.exports = {
//     Apirequestor,
//     CoreApi,
//     BankTransfer,
//     IndexController
// }