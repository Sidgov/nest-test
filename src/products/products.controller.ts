import { Controller, Get } from '@nestjs/common';
import { ProductsService } from './products.service';
import { IProduct } from './product';

@Controller('products')
export class ProductsController {
  constructor(private readonly productService: ProductsService) {}

  @Get()
  getHello(): IProduct[] {
    return this.productService.getProducts();
  }
}
