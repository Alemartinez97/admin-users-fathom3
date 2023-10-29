import authService from "../services/authService";
import { FastifyReply, FastifyRequest } from 'fastify';

export const signup = async (req: FastifyRequest, res: FastifyReply, next: any) => {
    try {
        const response = await authService.signup(req, res, next);
        res.status(200).send(response);
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: "Error al Resgistrarse" });
    }
}

export const login = async (req: FastifyRequest, res: FastifyReply, next: any) => {
    try {

        const response = await authService.login(req, res, next);
        res.status(200).send(response);
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: "Error al iniciar sesion" });
    }
}