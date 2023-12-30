import express from 'express';
import productController from './product.controller.js';
import newProductValidation from '../../middlewares/newProductValidation.middleware.js'

import expressValidation from '../../middlewares/expressValidator.middleware.js'
import { uploadFile } from '../../middlewares/file-upload.middleware.js';

const productRoute = express.Router();

const productcontroller = new productController();

productRoute.get('/',productcontroller.getProduct)
productRoute.get('/add-product', productcontroller.addProduct)
// productRoute.post('/add-product', newProductValidation , productcontroller.addNewProduct)
productRoute.post('/add-product',uploadFile.single('imageUrl') , expressValidation , productcontroller.addNewProduct)

productRoute.get('/update-product/:id', productcontroller.getUpdateView)
productRoute.post('/update-product/', productcontroller.postUpdateProduct)
productRoute.post('/delete-product/:id', productcontroller.deleteProduct)

export default productRoute;


