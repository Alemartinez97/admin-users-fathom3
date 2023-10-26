const passport = require("passport");
const localStrategy = require("passport-local").Strategy;
const JWTStrategy = require("passport-jwt").Strategy;
const ExtractJWT = require("passport-jwt").ExtractJwt;

import { Auth } from "../models/auth.interface";
import { IUserModel } from "../models/user.interface";
import userService from "../services/userService";
import { isValidPassword } from "../utils/isValidatePassword";
const authService: Auth = {
    configurePassport: async (): Promise<any> => {
        passport.use(
            "signup",
            new localStrategy(
                {
                    usernameField: "email",
                    passwordField: "password",
                    passReqToCallback: true
                },
                async (req: any, email: string, password: string, done: any) => {
                    try {
                        await userService.createUser(req.body);
                        return done(null, email, { message: "Signup success" });
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
                async (email: string, password: string, done: any) => {
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
                async (token: string | any, done: any) => {
                    try {
                        return done(null, token?.user);
                    } catch (e) {
                        done(e);
                    }
                }
            )
        );
    }
}

export = authService;
