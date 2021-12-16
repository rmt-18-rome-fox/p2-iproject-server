# Movie API Documentation

## Endpoints :

List of available endpoints:

- `POST /users/register`
- `POST /fans/register`
- `POST /login`
- `POST /authGoogle`
- `GET /standing`
- `GET /news`
- `GET /post`
- `POST /post`
- `GET /likes`
- `POST /likes/:postId`
- `DELETE /likes/:likeId`

&nbsp;

## 1. POST /users/register

Request:

- body:

```json
{
  "name": "string",
  "username": "string",
  "email": "string",
  "password": "string",
  "role": "default as admin",
}
```

_Response (201 - Created)_

```json
{
  "name": "string",
  "username": "string",
  "email": "string"
}
```

_Response (400 - SequelizeValidationError OR SequelizeUniqueConstrainError)_

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
  "message": "username is required"
}
OR
{
  "message": "Password is required"
}
```

&nbsp;

## 2. POST /fans/register

Request:

- body:

```json
{
  "name": "string",
  "username": "string",
  "email": "string",
  "password": "string",
  "role": "default as fans",
}
```

_Response (201 - Created)_

```json
{
  "name": "string",
  "username": "string",
  "email": "string"
}
```

_Response (400 - SequelizeValidationError OR SequelizeUniqueConstrainError)_

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
  "message": "username is required"
}
OR
{
  "message": "Password is required"
}
```

&nbsp;

## 3. POST /login

Request:

- body:

```json
{
  "username": "string",
  "password": "string"
}
```

_Response (200 - OK)_

```json
{
  "access_token": "string"
}
{
  "id": "integer",
  "username": "string",
  "email": "string"
}
```

_Response (400 - Bad Request)_

```json
{
  "message": "Username is required"
}
OR
{
  "message": "Password is required"
}
```

_Response (401 - Unauthorized)_

```json
{
  "message": "You put the wrong username/password"
}
```

&nbsp;


## 4. POST /authGoogle

Request:

- body:

```json
{
  "idToken": "string",
}
```

_Response (200 - OK)_

```json
{
  "token": "string",
  "dataFromGoogle": {
    "id": "integer",
    "email": "string",
  }
}
```

&nbsp;



Request:

- body:

```json
{
  "username": "string",
  "email": "string",
  "password": "string",
  "role": "default as customer",
  "phoneNumber": "string",
  "address": "string"
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

_Response (400 - SequelizeValidationError OR SequelizeUniqueConstrainError)_

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
  "message": "username is required"
}
OR
{
  "message": "Password is required"
}
```

