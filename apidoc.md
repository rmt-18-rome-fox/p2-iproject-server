# Game Web API Documentation

## Endpoints :

List of available endpoints:

For Users
- `POST /register`
- `POST /login`
- `POST /googleAuth`

For Games
- `POST /games`
- `GET /games`
- `GET /games/:id`

For Favorite Games
- `POST /favoritegames/:id`
- `GET /favoritegames`

For Game News
- `GET /news`






&nbsp;
## All environment variable you  need

| Env Variable Name      | Your Env Variable           |
| ------------- |-------------|
| PORT     | Your preferable Port |
| TOKEN     | Your preferable access_token For JWT      | 
| APIURL | Your Url Endpoint from Free-to-Play Games Database through https://rapidapi.com/     | 
| APIHOST |  Your Url HOST from Free-to-Play Games Database through https://rapidapi.com      | 
| APIKEY |  Your API KEY from Free-to-Play Games Database through https://rapidapi.com      | 
| APIID |  Your API ID from Free-to-Play Games Database through https://rapidapi.com      | 
| EMAIL |  Your Email for Nodemailer     | 
| PASSWORD |   Your Password for Nodemailer     | 
| NewsUrl |   Your Url Endpoint from Gaming-News through https://rapidapi.com      | 
| NewsHost | Your Url Host from Gaming-News through https://rapidapi.com      | 
| NewsKey | Your Url APIKEY from Gaming-News through https://rapidapi.com      | 
| GOOGLE_CLIENT | Your google client id from https://console.cloud.google.com/     | 

&nbsp;



## 1. POST /register

Description:
- Create New Account


Request:

- body:

```json
{
    "username" :"string",
    "email": "string",
    "password": "string",
    "role" : "string",
    "phoneNumber": "string",
    "address": "string"
}
```

_Response (201 - Created)_

```json
{
    "id" : "integer",
    "email": "string",
    "role": "string"
}
```

_Response (400 - Bad Request)_

```json
{
    "message": Email Is Required!"
}
```
OR
```json
{
    "message": "Invalid Email Format!"
}
```
OR
```json
{
    "message": "Email Must Be Unique!"
}
```
OR
```json
{
    "message": "Password Is Required!"
}
```


## 2. POST /login

Description:
- Login To Web / API

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
    "access_token": "string",
    "payload": {
        "id": "integer",
        "email": "string",
        "role": "string"
    }
}
```

_Response (400 - Bad Request)_

```json
{
    "message": "Please Insert Password"
}
```
OR
```json
{
    "message": "Please Insert Email"
}
```
_Response (401 - Unauthorized)_

```json
{
    "message": "wrong password/email"
}
```



&nbsp;

## 3. POST /googleAuth

Description:
- Register and Login to Web / Api Through Google Sign In

Request:

- body: (from Google Sign In)

```json
{
    "idToken": "string"

}
```
_Response (201 - Created)_

```json
{
    "access_token": "string",
    "newUser": {
        "id": "integer",
        "email": "string",
        "role": "string"
    }
}
```

## 4. POST /games

Description:
-  Bulk Create Games From THIRD PARTY API


Request:

- headers :
```json
{
    "access_token" : "string",
}
````

- body:

```json
{
    "title" :"string",
    "thumbnail" :"string",
    "short_description" :"string",
    "game_url" :"string",
    "genre" :"string",
    "platform" :"string",
    "publisher" :"string",
    "developer" :"string",
    "release_date" :"string",
}
```

_Response (201 - Created)_

```json

[
    {
        "id": 1,
        "title": "Dauntless",
        "thumbnail": "https://www.freetogame.com/g/1/thumbnail.jpg",
        "short_description": "A free-to-play, co-op action RPG with gameplay similar to Monster Hunter.",
        "game_url": "https://www.freetogame.com/open/dauntless",
        "genre": "MMORPG",
        "platform": "PC (Windows)",
        "publisher": "Phoenix Labs",
        "developer": "Phoenix Labs, Iron Galaxy",
        "release_date": "2019-05-21",
        "createdAt": "2021-12-16T00:50:18.027Z",
        "updatedAt": "2021-12-16T00:50:18.027Z"
    },
    {
        "id": 2,
        "title": "World of Tanks",
        "thumbnail": "https://www.freetogame.com/g/2/thumbnail.jpg",
        "short_description": "If you like blowing up tanks, with a quick and intense game style you will love this game!",
        "game_url": "https://www.freetogame.com/open/world-of-tanks",
        "genre": "Shooter",
        "platform": "PC (Windows)",
        "publisher": "Wargaming",
        "developer": "Wargaming",
        "release_date": "2011-04-12",
        "createdAt": "2021-12-16T00:50:18.027Z",
        "updatedAt": "2021-12-16T00:50:18.027Z"
    },..
]

```

_Response (400 - Bad Request)_


&nbsp;

## 5. GET /Games

Description:
- Read All Games from Database

Request:

```json
{
    "access_token" : "string",
}
```


_Response (200 - OK)_

