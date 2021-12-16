# Post API Documentation

## Endpoints:
# `/user`
- `POST/user/register/artist`
{
    "id": 4,
    "username": "artist",
    "email": "artist5@mail.com"
}

- `POST/user/register/customer`
{
    "id": 5,
    "username": "customer5",
    "email": "customer5@mail.com"
}

- `POST/user/login`
{
    "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NSwiZW1haWwiOiJjdXN0b21lcjVAbWFpbC5jb20iLCJpYXQiOjE2Mzk1NzQ3NDN9.Th4OZwX-EKyezHw7ZW_o37IR3MOcFJkftbJ8lmyOiLM",
    "role": "Customer",
    "username": "customer5"
}


# `/categories`
- `GET/categories`
[
    {
        "id": 1,
        "name": "Ceramic Art",
        "createdAt": "2021-12-05T11:56:18.302Z",
        "updatedAt": "2021-12-05T11:56:18.302Z"
    },
    {
        "id": 2,
        "name": "Ikebana Art",
        "createdAt": "2021-12-05T11:56:18.302Z",
        "updatedAt": "2021-12-05T11:56:18.302Z"
    },
    {
        "id": 3,
        "name": "Mosaic Art",
        "createdAt": "2021-12-05T11:56:18.302Z",
        "updatedAt": "2021-12-05T11:56:18.302Z"
    },
    {
        "id": 4,
        "name": "Paint Art",
        "createdAt": "2021-12-05T11:56:18.302Z",
        "updatedAt": "2021-12-05T11:56:18.302Z"
    },
    {
        "id": 5,
        "name": "Sculptural Art",
        "createdAt": "2021-12-05T11:56:18.302Z",
        "updatedAt": "2021-12-05T11:56:18.302Z"
    }
]


# `/bookmark`
- `GET/bookmark`
[
    {
        "UsersId": 3,
        "ProductId": 3,
        "createdAt": "2021-12-15T08:07:18.067Z",
        "updatedAt": "2021-12-15T08:07:18.067Z",
        "Product": {
            "id": 3,
            "name": "xxxx",
            "description": "zzzz",
            "image1": "https://cdn.pixabay.com/photo/2017/06/10/22/58/composing-2391033__340.jpg",
            "image2": "https://cdn.pixabay.com/photo/2017/06/10/22/58/composing-2391033__340.jpg",
            "image3": "https://cdn.pixabay.com/photo/2017/06/10/22/58/composing-2391033__340.jpg",
            "UsersId": 1,
            "CategoriesId": 3,
            "createdAt": "2021-12-14T17:00:00.000Z",
            "updatedAt": "2021-12-14T17:00:00.000Z"
        }
    },
    {
        "UsersId": 3,
        "ProductId": 1,
        "createdAt": "2021-12-15T12:30:34.262Z",
        "updatedAt": "2021-12-15T12:30:34.262Z",
        "Product": {
            "id": 1,
            "name": "tes",
            "description": "tes",
            "image1": "https://cdn.pixabay.com/photo/2017/08/30/12/45/girl-2696947__480.jpg",
            "image2": "https://cdn.pixabay.com/photo/2017/08/30/12/45/girl-2696947__480.jpg",
            "image3": "https://cdn.pixabay.com/photo/2017/08/30/12/45/girl-2696947__480.jpg",
            "UsersId": 1,
            "CategoriesId": 1,
            "createdAt": "2021-12-11T17:00:00.000Z",
            "updatedAt": "2021-12-11T17:00:00.000Z"
        }
    }
]

- `POST/bookmark`
{
    "message": "Added to your wishlist"
}

- `DELETE/bookmark`
{
    "message": "Delete Success"
}

