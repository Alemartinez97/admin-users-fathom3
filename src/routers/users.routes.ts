const { getAllUsers, getUserById, createUser, updateUser, deleteUser } = require("../controllers/usersControllers");
const middleware = require("../middleware/auth");
const fastify = require('fastify')({
  logger: true,
  ignoreTrailingSlash: true
});
const moment = require("moment");
const passport = require("passport");
const jwt = require("jsonwebtoken");
// const fastifyPassport = require('@fastify/passport');
// fastify.register(fastifyPassport.initialize())
// fastify.register(fastifyPassport.secureSession())
fastify.get('/users', { preHandler: [middleware] }, getAllUsers);
fastify.get('/users/:id', getUserById);
fastify.post('/users', createUser);
fastify.put('/users/:id', updateUser);
fastify.delete('/users/:id', deleteUser);
fastify.post(
  "/signup",
  { preValidation: passport.authenticate("signup", { session: false }) },
  async (req: any, res: any, next: any) => {
    res.json({
      message: "Signup successful",
      user: req.user,
    });
  }
);

fastify.post("/login", async (req: any, res: any, next: any) => {
  passport.authenticate("login", async (err: Error, user: any, info: any) => {
    try {
      if (err || !user) {
        console.log(err);
        const error = new Error("new Error");
        return next(error);
      }

      req.login(user, { session: false }, async (err: Error) => {
        if (err) return next(err);
        const body = {
          _id: user._id,
          email: user.email,
          iat: moment().unix(),
          exp: moment().add(5, "minutes").unix(),
        };
        const token = jwt.sign(body, "top_secret");
        return res.json({ token });
      });
    } catch (e) {
      res.status(401).json({
        error: new Error("Invalid request!"),
      });
    }
  })(req, res, next);
});

fastify.get(
  "/profile",
  { preValidation: passport.authenticate("jwt", { session: false }) },
  (req: any, res: any, next: any) => {
    res.json({
      message: "You did it!",
      user: req.user,
      token: req.query.secret_token,
    });
  }
);

export = fastify;