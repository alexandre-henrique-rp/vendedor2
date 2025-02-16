import User from "../../db/model/users.js";
import { UserDto } from "./user.js";


const UserService = {
  create: async (data: UserDto) => {
    try {
      const { name, setor } = data;
      if (!name || !setor) {
        throw new Error(`O ${!name ? "name" : "setor"} é obrigatório`);
      }
      const user = await User.create(data);
      return {
        error: false,
        message: "Usuário criado com sucesso",
        data: user
      };
    } catch (error) {
      return {
        error: true,
        message: JSON.stringify(error),
        data: null
      };
    }
  },

  findAll: async () => {
    try {
      const users = await User.findAll();
      return {
        error: false,
        message: "Usuários encontrados com sucesso",
        data: users
      };
    } catch (error) {
      return {
        error: true,
        message: JSON.stringify(error),
        data: null
      };
    }
  },

  find: async (id: number) => {
    try {
      if (!id) {
        throw new Error("O id é obrigatório");
      }
      const user = await User.findByPk(id);
      return {
        error: false,
        message: "Usuário encontrado com sucesso",
        data: user
      };
    } catch (error) {
      return {
        error: true,
        message: JSON.stringify(error),
        data: null
      };
    }
  },

  update: async (id: number, data: UserDto) => {
    try {
      const { name, setor } = data;
      if (!name || !setor) {
        throw new Error(`O ${!name ? "name" : "setor"} é obrigatório`);
      }
      if (!id) {
        throw new Error("O id é obrigatório");
      }
      const user = await User.update(data, { where: { id } });
      return {
        error: false,
        message: "Usuário atualizado com sucesso",
        data: user
      };

    } catch (error) {
      return {
        error: true,
        message: JSON.stringify(error),
        data: null
      };
    }
  },

  delete: async (id: number) => {
    try {
      if (!id) {
        throw new Error("O id é obrigatório");
      }
      await User.destroy({ where: { id } });

      return {
        error: false,
        message: "Usuário deletado com sucesso",
        data: null
      };
    } catch (error) {
      return {
        error: true,
        message: JSON.stringify(error),
        data: null
      };
    }
  },

};


export default UserService