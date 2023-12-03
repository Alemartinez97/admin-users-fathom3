# Welcome to admin web


## steps to start the server
    > npm i -s
    > npx nodemon
    > npm run test
    
## steps to start the server by docker
    > sudo docker-compose -f docker-compose.dev.yml up
### Ejemplo de Curl de Postman

Login:

```bash
curl --location --request POST 'http://127.0.0.1:3000/login' \
--header 'Content-Type: application/json' \
--data-raw '{
    "email": "admin@prisma.io",
    "password": "admin"
}'

Signup:
#### When you register the admin it is necessary to comment on lines 13,14 and 15 of the middleware/auth
`    
 if (userRole !== "admin") {
      return res.status(401).send({ message: "Access denied" });
    }
`

```bash
curl --location --request POST 'http://127.0.0.1:3000/signup' \
--header 'Content-Type: application/json' \
--data-raw '{
    "dni":23892411,
    "email": "admin@prisma.io",
    "name": "Ale",
    "surname": "Martinez",
    "age": 25,  
    "phone": 23123123,
    "password": "admin",
     "role": "admin"
}'


Get Users:

```bash
curl --location --request GET 'http://127.0.0.1:3000/users' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImxlQHByaXNtYS5pbyIsImlhdCI6MTcwMDczNDU5OCwiZXhwIjoxNzAwNzY0NTk4fQ.MdgydOcVaHUxslj2VoCPgN6NAi395-x2WXMXdyxgEaw'

Get User:

```bash
curl --location --request GET 'http://127.0.0.1:3000/users/23892411' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOjEyMzQzMjUsImVtYWlsIjoiYTNkZmZlZWRlQHByaXNtYS5pbyIsImlhdCI6MTY5ODIyNTY2MCwiZXhwIjoxNjk4MjI1OTYwfQ.nTMtIcXjYHQLvKjUFUlwIH6qk59zl_fvI8XENJNV31k'


    Create User:

```bash
curl --location --request POST 'http://127.0.0.1:3000/users' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOjEyMzQzMjUsImVtYWlsIjoiYTNkZmZlZWRlQHByaXNtYS5pbyIsImlhdCI6MTY5ODIyNTY2MCwiZXhwIjoxNjk4MjI1OTYwfQ.nTMtIcXjYHQLvKjUFUlwIH6qk59zl_fvI8XENJNV31k' \
--header 'Content-Type: application/json' \
--data-raw '{
    "dni": 23892411,
    "email": "admin@prisma.io",
    "name": "Ale",
    "surname": "Martinez",
    "age": 25,
    "phone": 23123,
    "password": "13123123xdea"
}'

   Edit User:

```bash
curl --location --request PUT 'http://127.0.0.1:3000/users/13123423' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOjEyMzQzMjUsImVtYWlsIjoiYTNkZmZlZWRlQHByaXNtYS5pbyIsImlhdCI6MTY5ODIyNTY2MCwiZXhwIjoxNjk4MjI1OTYwfQ.nTMtIcXjYHQLvKjUFUlwIH6qk59zl_fvI8XENJNV31k' \
--header 'Content-Type: application/json' \
--data-raw '{dni: "12312312", email: "20p@gmail.com", name: "adeadeadae", surname: "daedaedaed", age: 34,…'

   Delete User:

```bash
curl --location --request DELETE 'http://127.0.0.1:3000/users/23892411' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOjEyMzQzMjUsImVtYWlsIjoiYTNkZmZlZWRlQHByaXNtYS5pbyIsImlhdCI6MTY5ODIyNTY2MCwiZXhwIjoxNjk4MjI1OTYwfQ.nTMtIcXjYHQLvKjUFUlwIH6qk59zl_fvI8XENJNV31k'