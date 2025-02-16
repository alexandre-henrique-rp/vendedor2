import Stock from "../../db/model/stock.js";
import { StockDto } from "./stock.js";


const StockService = {
  create: async (data: StockDto) => {
    try {
      
      const req = await Stock.create(data, { include: ["produtos"] });
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
      const req = await Stock.findAll( { include: ["produtos"] });
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
      const req = await Stock.findByPk(id,  { include: ["produtos"] });
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

  update: async (id: number, data: StockDto) => {
    try {
      if (!id) {
        throw new Error("O id é obrigatório");
      }
      await Stock.update(data, { where: { id } });

      const req = await Stock.findByPk(id,  { include: ["produtos"] });
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
      await Stock.destroy({ where: { id } });

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


export default StockService