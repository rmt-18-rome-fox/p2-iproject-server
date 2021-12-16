# ArchiLine API Documentation

## Models :

_User_
```
- email : string, required, unique
- password : string, required
- role : string, required (architect || customer)
- status : boolean, required
- validateCode : string, required
```

_Profile_
```
- name : string
- phoneNumber : string
- description : string
- address : string
- imageUrl : string
- price : integer
```

_Portofolio_
```
- title : string, required
- imageUrl : string, required, url
- description : string, required
- UserId : integer, required
```

_Tag_
```
- name : string, required​
```

_PortofoliosTag_
```
- TagId : integer, required​
- PortofolioId : integer, required​
```

_Consultation_
```
- startDate : date, required​
- endDate : date, required​
- ArchitectId : integer, required
- CustomerId : integer, required
- notes : string, required
- price: string, required
- isPayed : boolean, required
```

## Relationship :

>### **Many-to-Many**
- Portofolio dan Tag memiliki relasi many to many, yang dihubungkan oleh tabel PortofoliosTag
- Customer dan Architect (keduanya User) memiliki relasi many to many, yang dihubungkan oleh tabel Consultation

## Endpoints :

List User Endpoint (Customer dan Architect sama-sama bisa menggunakan)
- `POST /register`
- `POST /login`
- `PATCH /validate`
- `POST /customer/paymentDone`

List Customer Endpoint
- `GET /customer`
- `GET /customer/profile`
- `PUT /customer/profile`
- `GET /customer/architects`
- `GET /customer/architects/:architectId`
- `GET /customer/architects/portofolios/:architectId`
- `GET /customer/portofolios`
- `GET /customer/portofolios/:portofolioId`
- `POST /customer/consultation/:architectId`

List Architect Endpoint
- `GET /architect/portofolio`
- `GET /architect/tags`
- `POST /architect/portofolio/add`
- `GET /architect/portofolio/:portofolioId`
- `PUT /architect/portofolio/:portofolioId`
- `DELETE /architect/portofolio/:portofolioId`
- `GET /architect/profile`
- `PUT /architect/profile`

&nbsp;
## User Endpoints :

## 1. POST /register

Request:

- body:
```json
{
  "email": "string",
  "password": "string",
  "role": "string"
}
```

_Response (201 - Created)_
```json
{
  "email": "string",
  "role": "string"
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
  "access_token": "string",
  "role": "string"
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

## 3. PATCH /validate dari sini belum

Description:
- Validate account through mail
- Compare the query with validateCode in User Table, if it is the same, then set status value to true

Request:

- query: 
```json
{
  "validate": "string"
}
```

&nbsp;

## 4. POST /customer/paymentDone

Description:
- Updating isPayed column in consultation, based on whether the Customer already payed the consultation fee or not

## Customer Endpoints :

## 1. GET /customer

Description:
- Get Home Page for Customer

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
        "role": "architect",
        "Profile": {
            "name": "Ini Nama Architect 1",
            "description": "ini adalah deskripsi dari arsitek pertama yang paling pertama didaftarkan :)",
            "imageUrl": "https://cdn-cms.pgimgs.com/static/2019/05/Bentuk-Rumah-Minimalis-1.jpg"
        }
    },
    {
        "id": 2,
        "role": "architect",
        "Profile": {
            "name": "Ini Nama Architect 2",
            "description": "ini adalah deskripsi dari arsitek pertama yang paling pertama didaftarkan :)",
            "imageUrl": "https://cdn-cms.pgimgs.com/static/2019/05/Bentuk-Rumah-Minimalis-1.jpg"
        }
    }
]
```

&nbsp;

## 2. GET /customer/profile

