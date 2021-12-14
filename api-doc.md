# CINTIA - CINEMA TICKETING APPS

## Users

### Login

method : `POST`<br/>
url : `localhost:3012/users/login`<br/>
BODY :

```js
email : risang@risang.com,
password : 1234qwer
```

response: status `200 OK`

```
{
"access_token": "<access_token>",
    "user": {
        "id": 2,
        "email": "risanggani@gmail.com",
        "password": "$<hashed>",
        "createdAt": "2021-12-14T06:20:32.585Z",
        "updatedAt": "2021-12-14T06:20:32.585Z"
    }
}
```

POSTregister
http://localhost:3012/users/register
BODYurlencoded
email
risanggani@gmail.com
password
1234qwer

Example Request
register
curl --location --request POST 'http://localhost:3012/users/register' \
--data-urlencode 'email=risanggani@gmail.com' \
--data-urlencode 'password=1234qwer'
Example Response
201 Created
BodyHeader
(8)
{
"message": "new user registered"
}
movies
GETget all movies
No request URL found. It will show up here once added.

Example Request
New Request
curl --location --request GET 'localhost:3012/movies'
Example Response
200 OK
BodyHeader
(8)
View More
[
{
"id": 2,
"title": "Spider-Man: No Way Home",
"genre": "Action, Adventure, Sci-Fi",
"actors": "Zendaya, Benedict Cumberbatch, Tom Holland",
"plot": "With Spider-Man's identity now revealed, Peter asks Doctor Strange for help. When a spell goes wrong, dangerous foes from other worlds start to appear, forcing Peter to discover what it truly means to be Spider-Man.",
"poster": "https://m.media-amazon.com/images/M/MV5BMDUzNWJhZWQtYzU3Zi00M2NjLThjZjEtMTRmMjRmNzBmMWI2XkEyXkFqcGdeQXVyODIyOTEyMzY@._V1_SX300.jpg"
},
{
"id": 3,
GETget by pk
localhost:3012/movies/3

Example Request
get by pk
curl --location --request GET 'localhost:3012/movies/3'
Example Response
200 OK
BodyHeader
(8)
{
"id": 3,
"title": "Nightmare Alley",
"genre": "Action, Crime, Drama",
"actors": "Bradley Cooper, Cate Blanchett, Willem Dafoe",
"plot": "An ambitious carny with a talent for manipulating people with a few well-chosen words hooks up with a female psychiatrist who is even more dangerous than he is.",
"poster": "https://m.media-amazon.com/images/M/MV5BYWNmM2UzZGEtZTM1MC00N2Q1LTgwOTYtMzU0YjgwNWI2Y2E3XkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_SX300.jpg"
}
bookings
GETget bookings
localhost:3012/bookings
HEADERS
access_token
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJyaXNhbmdAcmlzYW5nLmNvbSIsInBhc3N3b3JkIjoiJDJiJDA1JDBMa2NHOG9sQURTMmRvYXpoYWJLdnVSOFpDdDVmSXBwYjFWT0toL1FJRXNLdjZyWU1ndE8yIiwiY3JlYXRlZEF0IjoiMjAyMS0xMi0xNFQwNDoyMTo1MC43MThaIiwidXBkYXRlZEF0IjoiMjAyMS0xMi0xNFQwNDoyMTo1MC43MThaIiwiaWF0IjoxNjM5NDU1NzUwfQ.qfvW1bMf6rrFXSgKXoGRUJBdfV9dyusgkunq1jFseQo

Example Request
get bookings
curl --location --request GET 'localhost:3012/bookings' \
--header 'access_token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJyaXNhbmdnYW5pQGdtYWlsLmNvbSIsInBhc3N3b3JkIjoiJDJiJDA1JHBpRmJ4RE9vQ2V3b1pxSm5BWlJZd3V0R2J2TFlUTHBTUjFGU05QblEuTmFwUlNBS1RkSVIuIiwiY3JlYXRlZEF0IjoiMjAyMS0xMi0xNFQwNjoyMDozMi41ODVaIiwidXBkYXRlZEF0IjoiMjAyMS0xMi0xNFQwNjoyMDozMi41ODVaIiwiaWF0IjoxNjM5NDYyODQyfQ.OdOQI4JlAKQi-UhTq8ik6CY8VbOj8RjAS_7j3ckyBUQ'
Example Response
200 OK
BodyHeader
(8)
View More
[
{
"UserId": 2,
"MovieId": 3,
"mail": null,
"qrcode": null,
"isPaid": false,
"movie": {
"id": 3,
"title": "Nightmare Alley",
"genre": "Action, Crime, Drama",
POSTadd bookings
localhost:3012/bookings/3
HEADERS
access_token
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJyaXNhbmdAcmlzYW5nLmNvbSIsInBhc3N3b3JkIjoiJDJiJDA1JDBMa2NHOG9sQURTMmRvYXpoYWJLdnVSOFpDdDVmSXBwYjFWT0toL1FJRXNLdjZyWU1ndE8yIiwiY3JlYXRlZEF0IjoiMjAyMS0xMi0xNFQwNDoyMTo1MC43MThaIiwidXBkYXRlZEF0IjoiMjAyMS0xMi0xNFQwNDoyMTo1MC43MThaIiwiaWF0IjoxNjM5NDU1NzUwfQ.qfvW1bMf6rrFXSgKXoGRUJBdfV9dyusgkunq1jFseQo

Example Request
add bookings
curl --location --request POST 'localhost:3012/bookings/4' \
--header 'access_token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJyaXNhbmdnYW5pQGdtYWlsLmNvbSIsInBhc3N3b3JkIjoiJDJiJDA1JHBpRmJ4RE9vQ2V3b1pxSm5BWlJZd3V0R2J2TFlUTHBTUjFGU05QblEuTmFwUlNBS1RkSVIuIiwiY3JlYXRlZEF0IjoiMjAyMS0xMi0xNFQwNjoyMDozMi41ODVaIiwidXBkYXRlZEF0IjoiMjAyMS0xMi0xNFQwNjoyMDozMi41ODVaIiwiaWF0IjoxNjM5NDYyODQyfQ.OdOQI4JlAKQi-UhTq8ik6CY8VbOj8RjAS_7j3ckyBUQ'
Example Response
201 Created
BodyHeader
(8)
{
"UserId": 2,
"MovieId": 4,
"updatedAt": "2021-12-14T07:58:17.842Z",
"createdAt": "2021-12-14T07:58:17.842Z",
"mail": null,
"qrcode": null,
"isPaid": false
}
DELcancel bookings
No request URL found. It will show up here once added.
HEADERS
access_token
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJyaXNhbmdAcmlzYW5nLmNvbSIsInBhc3N3b3JkIjoiJDJiJDA1JDBMa2NHOG9sQURTMmRvYXpoYWJLdnVSOFpDdDVmSXBwYjFWT0toL1FJRXNLdjZyWU1ndE8yIiwiY3JlYXRlZEF0IjoiMjAyMS0xMi0xNFQwNDoyMTo1MC43MThaIiwidXBkYXRlZEF0IjoiMjAyMS0xMi0xNFQwNDoyMTo1MC43MThaIiwiaWF0IjoxNjM5NDU1NzUwfQ.qfvW1bMf6rrFXSgKXoGRUJBdfV9dyusgkunq1jFseQo

Example Request
cancel bookings
curl --location --request DELETE 'localhost:3012/bookings/3' \
--header 'access_token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJyaXNhbmdnYW5pQGdtYWlsLmNvbSIsInBhc3N3b3JkIjoiJDJiJDA1JHBpRmJ4RE9vQ2V3b1pxSm5BWlJZd3V0R2J2TFlUTHBTUjFGU05QblEuTmFwUlNBS1RkSVIuIiwiY3JlYXRlZEF0IjoiMjAyMS0xMi0xNFQwNjoyMDozMi41ODVaIiwidXBkYXRlZEF0IjoiMjAyMS0xMi0xNFQwNjoyMDozMi41ODVaIiwiaWF0IjoxNjM5NDYyODQyfQ.OdOQI4JlAKQi-UhTq8ik6CY8VbOj8RjAS_7j3ckyBUQ'
Example Response
200 OK
BodyHeader
(8)
{
"message": "Booking Successfully Cancelled"
}
