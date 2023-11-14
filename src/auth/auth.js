const passport = require("passport");
const localStrategy = require("passport-local").Strategy;
const JWTStrategy = require("passport-jwt").Strategy;
const ExtractJWT = require("passport-jwt").ExtractJwt;

import userService from "../services/userService";
import { isValidPassword } from "../utils/isValidatePassword";

passport.use(
  "signup",
  new localStrategy(
    {
      usernameField: "email",
      passwordField: "password",
      passReqToCallback: true
    },
    async (req, email, password, done) => {
      const { body } = req;
      try {
        const user = await userService.createUser(body);
        return done(null, user);
      } catch (e) {
        done(e);
      }
    }
  )
);

passport.use(
  "login",
  new localStrategy(
    {
      usernameField: "email",
      passwordField: "password",
    },
    async (email, password, done) => {
      try {
        const user = await userService.getUserByEmail(email);
        if (!user) {
          return done(null, false, { message: "User not found" });
        }
        const validate = await isValidPassword(user.password, password);
        if (!validate) {
          console.error("Wrong password");
          return done(null, false);
        }

        return done(null, user);
      } catch (e) {
        return done(e);
      }
    }
  )
);

passport.use(
  new JWTStrategy(
    {
      secretOrKey: "top_secret",
      jwtFromRequest: ExtractJWT.fromUrlQueryParameter("secret_token"),
    },
    async (token, done) => {
      try {
        return done(null, token.user);
      } catch (e) {
        done(error);
      }
    }
  )
);
