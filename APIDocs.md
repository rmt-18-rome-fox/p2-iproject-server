# Movie API Documentation

## Endpoints :

List of available endpoints:

- `POST /register`
- `POST /login`
- `GET /user/characters`
- `DELETE /user/characters:id`
- `POST /user/characters`
- `GET /classes`
- `GET /races`
- `GET /spells`
- `GET /avatar`

&nbsp;

## 1. POST /register

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
OR
{
  "message": "Password is required"
}
OR
{
  "message": "Minimum password length is 5"
}
```

&nbsp;

## 2. POST /login

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
  "message": "Email/password is empty"
}
```

_Response (401 - Unauthorized)_

```json
{
  "message": "Invalid email/password"
}
```

&nbsp;

## 3. GET /user/characters

Description:

- Get user characters from database

_Response (200 - OK)_

```json
[
  {
	"id": 1,
	"name": "testing",
	"gender": "male",
	"race": "dwarf",
	"className": "conjurer",
	"spell": "conjuration,shapeshift",
	"imageUrl": "https://i.pinimg.com/originals/ed/f7/04/edf70416e42f0d9da0de7d7e9f451156.png",
	"UserId": 1,
  },
  ...,
],
```

&nbsp;

## 4. DELETE /user/characters/:id

Description:

- Delete user character by id

Request:

- params:

```json
{
  "id": "integer (required)"
}
```

_Response (200 - OK)_

```json
{
  "message": "Character testing successfully deleted"
}
```

_Response (403 - Forbidden)_

```json
{
  "message": "You are not allowed"
}
```

_Response (404 - Not Found)_

```json
{
  "message": "Product not found"
}
```

## 5. POST /user/characters

Description:

- add character into user

Request:

- body:

```json
{
  "name": "testing",
  "gender": "male",
  "race": "dwarf",
  "className": "conjurer",
  "spell": "conjuration,shapeshift",
  "imageUrl": "https://i.pinimg.com/originals/ed/f7/04/edf70416e42f0d9da0de7d7e9f451156.png"
}
```

_Response (201 - Created)_

```json
{
  "id": 1,
  "name": "testing",
  "gender": "male",
  "race": "dwarf",
  "className": "conjurer",
  "spell": "conjuration,shapeshift",
  "imageUrl": "https://i.pinimg.com/originals/ed/f7/04/edf70416e42f0d9da0de7d7e9f451156.png",
  "UserId": 1,
  "updatedAt": "2021-12-15T08:03:37.772Z",
  "createdAt": "2021-12-15T08:03:37.772Z"
}
```

&nbsp;

## 6. GET /classes

Description:

- Get classes from 3rd party DnD-api

_Response (200 - OK)_

```json
{
	"count": 12,
	"results": [
		{
			"index": "barbarian",
			"name": "Barbarian",
			"url": "/api/classes/barbarian"
		},
		{
			"index": "bard",
			"name": "Bard",
			"url": "/api/classes/bard"
		},
		...,
	]
}
```

&nbsp;

## 7. GET /races

Description:

- Get races from 3rd party DnD-api

_Response (200 - OK)_

```json
{
	"count": 9,
	"results": [
		{
			"index": "dragonborn",
			"name": "Dragonborn",
			"url": "/api/races/dragonborn"
		},
		{
			"index": "dwarf",
			"name": "Dwarf",
			"url": "/api/races/dwarf"
		},
		...,
	]
}
```

&nbsp;

## 8. GET /spells

Description:

- Get spells from 3rd party DnD-api

_Response (200 - OK)_

```json
{
	"count": 319,
	"results": [
		{
			"index": "acid-arrow",
			"name": "Acid Arrow",
			"url": "/api/spells/acid-arrow"
		},
		{
			"index": "acid-splash",
			"name": "Acid Splash",
			"url": "/api/spells/acid-splash"
		},
		...,
	]
}
```

&nbsp;

## 9. GET /avatar

Description:

- Get list of image url from 3rd party imsea-api

_Response (200 - OK)_

```json
{
	"count": 12,
	"results": [
		{
			"index": "barbarian",
			"name": "Barbarian",
			"url": "/api/classes/barbarian"
		},
		{
			"index": "bard",
			"name": "Bard",
			"url": "/api/classes/bard"
		},
		...,
	]
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
