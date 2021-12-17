# Carbon Delivery

## Models

_User_

```
- name : string, required
- email : string, required, unique
- password : string, required
```

_History_

```
- distance : integer, required
- carbonEmitted : integer, required
- description : string
```

## Relationship:

### User -> History: OneToMany

## Endpoints:

List of available endpoints:

- `POST /register`
- `POST /login`

Routes below need authentication:

- `POST /:UserId/history`
- `GET  /:UserId/history`
- `POST /api/mapbox`
- `POST /api/carbon-interface`

&nbsp;

## 1. POST /register

Request:

- body:

```json
{
  "name": "string",
  "email": "string",
  "password": "string"
}
```

_Response (201 - Created)_

```json
{
  "id": "integer",
  "name": "string"
}
```

_Response (400 - Bad Request)_

```json
{
  "message": "Name must not be empty"
}
OR
{
  "message": "Name is required"
}
OR
{
  "message": "Email is required"
}
OR
{
  "message": "Email is already in use"
}
OR
{
  "message": "Invalid email format"
}
OR
{
  "message": "Password is required"
}

```

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
  "message": "Email is required"
}
OR
{
  "message": "Password is required"
}
OR
{
  "message": "Account already exist!"
}
```

_Response (401 - Unauthorized)_

```json
{
  "message": "Invalid email/password"
}
```

&nbsp;

## 3. GET /:UserId/history

Description:
- Fetch datas of current logged in user's history of past records

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
    "id": 13,
    "distance": 1759,
    "carbonEmitted": 5,
    "description": "shipment from origin to destination",
    "createdAt": "2021-12-16T16:04:33.422Z",
    "updatedAt": "2021-12-16T16:04:33.422Z",
    "UserId": 1
  },
  {
    "id": 11,
    "distance": 1194,
    "carbonEmitted": 3,
    "description": "shipment from AH2 to  Jalan Layang Sheikh Mohammed bin Zayed",
    "createdAt": "2021-12-16T02:22:19.027Z",
    "updatedAt": "2021-12-16T02:22:19.027Z",
    "UserId": 1
  },
  ...,
]
```

&nbsp;

## 4. POST /:UserId/history

Description:
- Save current logged in user most recent record

Request:

-headers:
```json
{
  "access_token": "string"
}
```

_Response (201 - Created)_
```json
{
  "message": "Saved History"
}
```

## 5. POST /api/mapbox

Description:
- Request mapbox plugin mapbox-directions API to provide route data through mapbox API

Request:
- params:
```json
{
  "alternatives": false,
  "geometries": "geojson",
  "language": "en",
  "overview": "simplified",
  "steps": true,
  "access_token": "String"
}
```

_Response (200 - OK)_
```json
{
  "distance": "integer",
  "origin": ["longitude", "latitude"],
  "destination": ["longitude", "latitude"]
}
```

## 5. POST /api/carbon-interface

Description:
- Request Carbon Interface API to calculate user carbon footprint based on shipping activity

Request:

- headers
```json
{
  "Authorization": "Bearer carbon-interface-token"
}
```

-body
```json
{
  "type": "shipping",
  "weight_value": "integer",
  "weight_unit": "kg",
  "distance_value": "distance",
  "distance_unit": "km",
  "transport_method": "plane or truck",
}
```

_Response (200 - OK)_
```json
{
  "data": {
    "id": "4746e4ba-6605-4acc-802b-fd229a9503b4",
    "type": "estimate",
    "attributes": {
      "distance_value": "2000.0",
      "distance_unit": "km",
      "weight_value": "200.0",
      "weight_unit": "g",
      "transport_method": "truck",
      "estimated_at": "2020-07-31T13:00:04.446Z",
      "carbon_g": 25,
      "carbon_lb": 0.06,
      "carbon_kg": 0.03,
      "carbon_mt": 0.0
    }
  }
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