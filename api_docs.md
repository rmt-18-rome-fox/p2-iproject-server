
# Pet Shop API Documentation

Endpoints :

List of available endpoints:

- POST /register
- POST /login
- POST /googleVer
- POST /cms/register
- POST /cms/login
- GET /products
- GET /status
- GET /order
- GET /checkout
- POST /order/productId
- POST /checkout/charge
- PATCH /status/:orderId

&nbsp;

## 1. POST /register

Request:

- body:

```json
{
  "email": "string",
  "password": "string"
}
```

_Response (201 - Created)_

```json
{
  "id": "integer",
  "email": "string"
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
  "access_token": "string"
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

## 3. POST /googleVer

Request:

- headers:

```json
{
  "idToken": "string",
}
```

_Response (200 - OK)_

```json
{
  "access_token": "string"
}
```
&nbsp;

## 4. GET /product

Description:

- Get all product from database

_Response (200 - OK)_

```json
{
  "response" : [
        {
            "id": 10,
            "name": "Hamster",
            "price": "Rp 500.000,00",
            "quantity": 3,
            "imgUrl": "https://images.unsplash.com/photo-1425082661705-1834bfd09dca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876&q=80",
            "summary": "Brown Hamster"
        },
        {
            "id": 14,
            "name": "White Bunny",
            "price": "Rp 1.100.000,00",
            "quantity": 3,
            "imgUrl": "https://images.unsplash.com/photo-1511542229800-663a99ca1817?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
            "summary": "White Bunny"
        }
     ...,
  ]
}
```

&nbsp;

## 5. GET /order

Request:

- headers:

    ```json
    {
        "access_token": "string",
    }
    ```

Description:

- Get all Order Product from database

_Response (200 - OK)_ (if Orderd)

```json
{
    "response": [
        {
            "id": 1,
            "UserId": 2,
            "ProductId": 12,
            "status": "completed",
            "Product": {
                "id": 12,
                "name": "Puppy",
                "price": "Rp 2.200.000,00",
                "imgUrl": "https://images.unsplash.com/photo-1636263931579-026c9ff96269?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1842&q=80",
                "summary": "Innocent dog is hiding himself."
            }
        }
    ]
}
```

_Response (200 - OK)_ (if empty)

```json
{
    "msg": "there is no orders yet",
    "data": [
        {
            "weight": {
                "imperial": "6 - 13",
                "metric": "3 - 6"
            },
            "height": {
                "imperial": "9 - 11.5",
                "metric": "23 - 29"
            },
            "id": 1,
            "name": "Affenpinscher",
            "bred_for": "Small rodent hunting, lapdog",
            "breed_group": "Toy",
            "life_span": "10 - 12 years",
            "temperament": "Stubborn, Curious, Playful, Adventurous, Active, Fun-loving",
            "origin": "Germany, France",
            "reference_image_id": "BJa4kxc4X",
            "image": {
                "id": "BJa4kxc4X",
                "width": 1600,
                "height": 1199,
                "url": "https://cdn2.thedogapi.com/images/BJa4kxc4X.jpg"
            }
        },
        {
            "weight": {
                "imperial": "50 - 60",
                "metric": "23 - 27"
            },
            "height": {
                "imperial": "25 - 27",
                "metric": "64 - 69"
            },
            "id": 2,
            "name": "Afghan Hound",
            "country_code": "AG",
            "bred_for": "Coursing and hunting",
            "breed_group": "Hound",
            "life_span": "10 - 13 years",
            "temperament": "Aloof, Clownish, Dignified, Independent, Happy",
            "origin": "Afghanistan, Iran, Pakistan",
            "reference_image_id": "hMyT4CDXR",
            "image": {
                "id": "hMyT4CDXR",
                "width": 606,
                "height": 380,
                "url": "https://cdn2.thedogapi.com/images/hMyT4CDXR.jpg"
            }
        },
    ]
}
```

## 6. POST /order/:productId

Request:

- headers:

    ```json
    {
    "access_token": "string",
    }
    ```
- params 
    ```json
    integer
    ```


_Response (201 - Created)_

```json
{
    "msg": "Added" + "<Product_Name>"
}
```
&nbsp;

_Response (404 - Not Found)_

```json
{
  "message": "Product not found"
}
```

&nbsp;

## 7. GET /checkout

Request:

- headers:

```json
{
    "access_token": "string",
}
```

Description:

- Get all Order Product from database to checkout

_Response (200 - OK)_ (if Orderd)

```json
{
    "orderDerail": {
        "totalPrice": "Rp 500.000,00",
        "product": [
            {
                "id": 10,
                "name": "Hamster",
                "price": "Rp 500.000,00",
                "quantity": 3,
                "imgUrl": "https://images.unsplash.com/photo-1425082661705-1834bfd09dca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876&q=80",
                "summary": "Brown Hamster"
            }
        ],
        "order_id": "2er2qt"
    }
}
```

_Response (201 - created)_ (if no order id yet)

```json
{
    "orderDerail": {
        "totalPrice": "Rp 500.000,00",
        "product": [
            {
                "id": 10,
                "name": "Hamster",
                "price": "Rp 500.000,00",
                "quantity": 3,
                "imgUrl": "https://images.unsplash.com/photo-1425082661705-1834bfd09dca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876&q=80",
                "summary": "Brown Hamster"
            }
        ],
        "order_id": "2er2qt"
    }
}
```

## 8. POST /checkout/charge

Request:

- headers:

```json
{
    "access_token": "string",
}
```

_Response (200 - Created)_

```json
{
    "result": {
        "token": "36f305d5-f74a-4916-a1a8-0ac41ae9955c",
        "redirect_url": "https://app.sandbox.midtrans.com/snap/v2/vtweb/36f305d5-f74a-4916-a1a8-0ac41ae9955c"
    }
}
```
_Response (400 - Bad Request)_

```json
{
    "message": "Midtrans Errror"
}
```

&nbsp;

## 9. GET /status

Description:

- Get all Transaction Status 

_Response (200 - OK)_ (if Orderd)

```json
{
    "findAllhistoryLog": [
        {
            "id": 2,
            "order_id": "2er2qt",
            "status": "pending",
            "ammount": "Rp 500.000,00",
            "createdAt": "2021-12-15T20:51:07.741Z"
        },
        {
            "id": 1,
            "order_id": "2n8ehak",
            "status": "on Shipping",
            "ammount": "Rp 2.200.000,00",
            "createdAt": "2021-12-15T19:36:56.015Z"
        }
    ...,
    ]
}
```

## 10. PATCH /status/:orderId

Request:

- headers:

    ```json
    {
        "access_token": "string",
    }
    ```
- params 
    ```json
    integer
    ```

Description:

- Patch status transaction 

_Response (201 - Created)_ 

```json
{
    "result": [
        {
            "id": 1,
            "order_id": "2n8ehak",
            "UserId": 2,
            "status": "on Shipping",
            "ammount": "2200000",
            "createdAt": "2021-12-15T19:36:56.015Z",
            "updatedAt": "2021-12-15T21:06:09.758Z"
        }
    ]
}
```

_Response (404 - Not Found)_ 

```json
{
    "message": "If payment using bank transfer wait for 24 hours, or if you havent Checkout yet please checkout"
}
```

## Global Error

_Response (401 - Unauthorized)_

```json
{
  "message": "Invalid token"
}
```

_Response (500 - Internal Server Error)_

```json
{
  "message": "Internal server error"
}
```

