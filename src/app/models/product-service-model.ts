import { Product } from "./product-model";
import { UpdateProductDto, CreateProductDto } from "./../dtos/product-dto";

export interface ProductService {
  getAll(): Product[] | Promise<Product[]>;
  update(id: Product['id'], changes: UpdateProductDto): Product | Promise<Product>;
  create(data: CreateProductDto): Product | Promise<Product>;
  findOne(id: Product['id']): Product | undefined | Promise<Product | undefined>;
}
