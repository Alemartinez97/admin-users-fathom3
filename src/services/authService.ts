const passport = require("passport");
const jwt = require("jsonwebtoken");
const localStrategy = require("passport-local").Strategy;
const JWTStrategy = require("passport-jwt").Strategy;
const ExtractJWT = require("passport-jwt").ExtractJwt;

import { FastifyReply, FastifyRequest } from 'fastify';
import moment from 'moment';
import { SECRET_KEY, SECRET_KEY_TOKEN } from '../constant/constant';
import { Auth } from "../models/auth.interface";
import { IUserModel } from '../models/user.interface';
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
                async (req: FastifyRequest, email: string, password: string, done: any) => {
                    try {
                        const body = req.body as IUserModel;
                        await userService.createUser(body);
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
                    passReqToCallback: true,
                },
                async (req: FastifyRequest, email: string, password: string, done: any) => {
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
                        return done(null, email, { message: "Login success" });
                    } catch (e) {
                        console.error(e)
                        throw e;
                    }
                }
            )
        );
        passport.use(
            new JWTStrategy(
                {
                    secretOrKey: SECRET_KEY,
                    jwtFromRequest: ExtractJWT.fromUrlQueryParameter(SECRET_KEY_TOKEN),
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
    },
    signup: async (req: FastifyRequest, res: FastifyReply, next: any): Promise<any> => {
        try {
            res.send({
                message: "Signup successful",
                user: req?.body,
            });

        } catch (error) {
            console.error(`Error en getUserById: ${error}`);
            throw error;
        }
    },


    login: async (req: FastifyRequest | any, res: FastifyReply, next: any): Promise<any> => {
        try {
            const { body: user } = req;
            const response = await userService.getUserByEmail(user.email);
            let token;
            req.login(user, { session: false }, async (err: Error) => {
                if (err) return next(err);
                const body = {
                    _id: response?.dni,
                    email: user.email,
                    role: response?.role,
                    iat: moment().unix(),
                    exp: moment().add(500, "minutes").unix(),
                };
                token = jwt.sign(body, SECRET_KEY);
            });
            return token;
        } catch (e) {
            res.status(401).send({
                error: new Error("Invalid request!"),
            });
        }
    },
}

export = authService;
