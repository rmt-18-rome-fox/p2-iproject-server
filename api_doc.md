# My-Quran API Documentation

## Endpoints :

List of available endpoints:
​
- `POST /register`


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
