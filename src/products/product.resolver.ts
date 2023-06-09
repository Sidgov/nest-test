import { NotFoundException } from '@nestjs/common';
import { Args, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql';
import { PubSub } from 'graphql-subscriptions';
import { Product } from './models/product.model';
import { ProductsService } from './products.service';
import { ProductsArgs } from './dto/products.args';
import { NewProductInput } from './dto/new-product.input';

const pubSub = new PubSub();

@Resolver((of) => Product)
export class ProductsResolver {
  constructor(private readonly productsService: ProductsService) {}

  @Query((returns) => Product)
  async product(@Args('id') id: number): Promise<Product> {
    const product = await this.productsService.findOneById(id);
    if (!product) {
      throw new NotFoundException(id);
    }
    return product;
  }

  @Query((returns) => [Product])
  products(@Args() productsArgs: ProductsArgs): Promise<Product[]> {
    return this.productsService.findAll(productsArgs);
  }

  @Mutation((returns) => Product)
  async addProduct(
    @Args('newProductData') newProductData: NewProductInput,
  ): Promise<Product> {
    const product = await this.productsService.create(newProductData);
    pubSub.publish('productAdded', { recipeAdded: product });
    return product;
  }

  @Mutation((returns) => Boolean)
  async removeProduct(@Args('id') id: number) {
    return this.productsService.remove(id);
  }

  @Subscription((returns) => Product)
  productAdded() {
    return pubSub.asyncIterator('productAdded');
  }
}
