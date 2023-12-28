import ProductModel  from "../model/product.model.js";

export default class productController{
    
    getProduct(req, res, next){
        const products = ProductModel.getProducts();
        res.render('product',{products, userEmail: req.session.userEmail});
    }
    
    addProduct(req, res, next){
        res.render('new-product', {userEmail: req.session.userEmail, errorMessage:null});
    }
    
    addNewProduct(req, res, next){
                            //Path is important and to declare public path also
        req.body.imageUrl = '/images/' + req.file.filename;
        console.log("addNewProduct : ",req.body);
        ProductModel.addProduct(req.body);
        const products = ProductModel.getProducts();
        console.log("profucts : ", products);
        res.render('product',{products, userEmail: req.session.userEmail});
    }

    getUpdateView(req, res, next){
        const id = req.params.id;
        const productFound = ProductModel.getById(id);
        if (productFound){
            res.render('update-product', {product:productFound, userEmail: req.session.userEmail,errorMessage:null});
        }
        else{
            res.render('update-product', {product:null, userEmail: req.session.userEmail, errorMessage:"Product Not Found"});
        }
    }

    postUpdateProduct(req, res, next){
        const data = req.body;
        ProductModel.update(data)

        let products = ProductModel.getProducts();
        res.render('product', { products, userEmail: req.session.userEmail});
    }

}
