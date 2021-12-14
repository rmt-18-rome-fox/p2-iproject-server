# newshub API Documentation

## Endpoints :

List of available endpoints:

- `POST /admins/register`
- `POST /admins/login`
- `POST /users/register`
- `POST /users/register`
- `POST /articles`
- `GET /articles`
- `PUT /articles/:id`
- `DELETE /articles/:id`

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

## 5. POST /articles

Description:
- Add new article

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
  "imageUrl": "string",
  "content": "string",
  "title": "string"
}
```

_Response (201 - Created)_
```json
{
    "id": 1,
    "content": "this is article content",
    "AdminId": 1,
    "imageUrl": "https://ik.imagekit.io/08vhqwbwnhk5/meadow_XPpZT2wup.jpg",
    "title": "judul article pertama",
    "updatedAt": "2021-12-14T16:53:17.122Z",
    "createdAt": "2021-12-14T16:53:17.122Z"
}
```

&nbsp;

## 6. GET /articles

Description:
- Get current articles

_Response (200 - OK)_
```json
[
  {
        "id": 1,
        "content": "ini adalah isi dari article pertama",
        "imageUrl": "https://ik.imagekit.io/08vhqwbwnhk5/meadow_XPpZT2wup.jpg",
        "AdminId": 1,
        "title": "judul article pertama",
        "createdAt": "2021-12-14T16:53:17.122Z",
        "updatedAt": "2021-12-14T16:53:17.122Z"
    },
    {
        "id": 2,
        "content": "article kedua ini dibuat oleh admin2",
        "imageUrl": "https://ik.imagekit.io/08vhqwbwnhk5/clearing1_jTZkoQwjjM.jpg",
        "AdminId": 3,
        "title": "judul article kedua",
        "createdAt": "2021-12-14T17:15:27.791Z",
        "updatedAt": "2021-12-14T17:15:27.791Z"
    },
  ...,
]
```

&nbsp;

## 7. PUT /articles/:id

Description:
- Update article

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
  "imageUrl": "string",
  "content": "string",
  "title": "string"
}
```

_Response (200 - OK)_
```json
{
    "id": 2,
    "content": "article kedua di edit ketiga kalinya",
    "imageUrl": "https://ik.imagekit.io/08vhqwbwnhk5/desert1_MFceKRPaq2.jpg",
    "AdminId": 3,
    "title": "judul article pertama",
    "createdAt": "2021-12-14T17:15:27.791Z",
    "updatedAt": "2021-12-14T17:57:39.631Z"
}
```

_Response (404 - Not Found)_
```json
{
  "message": "Article not found"
}
```

&nbsp;

## 7. DELETE /articles/:id

Description:
- Delete Article

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

_Response (200 - OK)_
```json
{
    "message": "article judul article ketiga deleted"
}
```

_Response (404 - Not Found)_
```json
{
  "message": "Article not found"
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