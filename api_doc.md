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
  "message": "Email must be unique"
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