Description:
- Get customer Profile

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
    "name": "Siapa Hayo",
    "phoneNumber": "",
    "imageUrl": "https://ik.imagekit.io/kamsb87ztqz/smug_hehe_EXOrkn-sl.jpg",
    "address": "rumah customer",
    "UserId": 7
}
```

&nbsp;


## 3. PUT /customer/profile

Description:
- Update customer Profile

Request:

- headers:
```json
{
  "access_token": "string"
}
```

- body: 
```json
{
  "file": "file",
  "name": "string",
  "phoneNumber": "string",
  "address": "string" 
}
```

_Response (200 - OK)_
```json
{
    "message": "Profile updated"
}
```

## 4. GET /customer/architects

Description:
- Get all Architects

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
        "id": 2,
        "email": "architect2@mail.com",
        "Profile": {
            "id": 2,
            "name": "Ini Nama Architect 2",
            "phoneNumber": "0850684869495",
            "description": "ini adalah deskripsi dari arsitek pertama yang paling pertama didaftarkan :)",
            "imageUrl": "https://www.intiland.com/wp-content/uploads/2020/05/gambar_1_artikel_22-cb99c29edf-e1588560479167.jpg",
            "address": "ini alamat arsitek 1",
            "price": 200000
        }
    },
    {
        "id": 1,
        "email": "architect1@mail.com",
        "Profile": {
            "id": 1,
            "name": "Ini Nama Architect 1",
            "phoneNumber": "0850684869495",
            "description": "ini adalah deskripsi dari arsitek pertama yang paling pertama didaftarkan :)",
            "imageUrl": "https://ik.imagekit.io/kamsb87ztqz/not_hehe_scmzCZbAZ3v.jpg",
            "address": "ini alamat arsitek 1",
            "price": 200000
        }
    }
]
```

## 5. GET /customer/architects/:architectId

Description:
- Get Architects by ID

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
  "architectId": "integer"
}
```

_Response (200 - OK)_
```json
{
    "id": 1,
    "email": "architect1@mail.com",
    "role": "architect",
    "status": true,
    "validateCode": null,
    "Profile": {
        "id": 1,
        "name": "Ini Nama Architect 1",
        "phoneNumber": "0850684869495",
        "description": "ini adalah deskripsi dari arsitek pertama yang paling pertama didaftarkan :)",
        "imageUrl": "https://ik.imagekit.io/kamsb87ztqz/not_hehe_scmzCZbAZ3v.jpg",
        "address": "ini alamat arsitek 1",
        "price": 200000
    }
}
```

## 6. GET /customer/architects/portofolios/:architectId

Description:
- Get Portofolios by One Architect

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
  "architectId": "integer"
}
```

