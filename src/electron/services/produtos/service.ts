import Product from "../../db/model/products.js";
import { ProductDto } from "./product.js";


const ProductService = {
  create: async (data: ProductDto) => {
    try {
      
      const req = await Product.create(data);
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
      const req = await Product.findAll();
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
      const req = await Product.findByPk(id);
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

  update: async (id: number, data: ProductDto) => {
    try {
      if (!id) {
        throw new Error("O id é obrigatório");
      }
      const req = await Product.update(data, { where: { id } });
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
      await Product.destroy({ where: { id } });

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


export default ProductService