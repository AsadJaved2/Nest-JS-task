import { IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class ProductDTO {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsNotEmpty()
  price: Number;

  @IsNotEmpty()
  @IsUUID()
  categoryId: string;
}
