import { Field, ID, ObjectType } from '@nestjs/graphql';
import { OfferItemType } from './offer-item.type';

@ObjectType('Offer')
export class OfferType {
  @Field(() => ID)
  id!: string;

  @Field()
  title!: string;

  @Field(() => [OfferItemType], { nullable: true })
  items?: OfferItemType[];
}
