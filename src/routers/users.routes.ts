const passport = require("passport");
const { getAllUsers, getUserById, createUser, updateUser, deleteUser } = require("../controllers/usersController");
const { signup, login, protectedRoute } = require("../controllers/authController");
const middleware = require("../middleware/auth");
const fastify = require('fastify')({
  logger: true,
  ignoreTrailingSlash: true
});
fastify.get('/users', { preHandler: [middleware] }, getAllUsers);
fastify.get('/users/:id', { preHandler: [middleware] }, getUserById);
fastify.post('/users', { preHandler: [middleware] }, createUser);
fastify.put('/users/:id', { preHandler: [middleware] }, updateUser);
fastify.delete('/users/:id', { preHandler: [middleware] }, deleteUser);
fastify.post(
  "/signup",
  { preValidation: passport.authenticate("signup", { session: false }) },
  signup
);
fastify.post("/login", { preValidation: passport.authenticate("login", { session: false }) }, login);
fastify.post('/protected-route', { preHandler: [middleware] }, protectedRoute);

export = fastify;