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

_Profiles_
```
- UserId : integer, required​
- namaLengkap : varchar, required,
- imageUrl: varchar,
- alamat : text
- rtRw : varhcar
- kelurahan : varchar
- kecamatan : varchar
- kotaKab : varchar
- provinsi : varchar
- lat : varchar
- long : varchar
```

_Posts_
```
- UserId : integer, required
- description : text, required
- imageUrl : varchar
- tag : varchar
- status : string
```

_Organization_
```
- UserId: integer, required
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
- `PUT/profiles`
- `GET/profile`
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

## 3. POST /profiles

Request:

- body:
```json
{
  "namaLengkap": string,
  "alamat": text ,
  "rtRw" : string,
  "kelurahan": string,
  "kecamatan": string,
  "kotaKab": string,
  "provinsi" : string,
  "lat": integer,
  "long": integer
}
```

- headers:
```json
{
  "access_token": string
}
```

_Response (200 - OK)_
```json
{
  "message": "Your profile is created",
  "data": {
      "id": 1,
      "UserId": 1,
      "namaLengkap": "Arie Sastra Hadiprawira",
      "imageUrl": "https://ik.imagekit.io/kkupfm0agcc/ganteng-jepang_Kfvn7RlXqd.jpg",
      "alamat": "Jl. Watubela 2 No. RF-3A",
      "rtRw": "-",
      "kecamatan": "Serpong",
      "kotaKab": "Tangerang Selatan",
      "provinsi": "Banten",
      "lat": "",
      "long": ""
    }
}
```

_Response (400 - Bad Request)_

```json
{
  "message": [
    "You already have a profile"
  ]
}
```

_Response (401 - Unauthorized)_

```json
{
    "message": "Not Authorize !"
}
```

## 4. GET /profile

Request:

- headers:
```json
{
  "access_token": string
}
```

_Response (200 - OK)_
```json
{
    "id": 1,
    "UserId": 1,
    "namaLengkap": "Arie Sastra Hadiprawira",
    "imageUrl": "https://ik.imagekit.io/kkupfm0agcc/ganteng-jepang_Kfvn7RlXqd.jpg",
    "alamat": "Jl. Watubela 2 No. RF-3A",
    "rtRw": "-",
    "keluarahan": null,
    "kecamatan": "Serpong",
    "kotaKab": "Tangerang Selatan",
    "provinsi": "Banten",
    "lat": "",
    "long": "",
    "User": {
        "email": "ariesastrah@gmail.com"
    }
}
```

_Response (401 - Unauthorized)_

```json
{
    "message": "Not Authorize !"
}
```