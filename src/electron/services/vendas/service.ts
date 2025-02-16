import Sales from "../../db/model/sales.js";
import { SalesDto } from "./sales.js";

const SalesService = {
  create: async (data: SalesDto) => {
    try {
      const req = await Sales.create(data, { include: ["produtos", "users"] });
      return {
        error: false,
        message: "Usuário criado com sucesso",
        data: req
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
      const req = await Sales.findAll({ include: ["produtos", "users"] });
      return {
        error: false,
        message: "Usuários encontrados com sucesso",
        data: req
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
      const req = await Sales.findByPk(id, { include: ["produtos", "users"] });
      return {
        error: false,
        message: "Usuário encontrado com sucesso",
        data: req
      };
    } catch (error) {
      return {
        error: true,
        message: JSON.stringify(error),
        data: null
      };
    }
  },

  update: async (id: number, data: SalesDto) => {
    try {
      if (!id) {
        throw new Error("O id é obrigatório");
      }
      await Sales.update(data, { where: { id } });

      const req = await Sales.findByPk(id, { include: ["produtos", "users"] });
      return {
        error: false,
        message: "Usuário atualizado com sucesso",
        data: req
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
      await Sales.destroy({ where: { id } });

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
  }
};

export default SalesService;
