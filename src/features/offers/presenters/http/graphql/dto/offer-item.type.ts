import { Field, ID, Int, ObjectType } from '@nestjs/graphql';

@ObjectType('OfferItem')
export class OfferItemType {
  @Field(() => ID)
  id!: string;

  @Field()
  name!: string;

  @Field(() => Int)
  quantity!: number;

  @Field(() => Number, { description: 'Price in minor units (e.g. cents)' })
  priceMinor!: number;
}
