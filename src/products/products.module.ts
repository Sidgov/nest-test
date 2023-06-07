import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsResolver } from './product.resolver';
import { DatabaseModule } from 'src/database/database.module';
import { productsProviders } from './products.providers';

@Module({
  imports: [DatabaseModule],
  providers: [ProductsService, ...productsProviders, ProductsResolver],
})
export class ProductsModule {}
