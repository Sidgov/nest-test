import { Field, InputType } from '@nestjs/graphql';
import { IsOptional, Max, Min } from 'class-validator';

@InputType()
export class NewProductInput {
  @Field()
  productName: string;

  @Field()
  productCode: string;

  @Field()
  releaseDate: string;

  @Field({ nullable: true })
  @IsOptional()
  description?: string;

  @Field()
  price: number;

  @Field()
  @Min(1)
  @Max(5)
  starRating: number;

  @Field({ nullable: true })
  @IsOptional()
  imageUrl?: string;
}
