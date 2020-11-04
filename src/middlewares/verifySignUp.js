import { User, ROLES } from '../models';

export const checkDuplicateUsernameOrEmail = (req, res, next) => {
  // // Username
  // User.findOne({
  //   username: req.body.username
  // }).exec((err, user) => {
  //   if (err) {
  //     res.status(500).send({ message: err });
  //     return;
  //   }

  //   if (user) {
  //     res.send({ message: "Failed! Username is already in use!" });
  //     return;
  //   }

    // Email
    User.findOne({
      email: req.body.email
    }).exec((err, user) => {
      if (err) {
        res.status(500).send(err);
        return;
      }

      if (user) {
        res.status(403).json("Failed! Email is already in use!");
        return;
      }

      next();
    });
  // });
};

export const checkRolesExisted = (req, res, next) => {
  if (req.body.roles) {
    for (let i = 0; i < req.body.roles.length; i++) {
      if (!ROLES.includes(req.body.roles[i])) {
        res.status(403).send(`Failed! Role ${req.body.roles[i]} does not exist!`);
        return;
      }
    }
  }

  next();
};
