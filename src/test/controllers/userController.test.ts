import assert from "assert";

const app = require("../../routers/users.routes");
describe("GET /users", () => {
    it("responds with json", async () => {
        const res = await app.inject({
            url: "/users",
            method: 'GET',
        });
        assert.deepStrictEqual(res?.statusCode, 200);
        await app.close
    });
});

describe("GET /users/20324237", () => {
    it("responds with json", async () => {
        const res = await app.inject({
            url: "/users/20324237",
            method: 'GET',
        });
        assert.deepStrictEqual(res?.statusCode, 200);
        await app.close
    });
});

describe("POST /users", () => {
    it("responds with json of users", async () => {
        const res = await app.inject({
            url: "/users",
            method: 'POST',
            headers: { Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOjIzMjQyMzIsImVtYWlsIjoibGVlQHByaXNtYS5pbyIsImlhdCI6MTcwMDIzMjgyMCwiZXhwIjoxNzAwMjYyODIwfQ.fyqEJtpkoBSSqgtT7Go9HHnvE9WN6YUvyL7C4KsXSj8' },
            body: {
                "dni": 344231423,
                "email": "ae92w98rdw2eae@prisma.io",
                "name": "Ale",
                "surname": "Martinez",
                "age": 25,
                "phone": 23123,
                "password": "13123123xdea"
            }
        });
        assert.deepStrictEqual(res?.statusCode, 200);
        await app.close
    });
});


describe("PUT /users/20324237", () => {
    it("responds with json of users", async () => {
        const res = await app.inject({
            url: "/users/344231423",
            method: 'PUT',
            headers: { Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOjIzMjQyMzIsImVtYWlsIjoibGVlQHByaXNtYS5pbyIsImlhdCI6MTcwMDIzMjgyMCwiZXhwIjoxNzAwMjYyODIwfQ.fyqEJtpkoBSSqgtT7Go9HHnvE9WN6YUvyL7C4KsXSj8' },
            body: {
                "dni": 344231423,
                "email": "ae92w98rdw2eae@prisma.io",
                "name": "Aleee",
                "surname": "Martinez",
                "age": 23,
                "phone": 23123,
                "password": "13123123xdea"
            }
        });
        assert.deepStrictEqual(res?.statusCode, 201);
        await app.close
    });
});
describe("DELETE /users/20324237", () => {
    it("responds with json of users", async () => {
        const res = await app.inject({
            url: "/users/344231423",
            method: 'DELETE',
            headers: { Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOjIzMjQyMzIsImVtYWlsIjoibGVlQHByaXNtYS5pbyIsImlhdCI6MTcwMDIzMjgyMCwiZXhwIjoxNzAwMjYyODIwfQ.fyqEJtpkoBSSqgtT7Go9HHnvE9WN6YUvyL7C4KsXSj8' },
        });
        assert.deepStrictEqual(res?.statusCode, 200);
        await app.close
    });
});