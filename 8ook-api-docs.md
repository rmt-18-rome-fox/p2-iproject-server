## 8ook API DOCS

&nbsp;

## Endpoints :

- `GET /information/cities`
- `POST /information/shipping`

&nbsp;

## 1. GET /information/cities

Description

- Get all cities data in Indonesia

Request

- Body
  ```json
  {
    "origin": "string",
    "destination": "string",
    "weight": "integer",
    "courier": "string"
  }
  ```

_Response (200 - OK)_

```json
{
    "cities": [
        {
            "city_id": "1",
            "province_id": "21",
            "province": "Nanggroe Aceh Darussalam (NAD)",
            "type": "Kabupaten",
            "city_name": "Aceh Barat",
            "postal_code": "23681"
        },
        {
            "city_id": "2",
            "province_id": "21",
            "province": "Nanggroe Aceh Darussalam (NAD)",
            "type": "Kabupaten",
            "city_name": "Aceh Barat Daya",
            "postal_code": "23764"
        },
        {
            "city_id": "3",
            "province_id": "21",
            "province": "Nanggroe Aceh Darussalam (NAD)",
            "type": "Kabupaten",
            "city_name": "Aceh Besar",
            "postal_code": "23951"
        },...
    ]
}
```

&nbsp;

## 2. POST /information/shipping

Description

- Get shipping information data

_Response (200 - OK)_

```json
{
  "shipping": {
    "query": {
      "origin": "1",
      "destination": "114",
      "weight": 1700,
      "courier": "jne"
    },
    "status": {
      "code": 200,
      "description": "OK"
    },
    "origin_details": {
      "city_id": "1",
      "province_id": "21",
      "province": "Nanggroe Aceh Darussalam (NAD)",
      "type": "Kabupaten",
      "city_name": "Aceh Barat",
      "postal_code": "23681"
    },
    "destination_details": {
      "city_id": "114",
      "province_id": "1",
      "province": "Bali",
      "type": "Kota",
      "city_name": "Denpasar",
      "postal_code": "80227"
    },
    "results": [
      {
        "code": "jne",
        "name": "Jalur Nugraha Ekakurir (JNE)",
        "costs": [
          {
            "service": "OKE",
            "description": "Ongkos Kirim Ekonomis",
            "cost": [
              {
                "value": 112000,
                "etd": "3-4",
                "note": ""
              }
            ]
          },
          {
            "service": "REG",
            "description": "Layanan Reguler",
            "cost": [
              {
                "value": 120000,
                "etd": "2-3",
                "note": ""
              }
            ]
          }
        ]
      }
    ]
  }
}
```

_Response (400 - Bad Request)_

```json
{
  "message": "Origin field must not be empty"
}
OR
{
  "message": "Destination field must not be empty"
}
OR
{
  "message": "Weight field must not be empty"
}
OR
{
  "message": "Courier field must not be empty"
}
```

``
