# p2-cms-integration-server
CMS Integration - Server

## Link Heroku:
https://news-verse.herokuapp.com/


List of available endpoints:
# NEWS
- `GET /news`
- `GET /news/:id`
- `POST /news`
- `PUT /news/:id`
- `PATCH /news/:id`
- `DELETE /news/:id`

# HISTORY
- `GET /news/history`

# LOGIN & REGISTER
- `POST /`
- `POST /:id`

# CATEGORY
- `GET /category`

# IMAGE UPLOAD
- `POST /image`

&nbsp;


## 1. GET /news

description:
- Get all news from database

req.headers: 
- access_token

_Response (200 - OK)_

```json
[
    {
        "id": 1,
        "title": "MediaTek Sindir Qualcomm, Sebut Punya Masalah Panas",
        "content": "MediaTek baru-baru ini memperkenalkan chipset terbarunya, Dimensity 9000, yang dibuat dengan fabrikasi 4nm. Dimensity 9000 digadang-gadang bakal menjadi kompetitor kuat untuk chipset flagship generasi terbaru Qualcomm yang bakal hadir pada 2022 mendatang. Dimensity 9000 diumumkan setelah Qualcomm dilanda isu terkait masalah panas berlebih alias overheat, di chipset terkuat mereka saat ini yakni Snapdragon 888 dan 888 Plus.",
        "imgUrl": "https://asset.kompas.com/crops/AegNjONGeY8-xf0nw3iqTQo2uZU=/40x0:625x390/750x500/data/photo/2014/04/30/1315112mediatek780x390.jpg",
        "CategoryId": 1,
        "AuthorId": 1,
        "createdAt": "2021-11-22T14:09:50.479Z",
        "updatedAt": "2021-11-22T14:09:50.479Z"
    },
    {
        "id": 3,
        "title": "Memotret dengan Kamera Xiaomi 11T Pro, Sebagus Apa Jepretannya?",
        "content": "Xiaomi 11T 5G dan 11T Pro 5G merupakan dua ponsel pertama Xiaomi di Indonesia yang tidak lagi mengusung embel-embel brand \"Mi\". Dari keduanya, Xiaomi 11T Pro diposisikan sebagai smartphone flagship model paling atas dengan harga jual Rp 7-7,5 juta. Ponsel ini memiliki sejumlah nilai jual utama, seperti layar yang mendukung refresh rate 120 Hz, fitur fast charging 120 watt,  serta chip teratas dari Qualcomm, Snapdragon 888. Selain itu, Xiaomi juga membekali Xiaomi 11T Pro dengan tiga kamera belakang yang terdiri dari kamera utama 108 MP (f/1.8, 26mm) PDAF, kamera ultra wide 8 MP (f/2.2, 120 derajat), dan kamera telemacro 5 MP (f/2.4, 50mm) AF. Kamera depannya beresolusi 16 MP (f/2.5).",
        "imgUrl": "https://asset.kompas.com/crops/qM6NGDn7msq2ICmvuefekyxB3qo=/0x271:4608x3343/750x500/data/photo/2021/11/21/6199dd491eb0c.jpg",
        "CategoryId": 1,
        "AuthorId": 1,
        "createdAt": "2021-11-23T03:33:06.398Z",
        "updatedAt": "2021-11-23T03:33:06.398Z"
    },
    ...
]
```


## 2. GET /news/:id

description:
- Get a news from database

req.headers: 
- access_token

_Response (200 - OK)_

```json
{
    "id": 1,
    "title": "MediaTek Sindir Qualcomm, Sebut Punya Masalah Panas",
    "content": "MediaTek baru-baru ini memperkenalkan chipset terbarunya, Dimensity 9000, yang dibuat dengan fabrikasi 4nm. Dimensity 9000 digadang-gadang bakal menjadi kompetitor kuat untuk chipset flagship generasi terbaru Qualcomm yang bakal hadir pada 2022 mendatang. Dimensity 9000 diumumkan setelah Qualcomm dilanda isu terkait masalah panas berlebih alias overheat, di chipset terkuat mereka saat ini yakni Snapdragon 888 dan 888 Plus.",
    "imgUrl": "https://asset.kompas.com/crops/AegNjONGeY8-xf0nw3iqTQo2uZU=/40x0:625x390/750x500/data/photo/2014/04/30/1315112mediatek780x390.jpg",
    "CategoryId": 1,
    "AuthorId": 1,
    "createdAt": "2021-11-23T14:27:25.325Z",
    "updatedAt": "2021-11-23T14:27:25.325Z"
}
```

## 3. POST /news

description:
- Add a news to database

req.headers: 
- access_token

_Response (201 - OK)_

