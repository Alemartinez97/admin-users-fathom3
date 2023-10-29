const jwt = require("jsonwebtoken");
const moment = require("moment");

import { FastifyReply, FastifyRequest } from 'fastify';

module.exports = async (req: FastifyRequest, res: FastifyReply, next: any) => {
  try {
    const authorizationHeader = req.headers['authorization'];
    const token = authorizationHeader ? authorizationHeader.split(" ")[1] : null;
    const decodedToken = jwt.decode(token, "top_secret");
    const userEmail = decodedToken.email;
    if (!userEmail) {
      throw "Invalid user ID";
    }
    //If the expiration date is earlier than the current one, the token has expired
    if (decodedToken.exp <= moment().unix()) {
      return res.status(401).send({ message: "Expired token" });
    }
    next();
  } catch (e) {
    res.status(401).send({
      error: new Error("Invalid request!"),
    });
  }
};

