import fs from 'fs';
import path from 'path';
import jwt from 'jsonwebtoken';
import { secret } from '../config/auth.config';
import { User, Role } from '../models';

export const verifyToken = (req, res, next) => {
  const privateKey = fs.readFileSync(path.resolve('../jwt-key'));
  const authHeader = req.headers.authorization;
  if (authHeader) {
      const token = authHeader.split(' ')[1];
      console.log("token here is ", token)
      if (token.length <= 0) {
        return res.status(401).send({ message: "No token provided!" });
      }
    
      jwt.verify(token, Buffer.from(privateKey, 'base64'), (err, user) => {
        if (err) {
          return res.status(403).send({ message: "Unauthorized!" });
        }
        // console.log("user here us ", user)
        req.user = user;
        next();
      });
  } else {
    console.log("headers here is ", req.headers)
    console.log("auth header here is ", authHeader)
      res.sendStatus(401);
  }
};

export const isAdmin = (req, res, next) => {
  User.findById(req.user.id).exec((err, user) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }

    Role.find(
      {
        _id: { $in: user.roles }
      },
      (err, roles) => {
        if (err) {
          res.status(500).send({ message: err });
          return;
        }

        for (let i = 0; i < roles.length; i++) {
          if (roles[i].name === "admin") {
            next();
            return;
          }
        }

        res.send({ message: "Require Admin Role!" });
        return;
      }
    );
  });
};

export const isRuber = (req, res, next) => {
  User.findById(req.userId).exec((err, user) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }

    Role.find(
      {
        _id: { $in: user.roles }
      },
      (err, roles) => {
        if (err) {
          res.status(500).send({ message: err });
          return;
        }

        for (let i = 0; i < roles.length; i++) {
          if (roles[i].name === "ruber") {
            next();
            return;
          }
        }

        res.status(403).send({ message: "Require Ruber Role!" });
        return;
      }
    );
  });
};