_Response (200 - OK)_
```json
[
    {
        "id": 7,
        "title": "ini rumah ngawur",
        "imageUrl": "https://ik.imagekit.io/kamsb87ztqz/Schrodinger_hehe_0aPPjmJjj.jpg",
        "description": "ini adalah deskripsi rumah ke 7 yang telah di desain dengan sangat baik dan sudah memenuhi kriteria dari clientnya",
        "UserId": 1,
        "createdAt": "2021-12-15T13:36:28.487Z",
        "updatedAt": "2021-12-15T18:50:06.466Z",
        "Tags": [
            {
                "id": 3,
                "name": "Office",
                "PortofoliosTag": {
                    "TagId": 3,
                    "PortofolioId": 7,
                    "createdAt": "2021-12-15T13:36:28.497Z",
                    "updatedAt": "2021-12-15T13:36:28.497Z"
                }
            }
        ],
        "User": {
            "id": 1,
            "email": "architect1@mail.com",
            "password": "architect1",
            "role": "architect",
            "status": true,
            "validateCode": null,
            "createdAt": "2021-12-15T13:36:28.471Z",
            "updatedAt": "2021-12-15T13:36:28.471Z",
            "Profile": {
                "id": 1,
                "name": "Ini Nama Architect 1",
                "phoneNumber": "0850684869495",
                "description": "ini adalah deskripsi dari arsitek pertama yang paling pertama didaftarkan :)",
                "imageUrl": "https://ik.imagekit.io/kamsb87ztqz/not_hehe_scmzCZbAZ3v.jpg",
                "address": "ini alamat arsitek 1",
                "price": 200000,
                "UserId": 1,
                "createdAt": "2021-12-15T13:36:28.492Z",
                "updatedAt": "2021-12-16T00:32:41.699Z"
            }
        }
    },
    {
        "id": 10,
        "title": "Ini rumah 10",
        "imageUrl": "https://strgonelabsprod.blob.core.windows.net/cms/post/desain-rumah-minimalis-1628826610202795817.webp",
        "description": "ini adalah deskripsi rumah ke 10 yang telah di desain dengan sangat baik dan sudah memenuhi kriteria dari clientnya",
        "UserId": 1,
        "createdAt": "2021-12-15T13:36:28.487Z",
        "updatedAt": "2021-12-15T13:36:28.487Z",
        "Tags": [
            {
                "id": 2,
                "name": "Apartment",
                "PortofoliosTag": {
                    "TagId": 2,
                    "PortofolioId": 10,
                    "createdAt": "2021-12-15T13:36:28.497Z",
                    "updatedAt": "2021-12-15T13:36:28.497Z"
                }
            }
        ],
        "User": {
            "id": 1,
            "email": "architect1@mail.com",
            "password": "architect1",
            "role": "architect",
            "status": true,
            "validateCode": null,
            "createdAt": "2021-12-15T13:36:28.471Z",
            "updatedAt": "2021-12-15T13:36:28.471Z",
            "Profile": {
                "id": 1,
                "name": "Ini Nama Architect 1",
                "phoneNumber": "0850684869495",
                "description": "ini adalah deskripsi dari arsitek pertama yang paling pertama didaftarkan :)",
                "imageUrl": "https://ik.imagekit.io/kamsb87ztqz/not_hehe_scmzCZbAZ3v.jpg",
                "address": "ini alamat arsitek 1",
                "price": 200000,
                "UserId": 1,
                "createdAt": "2021-12-15T13:36:28.492Z",
                "updatedAt": "2021-12-16T00:32:41.699Z"
            }
        }
    },
    {
        "id": 11,
        "title": "Ini rumah 11",
        "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv4QofgTIpisaJ8-OcBMFG480N24Gm_2lZeQ&usqp=CAU",
        "description": "ini adalah deskripsi rumah ke 11 yang telah di desain dengan sangat baik dan sudah memenuhi kriteria dari clientnya",
        "UserId": 1,
        "createdAt": "2021-12-15T13:36:28.487Z",
        "updatedAt": "2021-12-15T13:36:28.487Z",
        "Tags": [
            {
                "id": 1,
                "name": "House",
                "PortofoliosTag": {
                    "TagId": 1,
                    "PortofolioId": 11,
                    "createdAt": "2021-12-15T13:36:28.497Z",
                    "updatedAt": "2021-12-15T13:36:28.497Z"
                }
            }
        ],
        "User": {
            "id": 1,
            "email": "architect1@mail.com",
            "password": "architect1",
            "role": "architect",
            "status": true,
            "validateCode": null,
            "createdAt": "2021-12-15T13:36:28.471Z",
            "updatedAt": "2021-12-15T13:36:28.471Z",
            "Profile": {
                "id": 1,
                "name": "Ini Nama Architect 1",
                "phoneNumber": "0850684869495",
                "description": "ini adalah deskripsi dari arsitek pertama yang paling pertama didaftarkan :)",
                "imageUrl": "https://ik.imagekit.io/kamsb87ztqz/not_hehe_scmzCZbAZ3v.jpg",
                "address": "ini alamat arsitek 1",
                "price": 200000,
                "UserId": 1,
                "createdAt": "2021-12-15T13:36:28.492Z",
                "updatedAt": "2021-12-16T00:32:41.699Z"
            }
        }
    },
    {
        "id": 16,
        "title": "hehehe",
        "imageUrl": "https://ik.imagekit.io/kamsb87ztqz/hehee_Wul-4XLT1.jpg",
        "description": "hohohoho",
        "UserId": 1,
        "createdAt": "2021-12-15T17:50:34.259Z",
        "updatedAt": "2021-12-15T17:50:34.259Z",
        "Tags": [
            {
                "id": 3,
                "name": "Office",
                "PortofoliosTag": {
                    "TagId": 3,
                    "PortofolioId": 16,
                    "createdAt": "2021-12-15T17:50:34.262Z",
                    "updatedAt": "2021-12-15T17:50:34.262Z"
                }
            },
            {
                "id": 2,
                "name": "Apartment",
                "PortofoliosTag": {
                    "TagId": 2,
                    "PortofolioId": 16,
                    "createdAt": "2021-12-15T17:50:34.262Z",
                    "updatedAt": "2021-12-15T17:50:34.262Z"
                }
            },
            {
                "id": 1,
                "name": "House",
                "PortofoliosTag": {
                    "TagId": 1,
                    "PortofolioId": 16,
                    "createdAt": "2021-12-15T17:50:34.262Z",
                    "updatedAt": "2021-12-15T17:50:34.262Z"
                }
            }
        ],
        "User": {
            "id": 1,
            "email": "architect1@mail.com",
            "password": "architect1",
            "role": "architect",
            "status": true,
            "validateCode": null,
            "createdAt": "2021-12-15T13:36:28.471Z",
            "updatedAt": "2021-12-15T13:36:28.471Z",
            "Profile": {
                "id": 1,
                "name": "Ini Nama Architect 1",
                "phoneNumber": "0850684869495",
                "description": "ini adalah deskripsi dari arsitek pertama yang paling pertama didaftarkan :)",
                "imageUrl": "https://ik.imagekit.io/kamsb87ztqz/not_hehe_scmzCZbAZ3v.jpg",
                "address": "ini alamat arsitek 1",
                "price": 200000,
                "UserId": 1,
                "createdAt": "2021-12-15T13:36:28.492Z",
                "updatedAt": "2021-12-16T00:32:41.699Z"
            }
        }
    },
    {
        "id": 17,
        "title": "INI BARUUUUUUUUUUU",
        "imageUrl": "https://ik.imagekit.io/kamsb87ztqz/Schrodinger_hehe_ljqEXyiLjzw.jpg",
        "description": "hehehe",
        "UserId": 1,
        "createdAt": "2021-12-15T18:15:53.167Z",
        "updatedAt": "2021-12-15T18:15:53.167Z",
        "Tags": [
            {
                "id": 2,
                "name": "Apartment",
                "PortofoliosTag": {
                    "TagId": 2,
                    "PortofolioId": 17,
                    "createdAt": "2021-12-15T18:15:53.177Z",
                    "updatedAt": "2021-12-15T18:15:53.177Z"
                }
            }
        ],
        "User": {
            "id": 1,
            "email": "architect1@mail.com",
            "password": "architect1",
            "role": "architect",
            "status": true,
            "validateCode": null,
            "createdAt": "2021-12-15T13:36:28.471Z",
            "updatedAt": "2021-12-15T13:36:28.471Z",
            "Profile": {
                "id": 1,
                "name": "Ini Nama Architect 1",
                "phoneNumber": "0850684869495",
                "description": "ini adalah deskripsi dari arsitek pertama yang paling pertama didaftarkan :)",
                "imageUrl": "https://ik.imagekit.io/kamsb87ztqz/not_hehe_scmzCZbAZ3v.jpg",
                "address": "ini alamat arsitek 1",
                "price": 200000,
                "UserId": 1,
                "createdAt": "2021-12-15T13:36:28.492Z",
                "updatedAt": "2021-12-16T00:32:41.699Z"
            }
        }
    },
    {
        "id": 8,
        "title": "Ini rumah 8",
        "imageUrl": "https://cdn-cms.pgimgs.com/static/2020/12/1.-Desain-Rumah-Minimalis-dengan-Atap-Pelana.jpg",
        "description": "ini adalah deskripsi rumah ke 8 yang telah di desain dengan sangat baik dan sudah memenuhi kriteria dari clientnya",
        "UserId": 1,
        "createdAt": "2021-12-15T13:36:28.487Z",
        "updatedAt": "2021-12-15T13:36:28.487Z",
        "Tags": [
            {
                "id": 3,
                "name": "Office",
                "PortofoliosTag": {
                    "TagId": 3,
                    "PortofolioId": 8,
                    "createdAt": "2021-12-15T18:50:06.480Z",
                    "updatedAt": "2021-12-15T18:50:06.480Z"
                }
            }
        ],
        "User": {
            "id": 1,
            "email": "architect1@mail.com",
            "password": "architect1",
            "role": "architect",
            "status": true,
            "validateCode": null,
            "createdAt": "2021-12-15T13:36:28.471Z",
            "updatedAt": "2021-12-15T13:36:28.471Z",
            "Profile": {
                "id": 1,
                "name": "Ini Nama Architect 1",
                "phoneNumber": "0850684869495",
                "description": "ini adalah deskripsi dari arsitek pertama yang paling pertama didaftarkan :)",
                "imageUrl": "https://ik.imagekit.io/kamsb87ztqz/not_hehe_scmzCZbAZ3v.jpg",
                "address": "ini alamat arsitek 1",
                "price": 200000,
                "UserId": 1,
                "createdAt": "2021-12-15T13:36:28.492Z",
                "updatedAt": "2021-12-16T00:32:41.699Z"
            }
        }
    }
]
```

