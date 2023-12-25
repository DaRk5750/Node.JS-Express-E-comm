
const newProductValidation = (req, res, next)=>{
    //A. validate by self
    const {name, desc, price,imageUrl} = req.body;
    const errors = [];

    if (!name || name.trim() == ''){
        errors.push("Name is required");
    }

    if (!price || parseFloat(price) <1){
        errors.push("Price must be positive")
    }

    try{
        const validUrl = new URL(imageUrl);
    }
    catch(err){
        errors.push("URL is invalid");
    }

    if (errors.length > 0){
        return res.render('new-product',{errorMessage: errors[0]} );
    }

    next();

    //B. validate by express validator

};

export default newProductValidation;