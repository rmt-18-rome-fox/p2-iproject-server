# My-Quran API Documentation

## Endpoints :

List of available endpoints:
​
- `POST /register`
- `POST /login`


&nbsp;

## 1. POST /register

Request:

- body:
```json
{
  "username": "sring",
  "email": "string",
  "password": "string"
}
```

_Response (201 - Created)_
```json
{
  "id": "integer",
  "username": "string",
  "email": "string"
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

_Response (200 - Ok)_
```json
{
  "access_token": "string",
}
```

&nbsp;
