import {
  Controller,
  UseGuards,
  Get,
  Post,
  Delete,
  Body,
  Param,
  Put,
  InternalServerErrorException,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ProductService } from './product.service';
import { ProductDTO } from './dto/create-product.dto';
import { GetUser } from 'src/auth/get-user.decorator';
import { Product } from './product.entity';
import { User } from 'src/auth/user.entity';

@Controller('products')
@UseGuards(AuthGuard())
export class ProductController {
  constructor(private productService: ProductService) {} // Dependency Injection By creating a constructor(NEST handles(adds) this Dependency Injection itself in the background)

  @Post()
  async createProduct(
    @Body() productDTO: ProductDTO,
    @GetUser() user: User,
  ): Promise<Product> {
    return this.productService.createProduct(productDTO, user);
  }

  @Get() //get products of a specific user with userId (Id stored in session is used for this fetching)
  getAllProducts(
  ): Promise<Product[]> {
    return this.productService.getAllProducts();
  }

  @Get('/user') //get products of a specific user with userId (Id stored in session is used for this fetching)
<<<<<<< HEAD
  getProductsByUser(
=======
  async getProductsByUser(
    @Query() filterDto: GetProductsFilterDTO,
>>>>>>> 0496c74566ae6d2e5aa23edbbd9e969bf4225761
    @GetUser() user: User,
  ): Promise<Product[]> {
    return this.productService.getProductsByUser(user);
  }

  @Get('/category/:categoryId')
  getProductsByCategory(
    @GetUser() user: User,
    @Param('categoryId') categoryId: string,
  ): Promise<Product[]> {
    return this.productService.getProductsByCategoryId(user, categoryId);
  }

  @Get('/:id')
  getProductById(
    @Param('id') id: string,
    @GetUser() user: User,
  ): Promise<Product> {
    return this.productService.getProductById(id, user);
  }

  @Delete('/:id')
  deleteProductById(
    @Param('id') id: string,
    @GetUser() user: User,
  ): Promise<void> {
    return this.productService.deleteProductById(id, user);
  }

  @Put('/:id')
  updateProduct(
    @Param('id') id: string,
    @GetUser() user: User,
    @Body() productDTO: ProductDTO,
  ): Promise<Product> {
    return this.productService.updateProduct(id, productDTO, user);
  }
}
