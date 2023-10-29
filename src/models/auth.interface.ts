import { FastifyReply, FastifyRequest } from 'fastify';
export interface Auth {
    configurePassport(): Promise<any>;
    login(req: FastifyRequest, res: FastifyReply, next: any): Promise<any>;
    signup(req: FastifyRequest, res: FastifyReply, next: any): Promise<any>;
}