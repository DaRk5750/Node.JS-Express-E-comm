import jwt from 'jsonwebtoken';
import userModel from '../users/model/user.model.js'

const jwtAuth = (req, res, next)=>{
    console.log('hey middlw this is jwt token');
    //1.Read the email id
    const email = req.session.userEmail
    console.log(email);

    //2. check in DB.
    const status = userModel.checkEmail(email);
    if (!status){
        req.session.currURL = 'login';
        res.render('login', {errorMessage:"Please Login !! ",currURL:req.session.currURL});   
    }
    else{
        next();
    }
};

export default jwtAuth;