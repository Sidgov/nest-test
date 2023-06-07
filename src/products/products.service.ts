import { Inject, Injectable } from '@nestjs/common';
import { Product } from './models/product.model';
import { Product as ProductEntity } from './product.entity';
import { NewProductInput } from './dto/new-product.input';
import { ProductsArgs } from './dto/products.args';
import { PRODUCTS_REPOSITORY } from 'src/constants';

@Injectable()
export class ProductsService {
  constructor(
    @Inject(PRODUCTS_REPOSITORY)
    private productRepository: typeof ProductEntity,
  ) {}

  async create(data: NewProductInput): Promise<Product> {
    const product = new ProductEntity({ ...data });
    return product.save() as any;
  }

  async findOneById(id: number): Promise<Product> {
    return this.productRepository.findOne({
      where: {
        productId: id,
      },
    }) as any;
  }

  async findAll(productsArgs: ProductsArgs): Promise<Product[]> {
    return this.productRepository.findAll<ProductEntity>({
      offset: productsArgs.skip,
      limit: productsArgs.take,
    });
  }

  async remove(id: number): Promise<number> {
    return this.productRepository.destroy({
      where: {
        productId: id,
      },
    });
  }
}
