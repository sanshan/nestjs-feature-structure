import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { SendOfferCreatedEmailCommand } from './send-offer-created-email.command';
import { OffersRepository } from '../../ports/offers.repository';
import { EmailSenderPort } from '../../ports/email-sender.port';

@CommandHandler(SendOfferCreatedEmailCommand)
export class SendOfferCreatedEmailHandler
  implements ICommandHandler<SendOfferCreatedEmailCommand>
{
  constructor(
    private readonly offers: OffersRepository,
    private readonly emails: EmailSenderPort,
  ) {}

  async execute(cmd: SendOfferCreatedEmailCommand): Promise<void> {
    const offer = await this.offers.findByIdOrFail(cmd.offerId);

    await this.emails.send(
      cmd.to,
      `Offer created: ${offer.title}`,
      `Offer #${offer.id} successfully created with price ${offer.price.amount} cents.`,
    );
  }
}
