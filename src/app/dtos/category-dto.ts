import { IsEnum, IsNotEmpty, IsOptional, IsUrl, Length, validateOrReject } from "class-validator";


import { AccessType, Category } from "../models/category-model";

export interface ICreateCategoryDto extends Omit<Category, "id"> {}
export class CreateCategoryDto implements ICreateCategoryDto {
  @IsNotEmpty()
  @Length(4, 140)
  name!: string;

  @IsUrl()                           //Decoradores, agregan funcionalidad extra. Se decora una clase, una propiedad o un metodo
  @IsNotEmpty()
  image!: string;

  @IsNotEmpty()
  @IsEnum(AccessType)
  @IsOptional()
  access?: AccessType | undefined;
}

(async () => {
  try {
    const dto = new CreateCategoryDto();
    dto.name = 'Flori';
    dto.image = "https://api.escuelajs.co/api/v1/products";
    await validateOrReject(dto);
  } catch (error) {
    console.log(error);
  }
})()