# `/`
- `GET/`
{
    "count": 6,
    "rows": [
        {
            "id": 1,
            "name": "tes",
            "description": "tes",
            "image1": "https://cdn.pixabay.com/photo/2017/08/30/12/45/girl-2696947__480.jpg",
            "image2": "https://cdn.pixabay.com/photo/2017/08/30/12/45/girl-2696947__480.jpg",
            "image3": "https://cdn.pixabay.com/photo/2017/08/30/12/45/girl-2696947__480.jpg",
            "UsersId": 1,
            "CategoriesId": 1,
            "createdAt": "2021-12-11T17:00:00.000Z",
            "updatedAt": "2021-12-11T17:00:00.000Z",
            "Category": {
                "id": 1,
                "name": "Ceramic Art",
                "createdAt": "2021-12-05T11:56:18.302Z",
                "updatedAt": "2021-12-05T11:56:18.302Z"
            }
        },
        {
            "id": 3,
            "name": "xxxx",
            "description": "zzzz",
            "image1": "https://cdn.pixabay.com/photo/2017/06/10/22/58/composing-2391033__340.jpg",
            "image2": "https://cdn.pixabay.com/photo/2017/06/10/22/58/composing-2391033__340.jpg",
            "image3": "https://cdn.pixabay.com/photo/2017/06/10/22/58/composing-2391033__340.jpg",
            "UsersId": 1,
            "CategoriesId": 3,
            "createdAt": "2021-12-14T17:00:00.000Z",
            "updatedAt": "2021-12-14T17:00:00.000Z",
            "Category": {
                "id": 3,
                "name": "Mosaic Art",
                "createdAt": "2021-12-05T11:56:18.302Z",
                "updatedAt": "2021-12-05T11:56:18.302Z"
            }
        },
        {
            "id": 4,
            "name": "yyy",
            "description": "tttt",
            "image1": "https://cdn.pixabay.com/photo/2017/06/10/22/58/composing-2391033__340.jpg",
            "image2": "https://cdn.pixabay.com/photo/2017/06/10/22/58/composing-2391033__340.jpg",
            "image3": "https://cdn.pixabay.com/photo/2017/06/10/22/58/composing-2391033__340.jpg",
            "UsersId": 1,
            "CategoriesId": 4,
            "createdAt": "2021-12-14T17:00:00.000Z",
            "updatedAt": "2021-12-14T17:00:00.000Z",
            "Category": {
                "id": 4,
                "name": "Paint Art",
                "createdAt": "2021-12-05T11:56:18.302Z",
                "updatedAt": "2021-12-05T11:56:18.302Z"
            }
        },
        {
            "id": 5,
            "name": "rrrr",
            "description": "uuuu",
            "image1": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRq_YAHghI0qpJh1Ueb48WlEuV0fUPJ4oT4Dg&usqp=CAU",
            "image2": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRq_YAHghI0qpJh1Ueb48WlEuV0fUPJ4oT4Dg&usqp=CAU",
            "image3": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRq_YAHghI0qpJh1Ueb48WlEuV0fUPJ4oT4Dg&usqp=CAU",
            "UsersId": 1,
            "CategoriesId": 5,
            "createdAt": "2021-12-14T17:00:00.000Z",
            "updatedAt": "2021-12-14T17:00:00.000Z",
            "Category": {
                "id": 5,
                "name": "Sculptural Art",
                "createdAt": "2021-12-05T11:56:18.302Z",
                "updatedAt": "2021-12-05T11:56:18.302Z"
            }
        }
    ]
}

- `GET/:id`
{
    "id": 1,
    "name": "tes",
    "description": "tes",
    "image1": "https://cdn.pixabay.com/photo/2017/08/30/12/45/girl-2696947__480.jpg",
    "image2": "https://cdn.pixabay.com/photo/2017/08/30/12/45/girl-2696947__480.jpg",
    "image3": "https://cdn.pixabay.com/photo/2017/08/30/12/45/girl-2696947__480.jpg",
    "UsersId": 1,
    "CategoriesId": 1,
    "createdAt": "2021-12-11T17:00:00.000Z",
    "updatedAt": "2021-12-11T17:00:00.000Z",
    "Category": {
        "id": 1,
        "name": "Ceramic Art",
        "createdAt": "2021-12-05T11:56:18.302Z",
        "updatedAt": "2021-12-05T11:56:18.302Z"
    },
    "User": {
        "id": 1,
        "username": "artist1",
        "email": "artist1@mail.com",
        "password": "$2b$08$D9IjObTkcy4XJkxLMbkp1OUy.ExmKHZjCmKmSR.7pfj3XQOoXjcpy",
        "role": "Artist",
        "phoneNumber": "0231",
        "address": "home",
        "createdAt": "2021-12-05T12:45:16.413Z",
        "updatedAt": "2021-12-05T12:45:16.413Z"
    }
}

- `GET/myProduct`
{
    "message": "column \"nan\" does not exist"
}

- `POST/`
- `POST/sendEmail`
{
    "message": "Wrong email or password"
}

- `POST/sendSms`
{
    "message": "Wrong email or password"
}

- `DELETE/:id`
{
    "message": "Delete Success"
}

- `PUT/:id`


