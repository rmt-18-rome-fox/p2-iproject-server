# Tetangga API Documentation
Berikut adalah step by step penggunaan API

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`API_KEY`

`ANOTHER_API_KEY`

## Models :

_User_
```
- email : string, required, unique
- password : string, required
```

_Posts_
```
- UserId : integer, required
- description : text
- imageUrl : varchar
- tag : varchar
- status : string
```

_Profiles_
```
- UserId : integer, required​
- namaLengkap : varchar
- alamat : text
- rt/rw : varhcar
- kelurahan : varchar
- kecamatan : varchar
- kota/kab : varchar
- provinsi : varchar
- lat : varchar
- long : varchar
```

_Organization_
```
- name : varchar, required​
- description : text, required​
- isPaid : boolean, required​
- price : integer
```

_PaymentsStatus (Conjuntion)_
```
- UserId : integer, required​
- OrganizationId : integer, required​
- status : string
```

## Endpoints :
List of available endpoints: 

- `POST/Register` 
- `POST/login`
- `POST/profiles`
- `GET/user`
- `GET/posts`
- `POST/post`
- `PUT/post/:id`
- `POST/organization`
- `POST/payment-status`

## 1. POST /register

Request:

- body:
```json
{
  "email": "string, required",
  "password": "string, required"
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