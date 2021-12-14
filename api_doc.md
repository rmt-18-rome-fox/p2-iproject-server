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

## 3. GET /juzz

Request:

- headers:
```json
{
  "access_token": "string" 
}
```

_Response (200 - Ok)_
```json
{
  "juzs": [
    {
      "id": 1,
      "juz_number": "integer",
      "verse_mapping": "object",
      "first_verse_id": "integer",
      "last_verse_id": "integer",
      "verses_count":"integer"
    },
    ...
  ]
}
```

&nbsp;
