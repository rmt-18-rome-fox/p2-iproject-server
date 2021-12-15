# iProject - Coffee Powder

## API Documentation

### Login as Admin :

```
email: admin1@mail.com
passsword: password
```

Silahkan lakukan login sebagai admin jika ingin melakukan CRUD.

&nbsp;

### Card Payment :

```
Card Number = 4811 1111 1111 1114
CVV = 123
```

Silahkan masukan input ini saat ingin membayarkan product di API Midtrans agar transaksi berhasil.

&nbsp;

## Models :

_User_

```
- email : string, required, unique
- password : string, required
- firstName: string, required
- lastName: string, required
- address: string, required
- phoneNumber: string, required
- role: string, required, (default: customer)
```

_CoffeePowder_

```
- name : string, required
- description : string, required
- type : string, required
- roastLevel : string, required
- grindSize : string, required
- imageUrl : string, required
- price : integer, required
- stock : integer, required
```

_OrderDetail_

```
- UserId : integer, required​
- CoffeeId : integer, required
- quantity : integer, required
- orderStatus : string, required, (default: pending)
```

## Endpoints :

List of available endpoints:
​

1. `POST /register`
2. `POST /login`

Routes below need authentication and for customer:

3. `GET /coffeepowder`
4. `GET /orderdetail`
5. `POST /orderdetail/:coffeeid`
6. `PATCH /orderdetailplus/:orderid`
7. `PATCH /orderdetailminus/:orderid`
8. `POST /paycharge`
9. `GET /checkstatuspayment`

Routes below need authentication & authorization as admin only:

10. `POST /admin/coffeepowder`
11. `DELETE /admin/coffeepowder/:id`
12. `PUT /admin/coffeepowder/:id`
13. `GET /admin/coffeepowder/:id`

&nbsp;

## 1. POST /register

Request:

- body:

```json
{
  "email": "string",
  "password": "string",
  "firstName": "string",
  "lastName": "string",
  "address": "string",
  "phoneNumber": "string",
  "role": "string"
}
```

_Response (201 - Created)_

```json
{
  "id": "integer",
  "email": "string",
  "role": customer,
}
```

_Response (400 - Bad Request)_

```json
{
  "message": "Email is required"
}
OR
{
  "message": "Invalid email format"
}
OR
{
  "message": "Email must be unique"
}
OR
{
  "message": "Password is required"
}
OR
{
  "message": "First Name is required"
}
OR
{
  "message": "Last Name is required"
}
OR
{
  "message": "Address is required"
}
OR
{
  "message": "Phone Number is required"
}
OR
{
  "message": "Role is required"
}

```

&nbsp;

## 2. POST /login

Request:

- body:

```json
{
  "email": "string",
  "password": "string"
}
```

_Response (200 - OK)_

```json
{
  "access_token": "string",
  "email": "string",
  "role": customer,
  "id": "integer"
}
```

_Response (400 - Bad Request)_

```json
{
  "message": "Email is required"
}
OR
{
  "message": "Password is required"
}
```

_Response (401 - Unauthorized)_

```json
{
  "message": "Invalid email/password"
}
```

&nbsp;

## 3. GET /coffeepowder

Description:

- Fetch all coffeepowder from database

Request:

- headers:

```json
{
  "access_token": "string"
}
```

_Response (200 - OK)_