```json
{
    "id": 3,
    "title": "Memotret dengan Kamera Xiaomi 11T Pro, Sebagus Apa Jepretannya?",
    "content": "Xiaomi 11T 5G dan 11T Pro 5G merupakan dua ponsel pertama Xiaomi di Indonesia yang tidak lagi mengusung embel-embel brand \"Mi\". Dari keduanya, Xiaomi 11T Pro diposisikan sebagai smartphone flagship model paling atas dengan harga jual Rp 7-7,5 juta. Ponsel ini memiliki sejumlah nilai jual utama, seperti layar yang mendukung refresh rate 120 Hz, fitur fast charging 120 watt,  serta chip teratas dari Qualcomm, Snapdragon 888. Selain itu, Xiaomi juga membekali Xiaomi 11T Pro dengan tiga kamera belakang yang terdiri dari kamera utama 108 MP (f/1.8, 26mm) PDAF, kamera ultra wide 8 MP (f/2.2, 120 derajat), dan kamera telemacro 5 MP (f/2.4, 50mm) AF. Kamera depannya beresolusi 16 MP (f/2.5).",
    "imgUrl": "https://asset.kompas.com/crops/qM6NGDn7msq2ICmvuefekyxB3qo=/0x271:4608x3343/750x500/data/photo/2021/11/21/6199dd491eb0c.jpg",
    "CategoryId": 1,
    "AuthorId": 1,
    "updatedAt": "2021-11-23T03:33:06.398Z",
    "createdAt": "2021-11-23T03:33:06.398Z"
}
```


## 4. PUT /news:id

description:
- Edit a news from database

req.headers: 
- access_token (ADMIN & AUTHOR)

_Response (200 - OK)_

```json
{
    "id": 5,
    "title": "ubah title dri iphone ke xiaomi",
    "content": "ini ubah content news title xiaomi 11 t pro ke iphone 11",
    "imgUrl": "https://asset.kompas.com/crops/qM6NGDn7msq2ICmvuefekyxB3qo=/0x271:4608x3343/750x500/data/photo/2021/11/21/6199dd491eb0c.jpg",
    "CategoryId": 1,
    "AuthorId": 1,
    "createdAt": "2021-11-23T16:00:18.967Z",
    "updatedAt": "2021-11-23T16:03:03.992Z"
}
```


## 5. PATCH /news:id

description:
- Edit a news from database

req.headers: 
- access_token (ONLY ADMIN)

_Response (200 - OK)_

```json
"inactive"
```

## 6. DELETE /news:id

description:
- Delete a news from database

- access_token (ADMIN & AUTHOR)

_Response (200 - OK)_

```json
{
    "message": "News id 5 succes to delete"
}
```


## 7. POST /login

description:
- Login

_Response (200 - OK)_

```json
{
    "acces_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJ0b25kaWtpYW5kaWthIiwiaWF0IjoxNjM3NjgyMTA3fQ.BS8uNNwr0sJqSg3OtYazrWlzGHUdoi8s-K0rBM6M5yY"
}
```


## 8. POST /register

description:
- Login

_Response (201 - OK)_

```json
{
    "id": 8,
    "fullName": "Tondiki Andika2",
    "username": "tondikiandika2",
    "password": "$2a$10$vAvZD7CGr2L8nb3GXzUNie4.tusNKxaU5EZzirRlaoepsYr3Mmwba",
    "email": "tondikigg@gmail.com",
    "age": 18,
    "gender": "Male",
    "role": "admin",
    "updatedAt": "2021-11-23T16:13:05.593Z",
    "createdAt": "2021-11-23T16:13:05.593Z"
}
```

## 9. GET /category

description:
- get all category news from database

_Response (200 - OK)_

```json
[
    {
        "id": 1,
        "name": "Marvel",
        "createdAt": "2021-11-29T05:47:02.364Z",
        "updatedAt": "2021-11-29T05:47:02.364Z"
    },
    {
        "id": 2,
        "name": "DC",
        "createdAt": "2021-11-29T05:47:02.364Z",
        "updatedAt": "2021-11-29T05:47:02.364Z"
    }
]
```

## 10. POST /image

description:
- upload image

_Response (201 - OK)_

```json
"https://ik.imagekit.io/fnzl2pmmqv2d/Screenshot_from_2021-11-26_14-19-07_aT-285yvEkX.png"
```

## 11. GET /news/history

description:
- get all history from database.

req.headers: 
- access_token

_Response (200 - OK)_

```json
[
    {
        "id": 15,
        "EntityId": 1,
        "title": "ubah title id 1",
        "description": "News with id 1 status has been updated from active into active",
        "updatedBy": "tondikiandika",
        "createdAt": "2021-11-30T10:44:01.244Z",
        "updatedAt": "2021-11-30T10:44:01.244Z"
    },
    {
        "id": 14,
        "EntityId": 1,
        "title": "ubah title id 1",
        "description": "news with id 1 status has been updated from active into active",
        "updatedBy": "tondikiandika",
        "createdAt": "2021-11-30T10:38:25.450Z",
        "updatedAt": "2021-11-30T10:38:25.450Z"
    },
    ...
]
```