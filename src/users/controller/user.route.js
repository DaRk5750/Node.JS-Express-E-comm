import express from 'express';
import path from 'path';
import userController from './user.controller.js'; 

const userRoute = express.Router();

const usercontroller = new userController();


userRoute.get('/register', usercontroller.getRegister);
userRoute.post('/register', usercontroller.postRegister);
userRoute.get('/login', usercontroller.getLogin);
userRoute.post('/login', usercontroller.postLogin);
userRoute.get('/logout', usercontroller.logout);


export default userRoute;