# BingeBuddy API Documentation

## Endpoints :

List of available endpoints:

1. `POST /register`
2. `POST /login`

3. `POST /tweets`
4. `GET /tweets`
5. `GET /quotes`


&nbsp;

## 1. POST /register

Description:

- Create new user

Request:

- body:

```json
{
    "firstName": <string>,
    "lastName": <string>,
    "username": <string>,
    "email": <string>,
    "password": <string>,
}
```

_Response (201 - Created)_

```json
{
    "name": "Hero Red",
    "username": "redhero",
    "email": "redhero@gmail.com",
    "message": "register successfully"
}
```

_Response (400 - Bad Request)_

```json
{
    "name": "SequelizeValidatorError",
    "message": "Please input email."
}
OR
{
    "name": "SequelizeValidatorError",
    "message": "Please enter valid Email"
}
OR
{
    "name": "SequelizeValidatorError",
    "message": "Please input Password"
}
OR
{
    "name": "SequelizeUniqueConstraintError",
    "message": "Email must be unique"
}
```

&nbsp;

## 2. POST /login

Description:

- User Login

Request:

- body:

```json
{
    "email": <string>,
    "password": <string>
}
```

_Response (200 - OK)_

```json
{
    "message": "Login Successful",
    "userId": 2,
    "access_token": "access_token"
}
```

_Response (401 - Unauthorized)_

```json
{
  "name": "Error Login",
  "message": "Email and Password does not match"
}
```

&nbsp;

## 3. POST /tweets

Description:

- Fetch Tweets form database

Request:

- query:

```json
{
    "content": "string",
    "location": "string" (optional),
}
```

_Response (200 - OK)_

```json
{
    "reply": 0,
    "id": 19,
    "content": "Ever tried. Ever failed. No matter. Try Again. Fail again. Fail better.",
    "location": "Location",
    "retweet": 0,
    "likes": 0,
    "UserId": 2,
    "createdAt": "2021-11-18T17:35:01.888Z",
    "updatedAt": "2021-11-18T17:35:01.889Z"
}
```


&nbsp;

## 4. GET /tweets

Description:

- Fetch Tweets form database

Request:

- query:

```json
{
    "content": "string",
    "location": "string" (optional),
}
```

_Response (200 - OK)_

```json
[
    {
        "id": 18,
        "content": "Four steps to achievement: Plan purposefully. Prepare prayerfully. Proceed positively. Pursue persistently. -William Arthur Ward",
        "location": "Location",
        "reply": 0,
        "likes": 0,
        "retweet": 0,
        "UserId": 2,
        "updatedAt": "2021-11-18T16:39:41.893Z",
        "User": {
            "id": 2,
            "firstName": "aan",
            "lastName": "Drew",
            "username": "aan",
            "email": "aan@gmail.com",
            "profilePic": "https://e7.pngegg.com/pngimages/442/477/png-clipart-computer-icons-user-profile-avatar-profile-heroes-profile.png",
            "retweet": 0,
            "following": 0,
            "followers": 0
        }
    },
    ...
]
```

&nbsp;

## 5. GET quotes

Description:

- Fetch Random Quote from third party API

Request:

- params:

```json
{
    "tags": "string",
    "author": "string",
    "content": "string",
    "quote": "integer"
}
```

_Response (200 - OK)_

```json
"When you reach the end of your rope, tie a knot in it and hang on. -Franklin D. Roosevelt"
```

&nbsp;

## Global Error
_Response (500 - Internal Server Error)_

```json
{
  "name": "Internal Server Error",
  "message": <string>
}
```