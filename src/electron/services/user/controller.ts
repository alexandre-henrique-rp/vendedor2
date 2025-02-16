import UserService from "./service.js";
import { UserDto } from "./user.js";


const User = {
  //create
  create: async (data: UserDto) => {
    return UserService.create(data);
  },
  //read
  findOne: async (id: number) => {
    return UserService.find(id);
  },
  //readAll
  findAll: async () => {
    return UserService.findAll();
  },
  //update
  update: async (id: number, data: UserDto) => {
    return UserService.update(id, data);
  },
  //delete
  delete: async (id: number) => {
    return UserService.delete(id);
  }
}

export default User