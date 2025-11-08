import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { CreateOfferCommand } from './create-offer.command';
import { OffersRepository } from '../../ports/offers.repository';
import { DomainEventsPublisher } from '../../../../../common/application/events/domain-events.publisher';
import { OfferFactory } from '../../../domain/factories/offers.factory';
import { Offer } from '../../../domain/aggregates/offer.aggregate';

@CommandHandler(CreateOfferCommand)
export class CreateOfferHandler implements ICommandHandler<CreateOfferCommand> {
  constructor(
    private readonly repository: OffersRepository,
    private readonly events: DomainEventsPublisher,
  ) {}

  async execute(command: CreateOfferCommand): Promise<Offer> {
    const offer = OfferFactory.createNew({
      title: command.title,
      priceCents: command.priceCents,
    });

    const saved = await this.repository.save(offer);

    this.events.publishAll(offer.pullDomainEvents());

    return saved;
  }
}
