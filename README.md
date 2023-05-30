# clients-contacts

Customer registration REST API linked to contacts (1:N).

![DER drawio](https://github.com/gabifontoura/api-clients-contacts/assets/110035918/cd27839f-acd8-49ae-9a81-c7a2af5b2a42)

## Installation

```bash
$ yarn
```

## Running the app

```bash
$ yarn dev
```

# ENDPOINTS

## /users - POST - Create User

<br>
Email is unique.
Telephone is unique.
<br>
<br>

Expected body:

```json
{
  "name": "string",
  "email": "email@email.com",
  "password": "Senha03!5",
  "telephone": "5511999999999"
}
```
<br>

Expected response:

```json
{
  "id": 2,
  "name": "string",
  "email": "email@email.com",
  "telephone": "5511999999999",
  "createdAt": "2023-05-25"
}
```

<br>

##  /users - GET - List all users

<br>
Must provide authentication - Bearer Token.
<br>
Expected response:

```json
[
  {
    "id": 1,
    "name": "string",
    "email": "string@email.com",
    "telephone": "string",
    "createdAt": "2023-05-25"
  },
  {
   "id": 2,
    "name": "string",
    "email": "string2@email.com",
    "telephone": "string2",
    "createdAt": "2023-05-25"
  }
]
```

##  /users/`${id}` - GET - Retrieve user

<br>
Must provide authentication - Bearer Token.
<br>
Returns user info and their contacts.
<br>
<br>
Expected response:

```json
{
	"id": 1,
	"name": "Lucas",
	"email": "email@email.com",
	"telephone": "5511999999999",
	"createdAt": "2023-05-25",
	"contacts": [
		{
			"id": 3,
			"name": "pessoal",
			"email": "lucas@email.com",
			"telephone": "5511987654323",
			"createdAt": "2023-05-28"
		},
		{
			"id": 2,
			"name": "empresa",
			"email": "profissional@email.com",
			"telephone": "5511987654324",
			"createdAt": "2023-05-28"
		},
		{
			"id": 8,
			"name": "empresa 2",
			"email": "empresa@email.com",
			"telephone": "5511987654320",
			"createdAt": "2023-05-28"
		}
	]
}
```

##  /users/`${id}` - PATCH - Update user

<br>Must provide authentication - Bearer Token<br>
<br>Restrict to only modify user's own data<br>
<br>Expected response:

```json
{
  "id": 2,
  "name": "string",
  "email": "string@email.com",
  "telephone": "string",
  "createdAt": "2023-05-25"
}
```

## /users/`${id}` - DELETE -  Delete user
<br>No body requested.<br>
<br>No body returned for response<br>
<br>Must provide authentication - Bearer Token<br>
<br>Restrict to only modify user's own data<br>
<br>
## /login - POST - Login

Expected body:

```json
{
  "email": "email@email.com",
  "password": "Senha03!5"
}
```

<br>
Expected response:

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiZnVsYW5vIiwiaWF0IjoxNjg1MzY4Mjc5LCJleHAiOjE2ODU0NTQ2NzksInN1YiI6IjUifQ.yBnTjhJ0w5Rwzqa5gkgfKOvZnSULxLi6W95P0MFyUBA"
}
```


## /users/`${id}`/contacts  - POST - Create Contact
<br>
<br>Must provide authentication - Bearer Token<br>
<br>Expected body:

```json
		{
			"name": "empresa",
			"email": "empresa@email.com",
			"telephone": "5511987654320"
		}
```

<br>

Expected response:

```json
		{
			"id": 8,
			"name": "empresa",
			"email": "empresa@email.com",
			"telephone": "5511987654320",
			"createdAt": "2023-05-28"
		}
```

<br>

## /contacts/`${id}` - GET - Retrieve contact
<br>
<br>Must provide authentication - Bearer Token<br>
<br>Restrict to only modify user's own data<br>
<br>Expected response:

```json
		{
			"id": 8,
			"name": "empresa",
			"email": "empresa@email.com",
			"telephone": "5511987654320",
			"createdAt": "2023-05-28"
		}
```

<br>

## /contacts/`${id}` - PATCH - Update Contact
<br>
<br>Must provide authentication - Bearer Token<br>
<br>Restrict to only modify user's own data<br>
<br>Expected response:

```json
{
	"id": 2,
	"name": "empresa",
	"email": "profissional@email.com",
	"telephone": "5511987654324",
	"createdAt": "2023-05-28",
	"user": {
		"id": 1,
		"name": "Lucas",
		"email": "lucas@email.com",
		"telephone": "5511999999999",
		"createdAt": "2023-05-25"
	}
}
```

## /contacts/`${id}` - DELETE - Delete Contact
<br>Must provide authentication - Bearer Token<br>
<br>Restrict to only modify user's own data<br>
<br>No body requested.<br>
<br>No body returned for response.<br>
<br>
