let id = 3;

export default class ProductModel{
    constructor(id, name, desc, price, imageUrl) {
        this.id = id;
        this.name = name;
        this.desc = desc;
        this.price = price;
        this.imageUrl = imageUrl;
    }

    static getById(id) {
        return products.find((p) => p.id == id);
      }

    static getProducts(){
        return products;
    }

    static addProduct(newObject){
        id += 1
        const newProduct = new ProductModel(id, newObject.name, newObject.desc, newObject.price, newObject.imageUrl);
        products.push(newProduct);
    }
    
    static update(productObj) {
        // var prevData = products.findIndex((p) => p.id == productObj.id);
        // console.log(prevData);

        const index = products.findIndex(
          (p) => p.id == productObj.id
        );
        console.log("indexxx:: "),index;
        products[index] = productObj;
      }

    static delete(id){
        const index = products.findIndex( (p)=> p.id == id);
        products.splice(index,1);
        id -= 1;
    } 
    
}

var products = [
    new ProductModel(1, 'Product 1', 'Description for Product 10', 19.99, 'https://m.media-amazon.com/images/I/51-nXsSRfZL._SX328_BO1,204,203,200_.jpg'),
    new ProductModel(2, 'Product 2', 'Description for Product 2', 29.99, 'https://m.media-amazon.com/images/I/51xwGSNX-EL._SX356_BO1,204,203,200_.jpg'),
    new ProductModel(3, 'Product 3', 'Description for Product 3', 39.99, 'https://m.media-amazon.com/images/I/31PBdo581fL._SX317_BO1,204,203,200_.jpg'),
];


