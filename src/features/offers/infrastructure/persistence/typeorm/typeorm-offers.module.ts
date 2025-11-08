import { Module } from '@nestjs/common';
import { getRepositoryToken, TypeOrmModule } from '@nestjs/typeorm';
import { OfferEntity } from './entities/offer.entity';
import { OffersRepository } from '../../../application/ports/offers.repository';
import { Repository } from 'typeorm';
import { TypeormOffersRepository } from './repositories/typeorm-offers.repository';

@Module({
  imports: [TypeOrmModule.forFeature([OfferEntity])],
  providers: [
    {
      provide: OffersRepository,
      useFactory: (repo: Repository<OfferEntity>) =>
        new TypeormOffersRepository(repo),
      inject: [getRepositoryToken(OfferEntity)],
    },
  ],
  exports: [OffersRepository],
})
export class TypeormOffersModule {}
