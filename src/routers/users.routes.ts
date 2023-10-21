const { getAllUsers, getUserById, createUser, updateUser, deleteUser } = require("../controllers/usersControllers");
// const middleware = require("../middleware/auth");
const fastify = require('fastify')({
  logger: true,
  ignoreTrailingSlash: true
});
fastify.get('/users', getAllUsers);
fastify.get('/users/:id', getUserById);
fastify.post('/users', createUser);
fastify.put('/users/:id', updateUser);
fastify.delete('/users/:id', deleteUser);

export = fastify;