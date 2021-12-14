# Movie API Documentation

## Endpoints :

List of available endpoints:

- `POST /register`
- `POST /login`
- `GET /movies`
- `POST /movies`
- `GET /movies/:id`
- `PUT /movies/:id`
- `DELETE /movies/:id`

&nbsp;

## 1. POST /register

Request:

- body:

```json
{
  "username": "string",
  "email": "string",
  "password": "string",
  "role": "string",
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

_Response (400 - Bad Request)_

```json


{
  "message": "Fill the username!"
}
OR
{
  "message": "Username is can not be null"
}
OR
{
  "message": "Username is can not be null"
}
{
  "message": "Fill the email!"
}
OR
{
  "message": "Email is can not be null"
}
OR
{
  "message": "False email format"
}
OR
{
  "message": "Email must be unique"
}
OR
{
  "message": "Fill the password!"
}
OR
{
  "message": "Password is can not be null"
}
OR
{
  "message": "The password must contain 8 charaters"
}
OR
{
  "message": "Fill the phone number !"
}
OR
{
  "message": "Phone number is can not be null"
}
OR
{
  "message": "Fill the address!"
}
OR
{
  "message": "Address is can not be null"
}

```

&nbsp;

## 2. POST /login

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
  "message": "Invalid email/password"
}
```

&nbsp;


## 3. GET /movies

Description:
- Get all movie from database

Request:

- headers: 

```json
{
  token
}
```

_Response (200 - OK)_

```json
[
  {
    "id": 1,
    "title": "DORA",
    "synopsis": "DOR DOR DOR DORA",
    "trailerUrl": "https://image.tmdb.org/t/p/w500/rjkmN1dniUHVYAtwuV3Tji7FsDO.jpg",
    "imgUrl": "https://image.tmdb.org/t/p/w500/rjkmN1dniUHVYAtwuV3Tji7FsDO.jpg",
    "rating": 8.1,
    "GenreId": 5,
    "UserId": 1,
    "createdAt": "2021-11-22T17:30:22.419Z",
    "updatedAt": "2021-11-22T18:22:17.328Z"
  },
  {
    "id": 2,
    "title": "John Wax",
    "synopsis": "John Wax is hitman",
    "trailerUrl": "https://image.tmdb.org/t/p/w500/rjkmN1dniUHVYAtwuV3Tji7FsDO.jpg",
    "imgUrl": "https://image.tmdb.org/t/p/w500/rjkmN1dniUHVYAtwuV3Tji7FsDO.jpg",
    "rating": 9.4,
    "GenreId": 2,
    "UserId": 1,
    "updatedAt": "2021-11-22T18:43:31.433Z",
    "createdAt": "2021-11-22T18:43:31.433Z"
}
  ...,
]
```

&nbsp;

## 4. POST/Movie
Request:

- Headers:
```json
{
  token
}
```

- Body:
```json
{
  "title":"Dora !!! !!!"
  "synopsis":"Hehehe"
  "trailerUrl":"https://media.giphy.com/media/USxyhita3ZG2TXs8b6/giphy.gif"
  "imgUrl": "https://ik.imagekit.io/ebq3r9zrvle/rsz_anya_geraldine_ChBxfwPAF.jpg",
  "rating":7
  "GenreId":1
```

_Status: (201 - CREATED)_

- Response: 

```json
{
    "id": 3,
    "title": "Power Puff Gurl 12",
    "synopsis": "Strong gurl",
    "trailerUrl": "https://media.giphy.com/media/USxyhita3ZG2TXs8b6/giphy.gif",
    "imgUrl": "https://ik.imagekit.io/ebq3r9zrvle/pngtree-facebook-social-media-icon-design-template-vector-png-image_3654755_WddX6uG1Q.png",
    "rating": 9,
    "GenreId": 4,
    "AuthorId": 1,
    "status": "Active",
    "updatedAt": "2021-12-03T16:35:10.809Z",
    "createdAt": "2021-12-03T16:35:10.809Z"
}
```

_Status: (400 - BAD REQUEST)_

- Response: 

```json
{
    "msg": [
        "Title is can not be null",
        "Synopsis is can not be null"
    ]
}
```

## 5. PUT/Movie/:id
Request:

- Headers:
```json
{
  token
}
```

- Body:
```json
{
  "title":"Dora !!! !!!"
  "synopsis":"Hehehe"
  "trailerUrl":"https://media.giphy.com/media/USxyhita3ZG2TXs8b6/giphy.gif"
  "imgUrl": "https://ik.imagekit.io/ebq3r9zrvle/rsz_anya_geraldine_ChBxfwPAF.jpg",
  "rating":7
  "GenreId":1
}
```

_Status: (200 - OK)_

- Response :
```json
{
    {
    "id": 4,
    "title": "Dora !!! !!!",
    "synopsis": "Hehehe",
    "trailerUrl": "https://media.giphy.com/media/USxyhita3ZG2TXs8b6/giphy.gif",
    "imgUrl": "https://ik.imagekit.io/ebq3r9zrvle/hipwee-dora-the-grownup-2-700x700_6h1Tg1Gwb.jpg",
    "rating": 7,
    "GenreId": 1,
    "AuthorId": 1,
    "status": "Active",
    "createdAt": "2021-11-29T07:32:01.312Z",
    "updatedAt": "2021-12-03T16:27:59.207Z"
}
}
```

_Status: (500 - INTERNAL SERVER ERROR)_

- Response :
```json
{
    "msg": "Internal Server Error"
}
```

## 6. GET/Movie/:id
Request:

- Headers:
```json
{
  token
}
```

_Status: (200 - OK)_
- Response:

```json
{
    {
    "id": 1,
    "title": "Spiderman!",
    "synopsis": "I am Spiderman",
    "trailerUrl": "https://media.giphy.com/media/Z9cIHiGG28XkCDr3jd/giphy.gif",
    "imgUrl": "https://ik.imagekit.io/ebq3r9zrvle/rsz_anya_geraldine_ChBxfwPAF.jpg",
    "rating": 7,
    "GenreId": 1,
    "AuthorId": 1,
    "status": "Active",
    "createdAt": "2021-12-03T09:26:27.859Z",
    "updatedAt": "2021-12-03T14:27:40.850Z"
}
}
```

_Status: (404 - OK)_
- Response:

```json
{
    "msg": "Data is not found"
}
```

## 7. DELETE /movies/:id

Description:
- Delete movie by id

Request:

- headers:

```json
{
  token
}
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
  "msg": "Movie with ID 1 deleted successfully"
}
```

_Response (404 - Not Found)_

```json
{
  "msg": "Data is not found"
}
```

&nbsp;

## 8. PATCH/Movie/:id
Request:

- Headers:
```json
{
  token
}
```

_Status: (403 - FORBIDDEN ACCESS)_
- Response:

```json
{
    "msg": "Forbidden Access !"
}
```

_Status: (200 - OK)_
- Response:

```json
{
    "Movie status has been changed from Active to Inactive"
}
```

## Global Error

_Response (401 - Unauthorized)_

```json
{
  "msg": "Your token is not match"
}
```

_Response (500 - Internal Server Error)_

```json
{
  "msg": "Internal server error"
}
```