## 7. GET /customer/portofolios

Description:
- Get all Portofolios

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
        "title": "Ini rumah 3",
        "imageUrl": "https://i2.wp.com/arsiteki.id/wp-content/uploads/2021/08/Desain-rumah-minimalis-modern.png",
        "description": "ini adalah deskripsi rumah ke 3 yang telah di desain dengan sangat baik dan sudah memenuhi kriteria dari clientnya",
        "User": {
            "id": 2,
            "email": "architect2@mail.com",
            "status": true,
            "validateCode": null
        },
        "Tags": [
            {
                "id": 1,
                "name": "House",
                "PortofoliosTag": {
                    "TagId": 1,
                    "PortofolioId": 3,
                    "createdAt": "2021-12-15T13:36:28.497Z",
                    "updatedAt": "2021-12-15T13:36:28.497Z"
                }
            }
        ]
    },
    {
        "id": 6,
        "title": "Ini rumah 6",
        "imageUrl": "https://strgonelabsprod.blob.core.windows.net/cms/post/desain-rumah-impian-1628498422735652666.webp",
        "description": "ini adalah deskripsi rumah ke 6 yang telah di desain dengan sangat baik dan sudah memenuhi kriteria dari clientnya",
        "User": {
            "id": 2,
            "email": "architect2@mail.com",
            "status": true,
            "validateCode": null
        },
        "Tags": [
            {
                "id": 1,
                "name": "House",
                "PortofoliosTag": {
                    "TagId": 1,
                    "PortofolioId": 6,
                    "createdAt": "2021-12-15T13:36:28.497Z",
                    "updatedAt": "2021-12-15T13:36:28.497Z"
                }
            }
        ]
    },
    {
        "id": 7,
        "title": "ini rumah ngawur",
        "imageUrl": "https://ik.imagekit.io/kamsb87ztqz/Schrodinger_hehe_0aPPjmJjj.jpg",
        "description": "ini adalah deskripsi rumah ke 7 yang telah di desain dengan sangat baik dan sudah memenuhi kriteria dari clientnya",
        "User": {
            "id": 1,
            "email": "architect1@mail.com",
            "status": true,
            "validateCode": null
        },
        "Tags": [
            {
                "id": 3,
                "name": "Office",
                "PortofoliosTag": {
                    "TagId": 3,
                    "PortofolioId": 7,
                    "createdAt": "2021-12-15T13:36:28.497Z",
                    "updatedAt": "2021-12-15T13:36:28.497Z"
                }
            }
        ]
    },
    {
        "id": 9,
        "title": "Ini rumah 9",
        "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr2WClBfyc2UELvBVTMGFsXZ3AGcppi2dSSA&usqp=CAU",
        "description": "ini adalah deskripsi rumah ke 9 yang telah di desain dengan sangat baik dan sudah memenuhi kriteria dari clientnya",
        "User": {
            "id": 2,
            "email": "architect2@mail.com",
            "status": true,
            "validateCode": null
        },
        "Tags": [
            {
                "id": 1,
                "name": "House",
                "PortofoliosTag": {
                    "TagId": 1,
                    "PortofolioId": 9,
                    "createdAt": "2021-12-15T13:36:28.497Z",
                    "updatedAt": "2021-12-15T13:36:28.497Z"
                }
            }
        ]
    },
    {
        "id": 10,
        "title": "Ini rumah 10",
        "imageUrl": "https://strgonelabsprod.blob.core.windows.net/cms/post/desain-rumah-minimalis-1628826610202795817.webp",
        "description": "ini adalah deskripsi rumah ke 10 yang telah di desain dengan sangat baik dan sudah memenuhi kriteria dari clientnya",
        "User": {
            "id": 1,
            "email": "architect1@mail.com",
            "status": true,
            "validateCode": null
        },
        "Tags": [
            {
                "id": 2,
                "name": "Apartment",
                "PortofoliosTag": {
                    "TagId": 2,
                    "PortofolioId": 10,
                    "createdAt": "2021-12-15T13:36:28.497Z",
                    "updatedAt": "2021-12-15T13:36:28.497Z"
                }
            }
        ]
    },
    {
        "id": 11,
        "title": "Ini rumah 11",
        "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv4QofgTIpisaJ8-OcBMFG480N24Gm_2lZeQ&usqp=CAU",
        "description": "ini adalah deskripsi rumah ke 11 yang telah di desain dengan sangat baik dan sudah memenuhi kriteria dari clientnya",
        "User": {
            "id": 1,
            "email": "architect1@mail.com",
            "status": true,
            "validateCode": null
        },
        "Tags": [
            {
                "id": 1,
                "name": "House",
                "PortofoliosTag": {
                    "TagId": 1,
                    "PortofolioId": 11,
                    "createdAt": "2021-12-15T13:36:28.497Z",
                    "updatedAt": "2021-12-15T13:36:28.497Z"
                }
            }
        ]
    },
    {
        "id": 12,
        "title": "Ini rumah 12",
        "imageUrl": "https://s0.bukalapak.com/img/53317698631/large/DESAIN_RUMAH__6_X_13_LUAS_BANGUNAN_122M00_DUA_LANTAI_.jpg",
        "description": "ini adalah deskripsi rumah ke 12 yang telah di desain dengan sangat baik dan sudah memenuhi kriteria dari clientnya",
        "User": {
            "id": 2,
            "email": "architect2@mail.com",
            "status": true,
            "validateCode": null
        },
        "Tags": [
            {
                "id": 3,
                "name": "Office",
                "PortofoliosTag": {
                    "TagId": 3,
                    "PortofolioId": 12,
                    "createdAt": "2021-12-15T13:36:28.497Z",
                    "updatedAt": "2021-12-15T13:36:28.497Z"
                }
            },
            {
                "id": 1,
                "name": "House",
                "PortofoliosTag": {
                    "TagId": 1,
                    "PortofolioId": 12,
                    "createdAt": "2021-12-15T13:36:28.497Z",
                    "updatedAt": "2021-12-15T13:36:28.497Z"
                }
            }
        ]
    },
    {
        "id": 16,
        "title": "hehehe",
        "imageUrl": "https://ik.imagekit.io/kamsb87ztqz/hehee_Wul-4XLT1.jpg",
        "description": "hohohoho",
        "User": {
            "id": 1,
            "email": "architect1@mail.com",
            "status": true,
            "validateCode": null
        },
        "Tags": [
            {
                "id": 3,
                "name": "Office",
                "PortofoliosTag": {
                    "TagId": 3,
                    "PortofolioId": 16,
                    "createdAt": "2021-12-15T17:50:34.262Z",
                    "updatedAt": "2021-12-15T17:50:34.262Z"
                }
            },
            {
                "id": 2,
                "name": "Apartment",
                "PortofoliosTag": {
                    "TagId": 2,
                    "PortofolioId": 16,
                    "createdAt": "2021-12-15T17:50:34.262Z",
                    "updatedAt": "2021-12-15T17:50:34.262Z"
                }
            },
            {
                "id": 1,
                "name": "House",
                "PortofoliosTag": {
                    "TagId": 1,
                    "PortofolioId": 16,
                    "createdAt": "2021-12-15T17:50:34.262Z",
                    "updatedAt": "2021-12-15T17:50:34.262Z"
                }
            }
        ]
    },
    {
        "id": 17,
        "title": "INI BARUUUUUUUUUUU",
        "imageUrl": "https://ik.imagekit.io/kamsb87ztqz/Schrodinger_hehe_ljqEXyiLjzw.jpg",
        "description": "hehehe",
        "User": {
            "id": 1,
            "email": "architect1@mail.com",
            "status": true,
            "validateCode": null
        },
        "Tags": [
            {
                "id": 2,
                "name": "Apartment",
                "PortofoliosTag": {
                    "TagId": 2,
                    "PortofolioId": 17,
                    "createdAt": "2021-12-15T18:15:53.177Z",
                    "updatedAt": "2021-12-15T18:15:53.177Z"
                }
            }
        ]
    },
    {
        "id": 8,
        "title": "Ini rumah 8",
        "imageUrl": "https://cdn-cms.pgimgs.com/static/2020/12/1.-Desain-Rumah-Minimalis-dengan-Atap-Pelana.jpg",
        "description": "ini adalah deskripsi rumah ke 8 yang telah di desain dengan sangat baik dan sudah memenuhi kriteria dari clientnya",
        "User": {
            "id": 1,
            "email": "architect1@mail.com",
            "status": true,
            "validateCode": null
        },
        "Tags": [
            {
                "id": 3,
                "name": "Office",
                "PortofoliosTag": {
                    "TagId": 3,
                    "PortofolioId": 8,
                    "createdAt": "2021-12-15T18:50:06.480Z",
                    "updatedAt": "2021-12-15T18:50:06.480Z"
                }
            }
        ]
    }
]
]
```

## 8. GET /customer/portofolios/:portofolioId

Description:
- Get Portofolios by ID

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
  "portofolioId": "integer"
}
```

