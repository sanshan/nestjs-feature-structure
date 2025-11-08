import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { GetOfferQuery } from './get-offer.query';
import { OffersRepository } from '../../ports/offers.repository';

@QueryHandler(GetOfferQuery)
export class GetOfferHandler implements IQueryHandler<GetOfferQuery> {
  constructor(private readonly repository: OffersRepository) {}

  async execute(query: GetOfferQuery) {
    return this.repository.findByIdOrFail(query.id);
  }
}
