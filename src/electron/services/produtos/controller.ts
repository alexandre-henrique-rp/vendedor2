import { ProductDto } from "./product.js";
import ProductService from "./service.js";



const Product = {
  //create
  create: async (data: ProductDto) => {
    return ProductService.create(data);
  },
  //read
  findOne: async (id: number) => {
    return ProductService.find(id);
  },
  //readAll
  findAll: async () => {
    return ProductService.findAll();
  },
  //update
  update: async (id: number, data: ProductDto) => {
    return ProductService.update(id, data);
  },
  //delete
  delete: async (id: number) => {
    return ProductService.delete(id);
  }
}

export default Product