_Response (200 - OK)_
```json
{
    "id": 11,
    "title": "Ini rumah 11",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv4QofgTIpisaJ8-OcBMFG480N24Gm_2lZeQ&usqp=CAU",
    "description": "ini adalah deskripsi rumah ke 11 yang telah di desain dengan sangat baik dan sudah memenuhi kriteria dari clientnya",
    "User": {
        "id": 1,
        "email": "architect1@mail.com",
        "role": "architect",
        "status": true,
        "validateCode": null,
        "Profile": {
            "id": 1,
            "name": "Ini Nama Architect 1",
            "phoneNumber": "0850684869495",
            "description": "ini adalah deskripsi dari arsitek pertama yang paling pertama didaftarkan :)",
            "imageUrl": "https://ik.imagekit.io/kamsb87ztqz/not_hehe_scmzCZbAZ3v.jpg",
            "address": "ini alamat arsitek 1",
            "price": 200000,
            "UserId": 1
        }
    }
}
```

## 9. POST /customer/consultation/:architectId

Description:
- Post consultation by Architect

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
  "architectId": "integer"
}
```

## Architect Endpoints :
## 1. GET /architect/portofolio

Description:
- Get Portofolios by Architect

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
        "title": "Ini rumah 3",
        "imageUrl": "https://i2.wp.com/arsiteki.id/wp-content/uploads/2021/08/Desain-rumah-minimalis-modern.png",
        "description": "ini adalah deskripsi rumah ke 3 yang telah di desain dengan sangat baik dan sudah memenuhi kriteria dari clientnya",
        "UserId": 2,
        "Tags": [
            {
                "id": 1,
                "name": "House",
                "PortofoliosTag": {
                    "TagId": 1,
                    "PortofolioId": 3,
                    "createdAt": "2021-12-15T13:36:28.497Z",
                    "updatedAt": "2021-12-15T13:36:28.497Z"
                }
            }
        ]
    },
    {
        "id": 6,
        "title": "Ini rumah 6",
        "imageUrl": "https://strgonelabsprod.blob.core.windows.net/cms/post/desain-rumah-impian-1628498422735652666.webp",
        "description": "ini adalah deskripsi rumah ke 6 yang telah di desain dengan sangat baik dan sudah memenuhi kriteria dari clientnya",
        "UserId": 2,
        "Tags": [
            {
                "id": 1,
                "name": "House",
                "PortofoliosTag": {
                    "TagId": 1,
                    "PortofolioId": 6,
                    "createdAt": "2021-12-15T13:36:28.497Z",
                    "updatedAt": "2021-12-15T13:36:28.497Z"
                }
            }
        ]
    },
    {
        "id": 9,
        "title": "Ini rumah 9",
        "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr2WClBfyc2UELvBVTMGFsXZ3AGcppi2dSSA&usqp=CAU",
        "description": "ini adalah deskripsi rumah ke 9 yang telah di desain dengan sangat baik dan sudah memenuhi kriteria dari clientnya",
        "UserId": 2,
        "Tags": [
            {
                "id": 1,
                "name": "House",
                "PortofoliosTag": {
                    "TagId": 1,
                    "PortofolioId": 9,
                    "createdAt": "2021-12-15T13:36:28.497Z",
                    "updatedAt": "2021-12-15T13:36:28.497Z"
                }
            }
        ]
    },
    {
        "id": 12,
        "title": "Ini rumah 12",
        "imageUrl": "https://s0.bukalapak.com/img/53317698631/large/DESAIN_RUMAH__6_X_13_LUAS_BANGUNAN_122M00_DUA_LANTAI_.jpg",
        "description": "ini adalah deskripsi rumah ke 12 yang telah di desain dengan sangat baik dan sudah memenuhi kriteria dari clientnya",
        "UserId": 2,
        "Tags": [
            {
                "id": 3,
                "name": "Office",
                "PortofoliosTag": {
                    "TagId": 3,
                    "PortofolioId": 12,
                    "createdAt": "2021-12-15T13:36:28.497Z",
                    "updatedAt": "2021-12-15T13:36:28.497Z"
                }
            },
            {
                "id": 1,
                "name": "House",
                "PortofoliosTag": {
                    "TagId": 1,
                    "PortofolioId": 12,
                    "createdAt": "2021-12-15T13:36:28.497Z",
                    "updatedAt": "2021-12-15T13:36:28.497Z"
                }
            }
        ]
    }
]
```

