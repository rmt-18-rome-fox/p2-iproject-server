# Movie API Documentation

## Endpoints :

List of available endpoints:

- `GET /hero`
- `POST /hero`
- `GET /her/:id`
- `POST /Register`
- `POST /Login`

&nbsp;

## 1. GET /hero

Description:
- Get all News from database

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
        "id": 1,
        "title": "Tottenham",
        "content": "C.ronaldo join ",
        "imgUrl": "https://aaaaaaaa",
        "AuthorId": 1,
        "CategoryId": 1,
        "createdAt": "2021-11-22T13:38:42.683Z",
        "updatedAt": "2021-11-22T14:36:53.211Z",
        "Category": {
            "id": 1,
            "name": "Sport",
            "createdAt": "2021-11-22T13:31:42.878Z",
            "updatedAt": "2021-11-22T13:31:42.878Z"
        }
    },
    {
        "id": 4,
        "title": "bubarnya parpol",
        "content": "bubarnya parpol",
        "imgUrl": "https://bbbbb",
        "AuthorId": 1,
        "CategoryId": 2,
        "createdAt": "2021-11-22T16:04:03.156Z",
        "updatedAt": "2021-11-22T16:04:03.156Z",
        "Category": {
            "id": 2,
            "name": "Politic",
            "createdAt": "2021-11-22T13:31:42.878Z",
            "updatedAt": "2021-11-22T13:31:42.878Z"
        }
    },
    ....,
]
```
## 2. POST /hero

Description:
- Create new News 

Request:

- headers: 

```json
{
  "access_token": "string"
}
```

_Response (200 - OK)_

```json
{
    "id": 1,
    "name": "Batman",
    "location": "bandung",
    "imgUrl": "https://ik.imagekit.io/c8mrz0dfnci/Batman_d8Ef8e-Q5.jpg",
    "UserId": 2,
    "date": "2021-12-17T00:00:00.000Z",
    "description": "ini buku saya",
    "updatedAt": "2021-12-16T04:15:33.454Z",
    "createdAt": "2021-12-16T04:15:33.454Z"
}
```
_Response (400 - Not Found)_

```json
{
  "message": "Bad Request"
}
```

## 3. GET /hero/:id


Description:
- Get News by id

Request:

- headers:

```json

