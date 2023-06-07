import { Sequelize } from 'sequelize-typescript';
import { SEQUELIZE } from 'src/constants';
import { Product } from 'src/products/product.entity';

export const databaseProviders = [
  {
    provide: SEQUELIZE,
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'sidgov',
        password: 'sidgov',
        database: 'sidgov',
      });
      sequelize.addModels([Product]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
