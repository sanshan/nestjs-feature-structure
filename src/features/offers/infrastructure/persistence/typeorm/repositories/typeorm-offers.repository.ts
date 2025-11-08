import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { OffersRepository } from '../../../../application/ports/offers.repository';
import { Offer } from '../../../../domain/aggregates/offer.aggregate';
import { OfferEntity } from '../entities/offer.entity';
import { OfferMapper } from '../mappers/offer.mapper';

@Injectable()
export class TypeormOffersRepository implements OffersRepository {
  constructor(private readonly repository: Repository<OfferEntity>) {}

  async save(offer: Offer): Promise<Offer> {
    const entity = OfferMapper.toEntity(offer);
    const saved = await this.repository.save(entity);

    return OfferMapper.toDomain(saved);
  }

  async findByIdOrFail(id: string): Promise<Offer> {
    const entity = await this.repository.findOne({ where: { id } });
    if (!entity) {
      throw new Error(`Offer not found: ${id}`);
    }

    return OfferMapper.toDomain(entity);
  }
}
