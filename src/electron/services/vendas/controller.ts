import { SalesDto } from "./sales.js";
import SalesService from "./service.js";



const Sales = {
  //create
  create: async (data: SalesDto) => {
    return SalesService.create(data);
  },
  //read
  findOne: async (id: number) => {
    return SalesService.find(id);
  },
  //readAll
  findAll: async () => {
    return SalesService.findAll();
  },
  //update
  update: async (id: number, data: SalesDto) => {
    return SalesService.update(id, data);
  },
  //delete
  delete: async (id: number) => {
    return SalesService.delete(id);
  }
}

export default Sales