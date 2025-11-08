import { Injectable, Logger } from '@nestjs/common';
import { ofType, Saga } from '@nestjs/cqrs';
import { catchError, filter, from, map, mergeMap, Observable, of } from 'rxjs';
import { OfferCreatedEvent } from '../../domain/events/offer-created.event';
import { NotificationRecipientPort } from '../ports/notification-recipient.port';
import { SendOfferCreatedEmailCommand } from '../commands/send-offer-created-email/send-offer-created-email.command';

@Injectable()
export class OffersSaga {
  private readonly logger = new Logger(OffersSaga.name);

  constructor(private readonly recipients: NotificationRecipientPort) {}

  @Saga()
  offerCreated = (
    events$: Observable<unknown>,
  ): Observable<SendOfferCreatedEmailCommand> => {
    return events$.pipe(
      ofType(OfferCreatedEvent),
      mergeMap((event) =>
        from(this.recipients.forOffer(event.offerId)).pipe(
          map((to) =>
            to ? new SendOfferCreatedEmailCommand(event.offerId, to) : null,
          ),
          catchError((err) => {
            this.logger.error(
              `Failed to resolve recipient for offer ${event.offerId}: ${JSON.stringify(err)}`,
            );
            return of(null);
          }),
        ),
      ),
      filter((cmd): cmd is SendOfferCreatedEmailCommand => !!cmd),
    );
  };
}
