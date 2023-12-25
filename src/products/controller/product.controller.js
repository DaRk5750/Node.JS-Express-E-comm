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
        ProductModel.addProduct(req.body);
        const products = ProductModel.getProducts();
        res.render('product',{products, userEmail: req.session.userEmail});
    }

}
