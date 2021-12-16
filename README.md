# p2-iproject-server
Individual Project - Server

## Endpoints :

- `POST /register`
- `POST /login`
- `POST /authGoogle`
- `GET /car/:id`
- `GET /car`
- `POST /car`
- `PUT /car/:id`
- `POST /book/:carId`
- `GET /book`

## 1. POST /register

Description:
- Register

Request:

```json
{
  username: "string (required)"
  email: "string (required)"
  password: "string (required)"
  phoneNumber: "string (required)"
}
```
_Response (201 - Created)_
```json
{
    "id": 11,
    "email": "test@test.test"
}
```
_Response (400 - Bad Request)_
```json

```

## 2. POST /login

Description:
- Register

Request:

```json
{
  email: "string (required)"
  password: "string (required)"
}
```
_Response (200 - OK)_
```json
{
    "id": 11,
    "email": "test@test.test"
}
```
_Response (400 - Bad Request)_
```json

```

## 3. GET /car/:id

Description:
- Get car by id

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
  "id": "integer (required)"
}
```

_Response (200 - OK)_
```json

```

## 4. GET /car

Description:
- Get All car list

Request:

- headers: 

```json
{
  "access_token": "string"
}
```

_Response (200 - OK)_
```json

```

## 5. POST /car

Description:
- Post new car to rent

Request:

- headers: 

```json
{
  "access_token": "string"
}
```

_Response (200 - OK)_
```json

```

## 6. PUT /car/:id

Description:
- Edit car by id

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
  "id": "integer (required)"
}
```
_Response (200 - OK)_
```json

```

## 7. POST /book/:carId

Description:
- Post booking car

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
  "carId": "integer (required)"
}
```

_Response (200 - OK)_
```json

```

## 8. GET /book

Description:
- Get book list by user

Request:

- headers: 

```json
{
  "access_token": "string"
}
```

_Response (200 - OK)_
```json

```
