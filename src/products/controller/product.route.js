import express from 'express';
import productController from './product.controller.js';
import newProductValidation from '../../middlewares/newProductValidation.middleware.js'

const productRoute = express.Router();

const productcontroller = new productController();

productRoute.get('/',productcontroller.getProduct)
productRoute.get('/add-product', productcontroller.addProduct)
productRoute.post('/add-product', newProductValidation , productcontroller.addNewProduct)

export default productRoute;