```json
[
[
    {
        "id": 1,
        "name": "Kalosi Toraja Kopi",
        "description": "Kopi Toraja sangat disukai karena memiliki karakteristik yang khas, keasaman yang rendah, dan aroma yang harum. Salah satu chain toko kopi di Indonesia, Excelso, juga menjual produk kopi yang berasal dari daerah penghasil kopi terbesar di Indonesia ini. Kopi ini pun dikemas secara cantik. Kopi Toraja Excelso mudah ditemukan di supermarket dan cocok dijadikan suvenir.",
        "type": "Kalosi",
        "roastLevel": "Light",
        "grindSize": "Fine",
        "imageUrl": "https://img.my-best.id/item_part_images/82e5f109977305d67592fb3af33f42cc.jpg?ixlib=rails-4.2.0&q=70&lossless=0&w=640&h=640&fit=clip",
        "price": 30000,
        "stock": 25,
        "createdAt": "2021-12-15T05:33:31.743Z",
        "updatedAt": "2021-12-15T05:33:31.743Z"
    },
    {
        "id": 2,
        "name": "Kopi Arabika Aceh Gayo",
        "description": "Kopi ini bisa dinikmati baik dalam kondisi dingin ataupun panas. Namun, kopi ini lebih nikmat disajikan dalam kondisi panas, apalagi ketika cuaca sedang hujan. Selain berkhasiat untuk mengusir kantuk, kopi Arabika Gayo juga memberikan kenikmatan yang luar biasa di setiap seduhannya.",
        "type": "Arabika",
        "roastLevel": "Medium",
        "grindSize": "Medium",
        "imageUrl": "https://img.my-best.id/item_part_images/72d0b72bcfa97c0cced26727d3117b50.png?ixlib=rails-4.2.0&q=70&lossless=0&w=640&h=640&fit=clip",
        "price": 40000,
        "stock": 35,
        "createdAt": "2021-12-15T05:33:31.743Z",
        "updatedAt": "2021-12-15T05:33:31.743Z"
    },
    ....
]
```

&nbsp;

## 4. GET /orderdetail

Description:

- Fetch all OrderDetail from database

Request:

- headers:

```json
{
  "access_token": "string"
}
```

_Response (200 - Created)_

```json
[
    {
        "id": 1,
        "UserId": 2,
        "CoffeeId": 1,
        "quantity": 5,
        "orderStatus": "pending",
        "orderId": "375x5",
        "createdAt": "2021-12-15T12:21:24.103Z",
        "updatedAt": "2021-12-15T12:24:46.874Z",
        "CoffeePowder": {
            "id": 1,
            "name": "Kalosi Toraja Kopi",
            "description": "Kopi Toraja sangat disukai karena memiliki karakteristik yang khas, keasaman yang rendah, dan aroma yang harum. Salah satu chain toko kopi di Indonesia, Excelso, juga menjual produk kopi yang berasal dari daerah penghasil kopi terbesar di Indonesia ini. Kopi ini pun dikemas secara cantik. Kopi Toraja Excelso mudah ditemukan di supermarket dan cocok dijadikan suvenir.",
            "type": "Kalosi",
            "roastLevel": "Light",
            "grindSize": "Fine",
            "imageUrl": "https://img.my-best.id/item_part_images/82e5f109977305d67592fb3af33f42cc.jpg?ixlib=rails-4.2.0&q=70&lossless=0&w=640&h=640&fit=clip",
            "price": 30000,
            "stock": 25,
            "createdAt": "2021-12-15T05:33:31.743Z",
            "updatedAt": "2021-12-15T05:33:31.743Z"
        }
    },
    ...
]
```

_Response (404 - Not Found)_

```json
{
  "message": "Error not found"
}
```

&nbsp;

## 5. POST /orderdetail/:coffeeid

Description:

- Get current user favourites

Request:

- headers:

```json
{
  "access_token": "string"
}
```

- params:

```json
{
  "coffeeid": "integer"
}
```

_Response (200 - OK)_

```json
{
  "message": "Success added new Product Coffee Powder"
}
```

_Response (404 - Not Found)_

```json
{
  "message": "Error not found"
}
```

&nbsp;

## 6. PATCH /orderdetailplus/:orderid

Description:

- Update by increasing quantity on order detail

Request:

- headers:

```json
{
  "access_token": "string"
}
```

- params:

```json
{
  "orderid": "integer"
}
```

_Response (200 - OK)_

```json
{
  "message": "Success Patch ++ Quantity"
}
```

_Response (404 - Not Found)_

```json
{
  "message": "Error not found"
}
```

&nbsp;

## 7. PATCH /orderdetailminus/:orderid

Description:

- Update by decreasing quantity on order detail

Request:

- headers:

```json
{
  "access_token": "string"
}
```

- params:

```json
{
  "orderid": "integer"
}
```

_Response (200 - OK)_

```json
{
  "message": "Success Patch -- Quantity"
}
```

_Response (404 - Not Found)_

```json
{
  "message": "Error not found"
}
```

