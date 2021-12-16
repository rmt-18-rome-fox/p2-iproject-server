## POST /register
>register a new user

_Request Header_
```
not needed
```
_Request Body_
```
{
  "name": "string",
  "username": "string",
  "email": "string",
  "password": "string",
  "phoneNumber": "string",
  "address": "string",
}
```
_Response (201 - Created)_
```
{
    "id": int,
    "email": "string"
}

```
_Response (500 - Internal Server Error)_
```
{
  "message": "Internal Server Error"
}
```

_Response (400 - bad-request)_
```
{
      "message": [
          "name can't be empty"
      ]
    },
{
      "message": [
          "username can't be empty"
      ]
    }
    or
    {
      "message": [
          "must be email format"
      ]
    }
    or 
    {
      "message": [
          "email can't be empty",
          "must be email format"
      ]
    }
    or
    {
      "message": [
          "password can't be empty",
          "Minimum password length is 6 characters"
      ]
    }
    or
    {
      "message": [
          "Minimum password length is 6 characters"
      ]
    }
    or
    {
      "message": [
          "phoneNumber can't be empty"
      ]
    }
    or
    {
      "message": [
          "address can't be empty"
      ]
    }
    or
    {
    "message": [
        "username must be unique"
    ]
  }
  or
  {
    "message": [
        "email must be unique"
    ]
  }
  or
  {
    "message": [
        "name can't be empty",
        "email can't be empty",
        "must be email format",
        "password can't be empty",
        "Minimum password length is 5 characters",
        "phoneNumber can't be empty",
        "address can't be empty"
    ]
  }
```

## POST /login
>login 

_Request Header_
```
{
  "access_token": "<your access token>"
}
```
_Request Body_
```
{
  "email": "string",
  "password": "string"
}
```
_Response (200 - OK)_
```
{
    "access_token": "string",
    "status": "string"
}
```

_Response (500 - Internal Server Error)_
```
{
  "message": "Internal Server Error"
}
```

_Response (401 - Unauthorized)_
```
{
  "message": "wrong email/ password"
}
```

_Response (400 - Bad Request)_
```
{
  "message": "Bad Request"
}
```

