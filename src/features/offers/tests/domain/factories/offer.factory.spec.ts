import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { OfferFactory } from '../../../domain/factories/offers.factory.js';
import { OfferCreatedEvent } from '../../../domain/events/offer-created.event.js';

describe('OfferFactory', () => {
  const mockUuid = '00000000-0000-0000-0000-000000000001';

  it('should build aggregate and emit OfferCreatedEvent', () => {
    const offer = OfferFactory.createNew({
      title: 'Pro Plan',
      priceCents: 1999,
    });

    assert.equal(offer.id, mockUuid, 'should set generated UUID as id');
    assert.equal(offer.title, 'Pro Plan');
    assert.equal(offer.price.amount, 1999, 'should wrap price in Price VO');

    const events = offer.getDomainEvents();
    assert.equal(events.length, 1, 'should emit exactly one event');
    assert.ok(
      events[0] instanceof OfferCreatedEvent,
      'event type should match',
    );
    assert.equal(
      events[0].offerId,
      mockUuid,
      'event payload should contain offer id',
    );
  });

  it('should restore aggregate without emitting events', () => {
    const offer = OfferFactory.rehydrate({
      id: 'rehydrated-id',
      title: 'Legacy',
      priceCents: 2500,
    });

    assert.equal(offer.id, 'rehydrated-id');
    assert.equal(offer.title, 'Legacy');
    assert.equal(offer.price.amount, 2500);
    assert.equal(
      offer.getDomainEvents().length,
      0,
      'should not emit events on rehydrate',
    );
  });
});