&nbsp;

## 8. POST /paycharge

Description:

- Pay to Midtrans API

Request:

- headers:

```json
{
  "access_token": "string"
}
```

_Response (200 - OK)_

```json
{
  "result": {
    "token": "d6630e05-b433-41c7-973f-8196bdd01058",
    "redirect_url": "https://app.sandbox.midtrans.com/snap/v2/vtweb/d6630e05-b433-41c7-973f-8196bdd01058"
  }
}
```

&nbsp;

## 9. GET /checkstatuspayment

Description:

- Check status payment to Sandbox on Midtrans API

Request:

- headers:

```json
{
  "access_token": "string"
}
```

_Response (200 - OK)_

```json
{
  "transaction_status": "capture",
  "fraud_status": "accept",
  "status_message": "Success, transaction is found"
}
```

&nbsp;

## 10. POST /admin/coffeepowder

Request:

- headers:

```json
{
  "access_token": "string"
}
```

- body:

```json
{
  "name": "string",
  "description": "string",
  "type": "string",
  "roastLevel": "string",
  "grindSize": "string",
  "price": "integer",
  "stock": "integer",
  "imageUrl": "string"
}
```

_Response (201 - Created)_

```json
{
  "name": "string",
  "description": "string",
  "type": "string",
  "roastLevel": "string",
  "grindSize": "string",
  "price": "integer",
  "stock": "integer",
  "imageUrl": "string"
}
```

&nbsp;

## 11. DELETE /admin/coffeepowder/:id

Request:

- headers:

```json
{
  "access_token": "string"
}
```

- params:

```json
{
  "id": "integer"
}
```

_Response (201 - Created)_

```json
{
  "message": "Coffee Powder with name 'CoffeePowder.name' has been deleted"
}
```

_Response (404 - Error Not Found)_

```json
{
  "message": "Error no found"
}
```

&nbsp;

## 12. PUT /admin/coffeepowder/:id

Request:

- headers:

```json
{
  "access_token": "string"
}
```

- params:

```json
{
  "id": "integer"
}
```

- body:

```json
{
  "name": "string",
  "description": "string",
  "type": "string",
  "roastLevel": "string",
  "grindSize": "string",
  "price": "integer",
  "stock": "integer",
  "imageUrl": "string"
}
```

_Response (200 - OK)_

```json
{
  "message": "Coffee Powder with id '5' has been updated"
}
```

_Response (404 - Error Not Found)_

```json
{
  "message": "Error not found"
}
```

&nbsp;

## 13. GET /admin/coffeepowder/:id

Request:

- headers:

```json
{
  "access_token": "string"
}
```

- params:

```json
{
  "id": "integer"
}
```

_Response (200 - Ok)_

```json
{
  "id": 1,
  "name": "Kalosi Toraja Kopi",
  "description": "Kopi Toraja sangat disukai karena memiliki karakteristik yang khas, keasaman yang rendah, dan aroma yang harum. Salah satu chain toko kopi di Indonesia, Excelso, juga menjual produk kopi yang berasal dari daerah penghasil kopi terbesar di Indonesia ini. Kopi ini pun dikemas secara cantik. Kopi Toraja Excelso mudah ditemukan di supermarket dan cocok dijadikan suvenir.",
  "type": "Kalosi",
  "roastLevel": "Light",
  "grindSize": "Fine",
  "imageUrl": "https://img.my-best.id/item_part_images/82e5f109977305d67592fb3af33f42cc.jpg?ixlib=rails-4.2.0&q=70&lossless=0&w=640&h=640&fit=clip",
  "price": 30000,
  "stock": 25,
  "createdAt": "2021-12-15T05:33:31.743Z",
  "updatedAt": "2021-12-15T05:33:31.743Z"
}
```

_Response (404 - Error Not Found)_

```json
{
  "message": "Error not found"
}
```

&nbsp;

## Global Error

_Response (401 - Unauthorized)_

```json
{
  "message": "Invalid token"
}
```

_Response (403 - Forbidden)_

```json
{
  "message": "You are not authorized"
}
```

_Response (500 - Internal Server Error)_

```json
{
  "message": "Internal server error"
}
```
