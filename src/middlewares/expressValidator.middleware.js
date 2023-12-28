import {body, validationResult} from 'express-validator';

const expressValidation = async (req, res,next)=>{

    //1. setup for rules
    const rules = [body('name').notEmpty().withMessage("Name is requires"), 
                    body('price').isFloat({gt:0}).withMessage("Price should be a +ve value"),
                    body('imageUrl').isURL().withMessage("Invalid URL"),
                    ];

    //2. Run those rules
    // RULES CAN BE ASYNC THAT WHY WE USE PROMISE 
    await Promise.all(rules.map(rule=> rule.run(req)));

    //3 check if there are any errors
    var validationErrors = validationResult(req);
    console.log("object",validationErrors);
    console.log("array",validationErrors.array());

    if (!validationErrors.isEmpty()){
        return res.render('new-product',{errorMessage: validationErrors.array()[0].msg})
    }
    next()
            
}

export default expressValidation;