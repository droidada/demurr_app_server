
import express from 'express';
import { verifyToken, isRuber, isAdmin  } from '../middlewares';
//import { adminBoard, getAllUsers, getCurrentUser, getUserDetails, ruberBoard, editUserProfile, editUserAddress, getUserAddress } from '../controllers/user.controller';

const router = express.Router();

router.use(function(req, res, next) {
    res.header(
    "Access-Control-Allow-Headers",
    "x-access-token, Origin, Content-Type, Accept"
    );
    next();
});

router.post("/login", (req,res)=>{res.send({success: 'yes'})});


export default router;
