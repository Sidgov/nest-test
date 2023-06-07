import {
  Table,
  Column,
  Model,
  PrimaryKey,
  AutoIncrement,
} from 'sequelize-typescript';

@Table
export class Product extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column
  productId: number;

  @Column
  productName: string;

  @Column
  productCode: string;

  @Column
  releaseDate: string;

  @Column
  description: string;

  @Column
  price: number;

  @Column
  starRating: number;

  @Column
  imageUrl: string;
}
