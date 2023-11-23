import assert from "assert";

const app = require("../../routers/users.routes");
const token = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOjIzODkyNDIxMSwiZW1haWwiOiJhZG1pbkBwcmlzbWEuaW8iLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE3MDA3MzY0NTgsImV4cCI6MTcwMDc2NjQ1OH0.C_7N6QmhaxnuSCmm3KFzS5xoSiMazteo_h3qwxDQ9y';

describe("POST /users", () => {
    it("responds with json of users", async () => {
        const res = await app.inject({
            url: "/users",
            method: 'POST',
            headers: { Authorization: token },
            body: {
                "dni": 344231423,
                "email": "ae92w98rdw2eae@prisma.io",
                "name": "Ale",
                "surname": "Martinez",
                "age": 25,
                "phone": 23123,
                "role": "admin",
                "password": "13123123xdea"
            }
        });
        assert.deepStrictEqual(res?.statusCode, 200);
        await app.close
    });
});

describe("GET /users", () => {
    it("responds with json", async () => {
        const res = await app.inject({
            headers: { Authorization: token },
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
            headers: { Authorization: token },
            url: "/users/344231423",
            method: 'GET',
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
            headers: { Authorization: token },
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
            headers: { Authorization: token },
        });
        assert.deepStrictEqual(res?.statusCode, 200);
        await app.close
    });
});