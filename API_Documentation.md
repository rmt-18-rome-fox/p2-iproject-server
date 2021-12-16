# SKYPAL API Documentation

## ENTITY
- User :
  - id
  - email: string (required, unique)
  - password: string (required, length min 5)
  - username: string
  - address: string
  - role: string

- Weather :
  - test
  - test

List of available endpoints for SKYPIA :

1. `POST /register`
2. `POST /login`
3. `GET /weather/current`

&nbsp;

# 1. POST /register

## Request :

- `req.body`

```json
{
  "email": "string",
  "password": "string",
  "username": "string",
  "address": "string",
  "role": "string",
}
```
## Response :

- `Response (201 - Created)`

```json
{
  "id": "integer",
  "email": "string",
}

```

- `Response (400 - Bad Request)`

```json
{
  "message": "email must be unique"
}
OR
{
  "message": "Email Cannot be Null"
}
OR
{
  "message": "Email Cannot be Empty"
}
OR
{
  "message": "Email must be Email Format"
}
OR
{
  "message": "Password Length Minimum 5 Character"
}
```

&nbsp;

# 2. POST /login

## Request :

- `req.body`

```json
{
  "email": "string",
  "password": "string"
}
```

## Response :

- `Response (200 - OK)`

```json
{
  "access_token": "string"
}
```

- `Response (401 - Unauthorized)`

```json
{
  "message": "Error Invalid Email"
}
OR
{
  "message": "Error Invalid Password"
}
```

&nbsp;

# 3. GET /weather/current



# GLOBAL ERROR

- `Response (500 - Internal Server Error)`

```json
{
  "message": "internal server error"
}
```