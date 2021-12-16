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

## GET /recipes

> Get all recipes

_Request Header_
```
not needed
```
_Request Body_
```
not needed
```

_Response (200 - OK)_
```
[
  {
    "id": integer,
      "title": "string",
      "image": "string",
      "dishTypes": [
          "string",
          "string"
      ],
      "spoonacularScore": "integer",
      "cuisines": "string"
  }
]
```

_Response (500 - Internal Server Error)_
```
{
  "message": "Internal Server Error"
}
```

## GET /recipes/detail/:id

> Get all recipes

_Request Header_
```
no needed
```
_Request Body_
```
not needed
```
_Request params
```
  {
    "id": "string", 
  }
```
_Response (200 - OK)_
```
{
    "id": integer,
    "title": "string",
    "readyInMinutes": int,
    "image": "string",
    "cuisines": "string",
    "dishTypes": [
        "string
    ],
    "ingredients": [
        "string"
    ],
    "steps": [
      "string"
    ]
}
```

_Response (500 - Internal Server Error)_
```
{
  "message": "Internal Server Error"
}
```
_Response (404 - Not Found)_
```
{
  "message": "Food not found"
}
```

## POST /users/favourites/id
> add new favourite

_Request Header_
```
{
  "access_token": "<your access token>"
}
```
_Request params
```
  {
    "id": "string", 
  }
```

_Response (201 - Created)_
```
{
    "id": 25,
    "UserId": 2,
    "RecipeId": 657306,
    "notes": null,
    "updatedAt": "2021-12-16T04:28:18.074Z",
    "createdAt": "2021-12-16T04:28:18.074Z"
}
```

_Response (500 - Internal Server Error)_
```
{
  "message": "Internal Server Error"
}
```
_Response (401 - JsonWebTokenError)_
```
{
  "message": "invalid token"
}
```

_Response (401 - Unauthorized)_
```
{
  "message": "Not Authorized"
}
```

_Response (404 - Not Found)_
```
{
  "message": "Food not found"
}
```

## GET /users/subscribe
> subscribe

_Request Header_
```
{
  "access_token": "<your access token>"
}
```
_Request Body_
```
not needed
```
_Request params
```

```
_Response (200 - OK)_
```
{
    "invoiceUrl": "https://checkout-staging.xendit.co/web/61bac243edcb3adad2a24f5b"
}
```

_Response (500 - Internal Server Error)_
```
{
  "message": "Internal Server Error"
}
```

## PATCH /users/status
> Update status

_Request Header_
```
{
  "access_token": "<your access token>"
}
```

_Request Body_
```
no needed
```

_Request Params_
```
{
  "id": "<id to put update into>"
}
```

_Response (200 - OK)_
```
{
    "message": "status updated"
}
```

_Response (500 - Internal Server Error)_
```
{
  "message": "Internal Server Error"
}
```

## GET /favourites
> subscribe

_Request Header_
```
{
  "access_token": "<your access token>"
}
```
_Request Body_
```
not needed
```
_Request params
```

```
_Response (200 - OK)_
```
[
    {
        "id": 22,
        "UserId": 2,
        "RecipeId": 638488,
        "notes": "kurang gula",
        "createdAt": "2021-12-15T22:44:59.169Z",
        "updatedAt": "2021-12-15T22:44:59.169Z",
        "recipes": {
            "title": "Chicken-Tortilla Chip Soup",
            "image": "https://spoonacular.com/recipeImages/638488-556x370.jpg",
            "dishTypes": [
                "lunch",
                "soup",
                "main course",
                "main dish",
                "dinner"
            ],
            "cuisines": []
        }
    },
    {
        "id": 24,
        "UserId": 2,
        "RecipeId": 639515,
        "notes": "kurang gula",
        "createdAt": "2021-12-15T22:47:01.788Z",
        "updatedAt": "2021-12-15T22:47:01.788Z",
        "recipes": {
            "title": "Citrus Beet Salad",
            "image": "https://spoonacular.com/recipeImages/639515-556x370.jpg",
            "dishTypes": [
                "side dish"
            ],
            "cuisines": []
        }
    },
]
```

_Response (500 - Internal Server Error)_
```
{
  "message": "Internal Server Error"
}
```

## GET /favourites/recipe/:id
> subscribe

_Request Header_
```
{
  "access_token": "<your access token>"
}
```
_Request Body_
```
not needed
```
_Request params
```
  {
    "id": "string", 
  }
```
_Response (200 - OK)_
```
[
    {
        "id": 22,
        "UserId": 2,
        "RecipeId": 638488,
        "notes": "kurang gula",
        "createdAt": "2021-12-15T22:44:59.169Z",
        "updatedAt": "2021-12-15T22:44:59.169Z",
        "recipes": {
            "title": "Chicken-Tortilla Chip Soup",
            "image": "https://spoonacular.com/recipeImages/638488-556x370.jpg",
            "dishTypes": [
                "lunch",
                "soup",
                "main course",
                "main dish",
                "dinner"
            ],
            "cuisines": []
        }
    },
    {
        "id": 24,
        "UserId": 2,
        "RecipeId": 639515,
        "notes": "kurang gula",
        "createdAt": "2021-12-15T22:47:01.788Z",
        "updatedAt": "2021-12-15T22:47:01.788Z",
        "recipes": {
            "title": "Citrus Beet Salad",
            "image": "https://spoonacular.com/recipeImages/639515-556x370.jpg",
            "dishTypes": [
                "side dish"
            ],
            "cuisines": []
        }
    },
]
```

_Response (500 - Internal Server Error)_
```
{
  "message": "Internal Server Error"
}
```

## PATCH /favouritees/:id
> edit note

_Request Header_
```
{
  "access_token": "<your access token>"
}
```

_Request Body_
```
{
  "note": "string"
}
```

_Request Params_
```
{
  "id": "<id to put update into>"
}
```

_Response (200 - OK)_
```
{
    "message": "status updated"
}
```

_Response (500 - Internal Server Error)_
```
{
  "message": "Internal Server Error"
}
```

## DELETE /delete/:id
> Deletefavourite

_Request Header_
```
{
  "access_token": "<your access token>"
}
```

Request Params_
```
{
  "id": "<id to put update into>"
}
```
_Response (200 - OK)_
```
{
  "message": ""Success delete data""
}
```

_Response (500 - Internal Server Error)_
```
{
  "message": "Internal Server Error"
}
```
_Response (404 -  Not Found)_
```
{
  "message": "favourite not found"
}
```










