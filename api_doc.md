# Kanban Board

## Models:

_User_
```
- email : string, required, unique
- password : string, required
```

_Note_
```
- title : string, required
- content : text, required
- status : string, required
- label : string, required
- UserId : integer, required
```

_Label_
```
- name : string, required
- NoteId : integer, required
```

## Relationship:

### User -> Note: OneToMany
### Note -> Label: ManyToMany

## Endpoints:

List of available endpoints:

- `POST /register`
- `POST /login`

Routes below need authentication:

- `GET /notes`
- `GET /`
- `POST /labels`

Routes below need authentication & authorization:

- `PUT /notes/:id`
- `PATCH /notes/:id`

&nbsp;

## 1. POST /register

Request:

- body:
```json
{
    "email": "string",
    "password": "string
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
  "message": "Email has already been taken"
}
OR
{
  "message": "Password is required"
}
OR
{
  "message": "Password's min. length is 8 characters"
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
```

_Response (401 - Unauthorized)_

```json
{
  "message": "Invalid email/password"
}
```

&nbsp;

## 3. GET /notes

Description:
- Fetch all notes from database for user who is currently logged in

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
    "title": "Bug 1",
    "content": "Content bug 1",
    "status": "To-solve",
    "label": "Open",
    "UserId": 1,
    "createdAt": "2021-12-14T07:11:47.106Z",
    "updatedAt": "2021-12-14T07:11:47.106Z"
  },
  {
    "id": 6,
    "title": "Bug 2",
    "content": "Content bug 2",
    "status": "To-solve",
    "label": "Open",
    "UserId": 1,
    "createdAt": "2021-12-14T07:12:11.337Z",
    "updatedAt": "2021-12-14T07:12:11.337Z"
  },
  ...,
]
```

&nbsp;

## 4. GET /notes/:id

Description:
- Fetch a note from database

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
  "title": "Bug 1",
  "content": "Content bug 1",
  "status": "To-solve",
  "label": "Open",
  "UserId": 1,
  "createdAt": "2021-12-14T07:11:47.106Z",
  "updatedAt": "2021-12-14T07:11:47.106Z"
}
```

&nbsp;

## 5. POST /notes

Description:
- Add new notes

Request:

- headers:
```json
{
  "access_token": "string"
}
```

_Response (201 - Created)_
```json
{
  "id": 6,
  "title": "Bug 2",
  "content": "Content bug 2",
  "status": "To-solve",
  "label": "Open",
  "UserId": 1
}
```

&nbsp;

## 6. DELETE /notes/:id

Description:
- Delete a note (needs authorization)

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
  "message": "Note with id (note id) has been deleted"
}
```

_Response (404 - Not Found)_
```json
{
  "message": "Content not found"
}
```

&nbsp;

## 7. PUT /notes/:id

Description:
- Update a note (needs authorization)

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
  "id": "integer"
}
```

- body:
```json
{
  "title": "string",
  "content": "text"
}
```

_Response (200 - OK)_
```json
{
  "message": "Note has been successfully updated!"
}
```

_Response (404 - Not Found)_
```json
{
  "message": "Content not found"
}
```

&nbsp;

## 8. PATCH /notes/:id

Description:
- Update a note's status (needs authorization)

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
  "id": "integer"
}
```

- body:
```json
{
  "status": "string"
}
```

_Response (200 - OK)_
```json
{
  "message": "Note's status has been successfully updated!"
}
```

_Response (404 - Not Found)_
```json
{
  "message": "Content not found"
}
```

_Response (400 - Bad Request)_
```json
{
  "message": "You currently have too much work!"
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