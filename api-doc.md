# newshub API Documentation

## Endpoints :

List of available endpoints:

- `POST /admins/register`
- `POST /admins/login`
- `POST /users/register`
- `POST /users/register`

&nbsp;

## 1. POST /admins/register

Description:
- Register admin to database

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

## 2. POST admins/login

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
  "message": "Please input email and Password"
}
```

_Response (401 - Unauthorized)_

```json
{
  "message": "Invalid email/password"
}
```

&nbsp;

## 3. POST /users/register

Description:
- Register user to database

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

## 4. POST users/login

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
  "message": "Please input email and Password"
}
```

_Response (401 - Unauthorized)_

```json
{
  "message": "Invalid email/password"
}
```

&nbsp;