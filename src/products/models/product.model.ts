import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'product' })
export class Product {
  @Field((type) => ID)
  productId: number;

  @Field()
  productName: string;

  @Field()
  productCode: string;

  @Field()
  releaseDate: string;

  @Field({ nullable: true })
  description: string;

  @Field()
  price: number;

  @Field()
  starRating: number;

  @Field({ nullable: true })
  imageUrl: string;
}
