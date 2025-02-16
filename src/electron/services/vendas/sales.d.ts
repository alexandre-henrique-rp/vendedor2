import { ProductDto } from "../produtos/product.js";
import { UserDto } from "../user/user.js";

export type SalesDto = {
  userId: number;
  user?: UserDto;
  productId: number;
  produtos?: ProductDto[];
};