```

- params:

```json
{
  "id": "integer (required)"
}
```

_Response (200 - OK)_

```json
{
    "result": {
        "id": 2,
        "name": "Batman",
        "imgUrl": "https://ik.imagekit.io/c8mrz0dfnci/209340981_351185899946491_5988536875522853749_n_ZyK_OLoiBo8.jpg",
        "location": "jakarta",
        "date": "2021-12-05T17:00:00.000Z",
        "description": null,
        "UserId": null,
        "createdAt": "2021-12-14T14:36:32.647Z",
        "updatedAt": "2021-12-14T14:36:32.647Z"
    },
    "result2": [
        {
            "id": "69",
            "name": "Batman",
            "powerstats": {
                "intelligence": "81",
                "strength": "40",
                "speed": "29",
                "durability": "55",
                "power": "63",
                "combat": "90"
            },
            "biography": {
                "full-name": "Terry McGinnis",
                "alter-egos": "No alter egos found.",
                "aliases": [
                    "Batman II",
                    "The Tomorrow Knight",
                    "The second Dark Knight",
                    "The Dark Knight of Tomorrow",
                    "Batman Beyond"
                ],
                "place-of-birth": "Gotham City, 25th Century",
                "first-appearance": "Batman Beyond #1",
                "publisher": "DC Comics",
                "alignment": "good"
            },
            "appearance": {
                "gender": "Male",
                "race": "Human",
                "height": [
                    "5'10",
                    "178 cm"
                ],
                "weight": [
                    "170 lb",
                    "77 kg"
                ],
                "eye-color": "Blue",
                "hair-color": "Black"
            },
            "work": {
                "occupation": "-",
                "base": "21st Century Gotham City"
            },
            "connections": {
                "group-affiliation": "Batman Family, Justice League Unlimited",
                "relatives": "Bruce Wayne (biological father), Warren McGinnis (father, deceased), Mary McGinnis (mother), Matt McGinnis (brother)"
            },
            "image": {
                "url": "https://www.superherodb.com/pictures2/portraits/10/100/10441.jpg"
            }
        },
        {
            "id": "70",
            "name": "Batman",
            "powerstats": {
                "intelligence": "100",
                "strength": "26",
                "speed": "27",
                "durability": "50",
                "power": "47",
                "combat": "100"
            },
            "biography": {
                "full-name": "Bruce Wayne",
                "alter-egos": "No alter egos found.",
                "aliases": [
                    "Insider",
                    "Matches Malone"
                ],
                "place-of-birth": "Crest Hill, Bristol Township; Gotham County",
                "first-appearance": "Detective Comics #27",
                "publisher": "DC Comics",
                "alignment": "good"
            },
            "appearance": {
                "gender": "Male",
                "race": "Human",
                "height": [
                    "6'2",
                    "188 cm"
                ],
                "weight": [
                    "210 lb",
                    "95 kg"
                ],
                "eye-color": "blue",
                "hair-color": "black"
            },
            "work": {
                "occupation": "Businessman",
                "base": "Batcave, Stately Wayne Manor, Gotham City; Hall of Justice, Justice League Watchtower"
            },
            "connections": {
                "group-affiliation": "Batman Family, Batman Incorporated, Justice League, Outsiders, Wayne Enterprises, Club of Heroes, formerly White Lantern Corps, Sinestro Corps",
                "relatives": "Damian Wayne (son), Dick Grayson (adopted son), Tim Drake (adopted son), Jason Todd (adopted son), Cassandra Cain (adopted ward)\nMartha Wayne (mother, deceased), Thomas Wayne (father, deceased), Alfred Pennyworth (former guardian), Roderick Kane (grandfather, deceased), Elizabeth Kane (grandmother, deceased), Nathan Kane (uncle, deceased), Simon Hurt (ancestor), Wayne Family"
            },
            "image": {
                "url": "https://www.superherodb.com/pictures2/portraits/10/100/639.jpg"
            }
        },
        {
            "id": "71",
            "name": "Batman II",
            "powerstats": {
                "intelligence": "88",
                "strength": "11",
                "speed": "33",
                "durability": "28",
                "power": "36",
                "combat": "100"
            },
            "biography": {
                "full-name": "Dick Grayson",
                "alter-egos": "Nightwing, Robin",
                "aliases": [
                    "Dick Grayson"
                ],
                "place-of-birth": "-",
                "first-appearance": "-",
                "publisher": "Nightwing",
                "alignment": "good"
            },
            "appearance": {
                "gender": "Male",
                "race": "Human",
                "height": [
                    "5'10",
                    "178 cm"
                ],
                "weight": [
                    "175 lb",
                    "79 kg"
                ],
                "eye-color": "Blue",
                "hair-color": "Black"
            },
            "work": {
                "occupation": "-",
                "base": "Gotham City; formerly Bludhaven, New York City"
            },
            "connections": {
                "group-affiliation": "Justice League Of America, Batman Family",
                "relatives": "John Grayson (father, deceased), Mary Grayson (mother, deceased), Bruce Wayne / Batman (adoptive father), Damian Wayne / Robin (foster brother), Jason Todd / Red Hood (adoptive brother), Tim Drake / Red Robin (adoptive brother), Cassandra Cain / Batgirl IV (adoptive sister)"
            },
            "image": {
                "url": "https://www.superherodb.com/pictures2/portraits/10/100/1496.jpg"
            }
        }
    ],
    "result3": {
        "coord": {
            "lon": 106.8451,
            "lat": -6.2146
        },
        "weather": [
            {
                "id": 721,
                "main": "Haze",
                "description": "haze",
                "icon": "50d"
            }
        ],
        "base": "stations",
        "main": {
            "temp": 305.98,
            "feels_like": 311.55,
            "temp_min": 304.76,
            "temp_max": 308.44,
            "pressure": 1009,
            "humidity": 58
        },
        "visibility": 5000,
        "wind": {
            "speed": 2.57,
            "deg": 50
        },
        "clouds": {
            "all": 40
        },
        "dt": 1639627913,
        "sys": {
            "type": 1,
            "id": 9383,
            "country": "ID",
            "sunrise": 1639607628,
            "sunset": 1639652556
        },
        "timezone": 25200,
        "id": 1642911,
        "name": "Jakarta",
        "cod": 200
    }
}
```

_Response (404 - Not Found)_

```json
{
  "message": "News not found"
}
```

&nbsp;


## 4. POST/Register

Description:
- Register

Request:

- headers: 

```json
{
  "access_token": "string"
}
```

_Response (200 - OK)_

```json
{
    "id": 5,
    "email": "admin4@gmail.com"
}
```
_Response (400 - Not Found)_

```json
{
  "message": "Bad Request"
}
```

## 7. POST/Login

Description:
- Login

Request:

- headers: 

```json
{
  "access_token": "string"
}
```

_Response (200 - OK)_

```json
{
    "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJhZG1pbjFAZ21haWwuY29tIiwiaWF0IjoxNjM5NjI1MzI2fQ.7eeaQhS-IvIJIhghlj1rYbZeagWTbMp9jAQ2aCvzBvQ",
    "user": {
        "id": 2,
        "email": "admin1@gmail.com",
        "role": "admin"
    }
}
```
_Response (400 - Not Found)_

```json
{
  "message": "Bad Request"
}
```
&nbsp;


{
  "message": "Bad Request"
}
```
&nbsp;

## Global Error



_Response (500 - Internal Server Error)_

```json
{
  "message": "Internal server error"
}
```