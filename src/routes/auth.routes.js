import express from 'express';
import { checkDuplicateUsernameOrEmail, checkRolesExisted } from '../middlewares';
import { signup, signin } from '../controllers/auth.controller';

const router = express.Router();

router.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

router.post(
    "/signup",
    [
        checkDuplicateUsernameOrEmail,
        checkRolesExisted
    ],
    signup
);

router.post("/signin", signin);

export default router;