## 2. GET /architect/tags

Description:
- Get Tags

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
        "name": "House",
        "createdAt": "2021-12-15T13:36:28.483Z",
        "updatedAt": "2021-12-15T13:36:28.483Z"
    },
    {
        "id": 2,
        "name": "Apartment",
        "createdAt": "2021-12-15T13:36:28.483Z",
        "updatedAt": "2021-12-15T13:36:28.483Z"
    },
    {
        "id": 3,
        "name": "Office",
        "createdAt": "2021-12-15T13:36:28.483Z",
        "updatedAt": "2021-12-15T13:36:28.483Z"
    }
]
```

## 3. POST /architect/portofolio/add

Description:
- Add portofolio by User (Architect)

Request:

- headers:
```json
{
  "access_token": "string"
}
```

- body:
```json
{
  "file": "file",
  "title": "string",
  "description": "string",
  "TagId": "Array of Number",
}
```

_Response (201 - Created)_
```json
{
    "id": 19,
    "title": "hehehe",
    "description": "ini deskripsiii",
    "imageUrl": "https://ik.imagekit.io/kamsb87ztqz/hehee_m4LY4nanQ.jpg",
    "UserId": 1,
    "updatedAt": "2021-12-16T04:46:11.794Z",
    "createdAt": "2021-12-16T04:46:11.794Z"
}
```

## 4. GET /architect/portofolio/:portofolioId

Description:
- Get Portofolio Detail for editing

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
  "portofolioId": "integer"
}
```

