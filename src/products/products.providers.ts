import { PRODUCTS_REPOSITORY } from 'src/constants';
import { Product } from './product.entity';

export const productsProviders = [
  {
    provide: PRODUCTS_REPOSITORY,
    useValue: Product,
  },
];
