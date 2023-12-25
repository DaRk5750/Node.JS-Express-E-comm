import userModel  from "../model/user.model.js";
import jwt from 'jsonwebtoken';

export default class userController{
    getRegister(req, res, next){
        req.session.currURL = 'register';
        res.render("register", {errorMessage: null, currURL:req.session.currURL});
    }
    
    getLogin(req, res, next){
        req.session.currURL = 'login';
        res.render("login", {errorMessage: null, currURL:req.session.currURL});
    }

    postRegister(req, res, next){
        userModel.newUser(req.body);
        res.redirect('login');
    }
    
    postLogin(req, res, next){
        const status = userModel.userCred(req.body)
        if (!status){
            req.session.currURL = 'login';
            res.render('login', {errorMessage:"invalid credentails",currURL:req.session.currURL});   
        }else{
            const email = req.body.email  
            req.session.userEmail = email  
            res.redirect('../product');             // as we redirect it ..so we can't pass parameter but in product page we can access session variable
            
            // const token = jwt.sign({ userId: status.id, email: status.email },'vH8@pLin};O-Vw>',{ expiresIn:'1h'});
            // console.log("before token ",req.headers);
            // req.headers.authorization = token;
            // console.log("after token ",req.headers);
        }
    }

    logout(req, res, next){
        req.session.destroy((err)=>{
            if (err){
                console.log(err)
            }
            else{
                res.redirect('/user/login');
            }
        })
    }
 
}