_Response (200 - OK)_
```json
{
    "id": 5,
    "title": "Ini rumah 5",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD_zonzWHSSVU6l6yaTmZ0lKw7QBOyO8Fk3w&usqp=CAU",
    "description": "ini adalah deskripsi rumah ke 5 yang telah di desain dengan sangat baik dan sudah memenuhi kriteria dari clientnya",
    "UserId": 1,
    "Tags": [
        {
            "id": 1,
            "name": "House",
            "PortofoliosTag": {
                "TagId": 1,
                "PortofolioId": 5,
                "createdAt": "2021-12-15T13:36:28.497Z",
                "updatedAt": "2021-12-15T13:36:28.497Z"
            }
        }
    ]
}
```

## 5. PUT /architect/portofolio/:portofolioId

Description:
- Edit portofolio by ID

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
  "portofolioId": "integer"
}
```

- body:
```json
{
  "file": "file",
  "title": "string",
  "description": "string",
  "TagId": "Array of Number",
}
```

_Response (200 - OK)_
```json
{
    "id": 8,
    "title": "Ini rumah 8",
    "imageUrl": "https://cdn-cms.pgimgs.com/static/2020/12/1.-Desain-Rumah-Minimalis-dengan-Atap-Pelana.jpg",
    "description": "ini adalah deskripsi rumah ke 8 yang telah di desain dengan sangat baik dan sudah memenuhi kriteria dari clientnya",
    "UserId": 1,
    "createdAt": "2021-12-15T13:36:28.487Z",
    "updatedAt": "2021-12-15T13:36:28.487Z"
}
```

## 6. DELETE /architect/portofolio/:portofolioId

Description:
- Delete portofolio by ID

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
    "message": "Portofolio Deleted"
}
```

## 7. GET /architect/profile

Description:
- Get Architect profile for Editing

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
    "name": "Ini Nama Architect 1",
    "phoneNumber": "0850684869495",
    "description": "ini adalah deskripsi dari arsitek pertama yang paling pertama didaftarkan :)",
    "imageUrl": "https://ik.imagekit.io/kamsb87ztqz/not_hehe_scmzCZbAZ3v.jpg",
    "address": "ini alamat arsitek 1",
    "price": 200000,
    "UserId": 1
}
```

## 8. PUT /architect/portofolio/add

Description:
- Edit profile

Request:

- headers:
```json
{
  "access_token": "string"
}
```

- body:
```json
{
  "file": "file",
  "name": "string",
  "phoneNumber": "string",
  "address": "string",
  "description": "string",
  "price": "integer",
}
```

_Response (200 - OK)_
```json
{
    "message": "Profile updated"
}
```

## Global Error

_Response (401 - Unauthorized)_
```json
{
  "message": "Invalid token"
}
```

_Response (403 - Forbidden)_
```json
{
  "message": "You are not authorized"
}
```

_Response (500 - Internal Server Error)_
```json
{
  "message": "Internal server error"
}
```