&nbsp;



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
  "token": "string"
}
```

_Response (400 - Bad Request)_

```json
{
  "message": "Email is required"
}
OR
{
  "message": "Password is required"
}
```

_Response (401 - Unauthorized)_

```json
{
  "message": "You put the wrong email/password"
}
```

&nbsp;

## 5. GET /standing

Description:
- Get standing table from 3rd api

- headers: 

```json
{
  "access_token": "string"
}
```

link:

-"https://v3.football.api-sports.io/"



_Response (200 - OK)_

```json
[
    {
        "rank": 1,
        "team": {
            "id": 50,
            "name": "Manchester City",
            "logo": "https://media.api-sports.io/football/teams/50.png"
        },
        "points": 41,
        "goalsDiff": 31,
        "group": "Premier League",
        "form": "WWWWW",
        "status": "same",
        "description": "Promotion - Champions League (Group Stage)",
        "all": {
            "played": 17,
            "win": 13,
            "draw": 2,
            "lose": 2,
            "goals": {
                "for": 40,
                "against": 9
            }
        },
        "home": {
            "played": 9,
            "win": 7,
            "draw": 1,
            "lose": 1,
            "goals": {
                "for": 25,
                "against": 3
            }
        },
        "away": {
            "played": 8,
            "win": 6,
            "draw": 1,
            "lose": 1,
            "goals": {
                "for": 15,
                "against": 6
            }
        },
        "update": "2021-12-15T00:00:00+00:00"
    },
    {
        "rank": 2,
        "team": {
            "id": 40,
            "name": "Liverpool",
            "logo": "https://media.api-sports.io/football/teams/40.png"
        },
        "points": 37,
        "goalsDiff": 33,
        "group": "Premier League",
        "form": "WWWWW",
        "status": "same",
        "description": "Promotion - Champions League (Group Stage)",
        "all": {
            "played": 16,
            "win": 11,
            "draw": 4,
            "lose": 1,
            "goals": {
                "for": 45,
                "against": 12
            }
        },
        "home": {
            "played": 8,
            "win": 5,
            "draw": 3,
            "lose": 0,
            "goals": {
                "for": 19,
                "against": 5
            }
        },
        "away": {
            "played": 8,
            "win": 6,
            "draw": 1,
            "lose": 1,
            "goals": {
                "for": 26,
                "against": 7
            }
        },
        "update": "2021-12-15T00:00:00+00:00"
    },
    ...,
]
```

&nbsp;

## 6. GET /news

Description:
- Get sport news from 3rd api

- headers: 

```json
{
  "access_token": "string"
}
```

link:

-"http://api.mediastack.com/v1/"



_Response (200 - OK)_

```json
{
    "pagination": {
        "limit": 15,
        "offset": 0,
        "count": 15,
        "total": 3896
    },
    "data": [
        {
            "author": null,
            "title": "Why some states are sending transgender athletes to the sidelines",
            "description": "As another school year begins, more student-athletes than ever before are being denied opportunities by their own state legislatures. What's going on? And why?",
            "url": "https://www.espn.com/espn/story/_/id/32115820/young-transgender-athletes-caught-middle-states-debates",
            "source": "ESPN",
            "image": "https://a.espncdn.com/photo/2021/0831/r902738_1296x729_16-9.jpg",
            "category": "sports",
            "language": "en",
            "country": "us",
            "published_at": "2021-09-01T11:30:14+00:00"
        },
        {
            "author": null,
            "title": "Azarenka: No vax mandate for players 'bizarre'",
            "description": "Victoria Azarenka said she doesn't see the point of \"stalling\" in making the COVID-19 vaccine mandatory for players.",
            "url": "https://www.espn.com/tennis/story/_/id/32128519/victoria-azarenka-bizarre-fans-not-players-need-vaccinated-covid-19",
            "source": "ESPN",
            "image": "https://a.espncdn.com/photo/2021/0606/r863747_600x400_3-2.jpg",
            "category": "sports",
            "language": "en",
            "country": "us",
            "published_at": "2021-09-01T22:15:14+00:00"
        },
        {
            "author": null,
            "title": "Weather disrupts play at US Open despite roof",
            "description": "Rain pelted down the gaps in the retractable roof of Louis Armstrong Stadium on Wednesday night, disrupting second-round play at the US Open.",
            "url": "https://www.espn.com/tennis/story/_/id/32130028/weather-disrupts-us-open-play-louis-armstrong-stadium-retractable-roof",
            "source": "ESPN",
            "image": "https://a.espncdn.com/photo/2021/0902/r903580_600x600_1-1.jpg",
            "category": "sports",
            "language": "en",
            "country": "us",
            "published_at": "2021-09-02T03:35:14+00:00"
        },
        {
            "author": null,
            "title": "Can Mac Jones change the narrative of Alabama QBs in the NFL?",
            "description": "Crimson Tide quarterbacks have done little since Bart Starr, Joe Namath and Ken Stabler, but New England's rookie is in position to make an impact.",
            "url": "https://www.espn.com/nfl/story/_/id/32127608/can-new-england-patriots-mac-jones-change-narrative-alabama-qbs-nfl",
            "source": "ESPN",
            "image": "https://a.espncdn.com/photo/2021/0901/r903357_608x342_16-9.jpg",
            "category": "sports",
            "language": "en",
            "country": "us",
            "published_at": "2021-09-02T11:45:13+00:00"
        },
        {
            "author": null,
            "title": "Jacksonville to host Packers-Saints in Week 1",
            "description": "Jacksonville's TIAA Bank Field will be the site of the New Orleans Saints' Week 1 home game against the Green Bay Packers, the NFL announced Wednesday.",
            "url": "https://www.espn.com/nfl/story/_/id/32126581/jacksonville-host-new-orleans-saints-opener-green-bay-packers",
            "source": "ESPN",
            "image": "https://a.espncdn.com/photo/2020/0911/r744149_1296x864_3-2.jpg",
            "category": "sports",
            "language": "en",
            "country": "us",
            "published_at": "2021-09-01T16:30:15+00:00"
        },
    ...,
    ]
}
```

&nbsp;

## 7. GET /post

Description:
- GET all posts

Request:

- headers: 

```json
{
  "access_token": "string"
}
```

_Response (200 - OK)_

```json
[
    {
        "id": 5,
        "imgUrl": "https://ik.imagekit.io/4ixf18vjvne/uefa_N7Oyo82vT8_.jpg",
        "caption": "This organizations kinda bullshit",
        "UserId": 3,
        "createdAt": "2021-12-15T21:45:15.235Z",
        "updatedAt": "2021-12-15T21:45:15.235Z",
        "User": {
            "id": 3,
            "name": "Mas Ganteng",
            "username": "siGanteng",
            "email": "ganteng@mail.com",
            "password": "$2b$08$DfDTKAeHq/40GIHhCIPUUOLBANsZXS75T3FVcp0U8vbg603SQX4QK",
            "role": "fans",
            "createdAt": "2021-12-15T21:40:13.968Z",
            "updatedAt": "2021-12-15T21:40:13.968Z"
        }
    },
    {
        "id": 4,
        "imgUrl": "https://ik.imagekit.io/4ixf18vjvne/newcastle_pfo4wylDK.jpg",
        "caption": "Newcastle is the richest team righ now, with their new owner",
        "UserId": 1,
        "createdAt": "2021-12-15T19:20:31.464Z",
        "updatedAt": "2021-12-15T19:20:31.464Z",
        "User": {
            "id": 1,
            "name": "fans one",
            "username": "fans-1",
            "email": "fans-1@mail.com",
            "password": "$2b$08$BvbV9Zspsn.ZoVa5mxL88u3mY/7ketjxtQrCzpcKOo5JK4wDEcA9W",
            "role": "fans",
            "createdAt": "2021-12-14T18:04:57.712Z",
            "updatedAt": "2021-12-14T18:04:57.712Z"
        }
    },
    {
        "id": 3,
        "imgUrl": "https://ik.imagekit.io/4ixf18vjvne/timo_hM83hp_A3.jpg",
        "caption": "Timo needs to learn how to shoot again",
        "UserId": 1,
        "createdAt": "2021-12-15T19:17:16.268Z",
        "updatedAt": "2021-12-15T19:17:16.268Z",
        "User": {
            "id": 1,
            "name": "fans one",
            "username": "fans-1",
            "email": "fans-1@mail.com",
            "password": "$2b$08$BvbV9Zspsn.ZoVa5mxL88u3mY/7ketjxtQrCzpcKOo5JK4wDEcA9W",
            "role": "fans",
            "createdAt": "2021-12-14T18:04:57.712Z",
            "updatedAt": "2021-12-14T18:04:57.712Z"
        }
    },
    {
        "id": 2,
        "imgUrl": "https://ik.imagekit.io/4ixf18vjvne/edouard-mendy_hAXjzChQM-.jpeg",
        "caption": "This goalkeeper is the best gk rn, he is Mendy plays in Chelsea",
        "UserId": 1,
        "createdAt": "2021-12-14T18:10:21.827Z",
        "updatedAt": "2021-12-14T18:10:21.827Z",
        "User": {
            "id": 1,
            "name": "fans one",
            "username": "fans-1",
            "email": "fans-1@mail.com",
            "password": "$2b$08$BvbV9Zspsn.ZoVa5mxL88u3mY/7ketjxtQrCzpcKOo5JK4wDEcA9W",
            "role": "fans",
            "createdAt": "2021-12-14T18:04:57.712Z",
            "updatedAt": "2021-12-14T18:04:57.712Z"
        }
    },
    ...,
]
```

&nbsp;

## 8. POST /post
-Added new post
Request:

- headers: 

```json
{
  "access_token": "string"
}
```

```json
{
  "userId": "req.user.id",
  "img": "req.urlSent"
}
```

_Response (201 - OK)_

```json
{
        "id": 5,
        "imgUrl": "https://ik.imagekit.io/4ixf18vjvne/uefa_N7Oyo82vT8_.jpg",
        "caption": "This organizations kinda bullshit",
        "UserId": 3,
        "createdAt": "2021-12-15T21:45:15.235Z",
        "updatedAt": "2021-12-15T21:45:15.235Z",
}
```

&nbsp;

## 9. GET /likes

Description:
- GET all likes

Request:

- headers: 

```json
{
  "access_token": "string"
}
```

_Response (200 - OK)_

```json
[
    {
        "id": 3,
        "UserId": 1,
        "PostId": 4,
        "createdAt": "2021-12-15T21:08:30.385Z",
        "updatedAt": "2021-12-15T21:08:30.385Z",
        "Post": {
            "id": 4,
            "imgUrl": "https://ik.imagekit.io/4ixf18vjvne/newcastle_pfo4wylDK.jpg",
            "caption": "Newcastle is the richest team righ now, with their new owner",
            "UserId": 1,
            "createdAt": "2021-12-15T19:20:31.464Z",
            "updatedAt": "2021-12-15T19:20:31.464Z",
            "User": {
                "id": 1,
                "name": "fans one",
                "username": "fans-1",
                "email": "fans-1@mail.com",
                "password": "$2b$08$BvbV9Zspsn.ZoVa5mxL88u3mY/7ketjxtQrCzpcKOo5JK4wDEcA9W",
                "role": "fans",
                "createdAt": "2021-12-14T18:04:57.712Z",
                "updatedAt": "2021-12-14T18:04:57.712Z"
            }
        }
    },
    {
        "id": 2,
        "UserId": 1,
        "PostId": 2,
        "createdAt": "2021-12-14T18:30:27.774Z",
        "updatedAt": "2021-12-14T18:30:27.774Z",
        "Post": {
            "id": 2,
            "imgUrl": "https://ik.imagekit.io/4ixf18vjvne/edouard-mendy_hAXjzChQM-.jpeg",
            "caption": "This goalkeeper is the best gk rn, he is Mendy plays in Chelsea",
            "UserId": 1,
            "createdAt": "2021-12-14T18:10:21.827Z",
            "updatedAt": "2021-12-14T18:10:21.827Z",
            "User": {
                "id": 1,
                "name": "fans one",
                "username": "fans-1",
                "email": "fans-1@mail.com",
                "password": "$2b$08$BvbV9Zspsn.ZoVa5mxL88u3mY/7ketjxtQrCzpcKOo5JK4wDEcA9W",
                "role": "fans",
                "createdAt": "2021-12-14T18:04:57.712Z",
                "updatedAt": "2021-12-14T18:04:57.712Z"
            }
        }
    },
    {
        "id": 1,
        "UserId": 1,
        "PostId": 2,
        "createdAt": "2021-12-14T18:10:47.421Z",
        "updatedAt": "2021-12-14T18:10:47.421Z",
        "Post": {
            "id": 2,
            "imgUrl": "https://ik.imagekit.io/4ixf18vjvne/edouard-mendy_hAXjzChQM-.jpeg",
            "caption": "This goalkeeper is the best gk rn, he is Mendy plays in Chelsea",
            "UserId": 1,
            "createdAt": "2021-12-14T18:10:21.827Z",
            "updatedAt": "2021-12-14T18:10:21.827Z",
            "User": {
                "id": 1,
                "name": "fans one",
                "username": "fans-1",
                "email": "fans-1@mail.com",
                "password": "$2b$08$BvbV9Zspsn.ZoVa5mxL88u3mY/7ketjxtQrCzpcKOo5JK4wDEcA9W",
                "role": "fans",
                "createdAt": "2021-12-14T18:04:57.712Z",
                "updatedAt": "2021-12-14T18:04:57.712Z"
            }
        }
    }
]
```

&nbsp;

## 10. POST /likes/:postId
-Like post
Request:

- headers: 

```json
{
  "access_token": "string"
}
```
-params:
```json
{
  "postId": "integer",
}
```

_Response (201 - OK)_

```json
{
        "id": 5,
        "imgUrl": "https://ik.imagekit.io/4ixf18vjvne/uefa_N7Oyo82vT8_.jpg",
        "caption": "This organizations kinda bullshit",
        "UserId": 3,
        "createdAt": "2021-12-15T21:45:15.235Z",
        "updatedAt": "2021-12-15T21:45:15.235Z",
}
```

&nbsp;

## 11. DELETE /post/:likeId
-Delete like
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
  "likeId": "integer",
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

_Response (500 - Internal Server Error)_

```json
{
  "message": "Internal server error"
}
```