```json
{
    "TotalPage": 1,
    "CurrentPage": 1,
    "TotalGames": 3,
    "Posts": [
        {
            "id": 32,
            "title": "Caller’s Bane",
            "thumbnail": "https://www.freetogame.com/g/33/thumbnail.jpg",
            "short_description": "The free-to-play reboot of Mojang's card/board game Scrolls. ",
            "game_url": "https://www.freetogame.com/open/callers-bane",
            "genre": "Card Game",
            "platform": "PC (Windows)",
            "publisher": "Mojang AB",
            "developer": "Mojang AB",
            "release_date": "2018-06-21",
            "createdAt": "2021-12-14T07:32:53.811Z",
            "updatedAt": "2021-12-14T07:32:53.811Z"
        },
        {
            "id": 30,
            "title": "Cosmos Invictus",
            "thumbnail": "https://www.freetogame.com/g/31/thumbnail.jpg",
            "short_description": "A strategic collectible card game developed and published by Pegnio Ltd. ",
            "game_url": "https://www.freetogame.com/open/cosmos-invictus",
            "genre": "Card Game",
            "platform": "PC (Windows)",
            "publisher": "Pegnio Ltd",
            "developer": "Pegnio Ltd",
            "release_date": "2018-06-27",
            "createdAt": "2021-12-14T07:32:53.811Z",
            "updatedAt": "2021-12-14T07:32:53.811Z"
        },...
    ]
}
```

&nbsp;


## 6. GET /games/:id

Description:
- Find One Game by ID from database

Request:
- params:

```json
{
    "id" :"integer",
}
```

- headers :
```json
{
    "access_token" : "string",
}
````


_Response (200 - OK)_

```json
{
    "id": 2,
    "title": "World of Tanks",
    "thumbnail": "https://www.freetogame.com/g/2/thumbnail.jpg",
    "short_description": "If you like blowing up tanks, with a quick and intense game style you will love this game!",
    "game_url": "https://www.freetogame.com/open/world-of-tanks",
    "genre": "Shooter",
    "platform": "PC (Windows)",
    "publisher": "Wargaming",
    "developer": "Wargaming",
    "release_date": "2011-04-12",
    "createdAt": "2021-12-14T07:32:53.811Z",
    "updatedAt": "2021-12-14T07:32:53.811Z"
}
```
_Response (404 - Not Found)_

```json
{
    "message": "Error Game Not Found"
}
```
&nbsp;



## 7. POST /favoritegames/:id

Description:
- Create New Favorite Game

Request:
- params:

```json
{
    "id" :"integer",
}
```

- headers :
```json
{
    "accesss_token" : "string",
}
````

_Response (201 - Created)_
```json
{
    "id": 31,
    "GameId": 5,
    "UserId": 20,
    "updatedAt": "2021-12-11T07:57:25.789Z",
    "createdAt": "2021-12-11T07:57:25.789Z"
}
```
_Response (400 - Bad Request)_
```json
{
    "message": "You Already Favorite This Game"
}
```

_Response (404 - Not Found)_
```json
{
    "message": "Error Game Not Found"
}
```

## 8. GET /favoritegames
Description:
- Show All Current Customer Favorite Games

Request:
- headers :
```json
{
    "accesss_token" : "string",
}
````

_Response (200 - OK)_
```json
[
    {
        "id": 1,
        "UserId": 2,
        "GameId": 2,
        "createdAt": "2021-12-14T09:29:19.322Z",
        "updatedAt": "2021-12-14T09:29:19.322Z",
        "Game": {
            "id": 2,
            "title": "World of Tanks",
            "thumbnail": "https://www.freetogame.com/g/2/thumbnail.jpg",
            "short_description": "If you like blowing up tanks, with a quick and intense game style you will love this game!",
            "game_url": "https://www.freetogame.com/open/world-of-tanks",
            "genre": "Shooter",
            "platform": "PC (Windows)",
            "publisher": "Wargaming",
            "developer": "Wargaming",
            "release_date": "2011-04-12",
            "createdAt": "2021-12-14T07:32:53.811Z",
            "updatedAt": "2021-12-14T07:32:53.811Z"
        },
        "User": {
            "email": "budi@mail.com",
            "id": 2
        }
    },
    {
        "id": 2,
        "UserId": 2,
        "GameId": 6,
        "createdAt": "2021-12-14T16:25:04.920Z",
        "updatedAt": "2021-12-14T16:25:04.920Z",
        "Game": {
            "id": 6,
            "title": "Blade and Soul",
            "thumbnail": "https://www.freetogame.com/g/6/thumbnail.jpg",
            "short_description": "A free-to-play martial arts MMORPG that tasks players with learning combination attacks.",
            "game_url": "https://www.freetogame.com/open/blade-and-soul",
            "genre": "MMORPG",
            "platform": "PC (Windows)",
            "publisher": "NCSoft",
            "developer": "NCSoft",
            "release_date": "2016-01-19",
            "createdAt": "2021-12-14T07:32:53.811Z",
            "updatedAt": "2021-12-14T07:32:53.811Z"
        },
        "User": {
            "email": "budi@mail.com",
            "id": 2
        }
    },..
]
```
## 9. GET /news
Description:
- Show Random News From THIRD PARTY API

Request:
- headers :
```json
{
    "accesss_token" : "string",
}
````
_Response (200 - OK)_

```json
[
    {
        "title": "Xbox Series X and S pre-orders open and quickly begin to sell out",
        "url": "https://www.independent.co.uk/life-style/gadgets-and-tech/xbox-series-x-s-pre-order-shops-buy-uk-amazon-currys-microsoft-smyths-b528062.html",
        "source": "independentUk"
    }
]
```

&nbsp;
## Global Error

_Response (500 - Internal Server Error)_

```json
{
    "message": "Internal server error"
}
```
_Response (401 - Unauthorized)_

```json
{
    "message": "Unauthorized"
}
```