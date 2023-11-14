import assert from "assert";

const request = require("supertest");
const app = require("../../routers/users.routes");
describe("GET /users",   () =>{
    it("responds with json",   async ()=> {
        const res =  await app.inject({
            url: "/users",
            method: 'GET',
        });
        assert.deepStrictEqual(res?.statusCode, 200);
        // assert.deepStrictEqual(JSON.parse(res?.body).message, "created");
        await app.close
    });
});

describe("GET /users/20324237",   () =>{
    it("responds with json",   async ()=> {
        const res =  await app.inject({
            url: "/users/20324237",
            method: 'GET',
        });
        assert.deepStrictEqual(res?.statusCode, 200);
        // assert.deepStrictEqual(JSON.parse(res?.body).message, "created");
        await app.close
    });
});