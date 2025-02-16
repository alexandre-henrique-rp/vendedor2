import StockService from "./service.js";
import { StockDto } from "./stock.js";

const Stock = {
  //create
  create: async (data: StockDto) => {
    return StockService.create(data);
  },
  //read
  findOne: async (id: number) => {
    return StockService.find(id);
  },
  //readAll
  findAll: async () => {
    return StockService.findAll();
  },
  //update
  update: async (id: number, data: StockDto) => {
    return StockService.update(id, data);
  },
  //delete
  delete: async (id: number) => {
    return StockService.delete(id);
  }
}

export default Stock