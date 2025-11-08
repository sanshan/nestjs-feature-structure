import { Provider } from '@nestjs/common';
import { OffersRepository } from '../../../application/ports/offers.repository';
import { TypeormOffersRepository } from './repositories/typeorm-offers.repository';
import { OfferEntity } from './entities/offer.entity';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

export const OFFER_REPOSITORY_PROVIDER: Provider = {
  provide: OffersRepository,
  useFactory: (repository: Repository<OfferEntity>) =>
    new TypeormOffersRepository(repository),
  inject: [getRepositoryToken(OfferEntity)],
};
