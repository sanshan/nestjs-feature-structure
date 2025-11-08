import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { OfferType } from '../dto/offer.type';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { GetOfferArgs } from '../dto/offer.args';
import { GetOfferQuery } from '../../../../application/queries/get-offer/get-offer.query';
import { OfferGraphqlMapper } from '../mappers/offer.mapper';
import { OfferItemType } from '../dto/offer-item.type';
import { OfferItemsLoader } from '../data-loaders/offer-items.loader';
import { CreateOfferCommand } from '../../../../application/commands/create-offer/create-offer.command';
import { CreateOfferInput } from '../dto/create-offer.input';

@Resolver(() => OfferType)
export class OfferResolver {
  constructor(
    private readonly queryBus: QueryBus,
    private readonly commandBus: CommandBus,
    private readonly offerItemsLoader: OfferItemsLoader,
  ) {}

  @Query(() => OfferType, { name: 'offer', nullable: true })
  async offer(@Args() { id }: GetOfferArgs): Promise<OfferType> {
    const offer = await this.queryBus.execute(new GetOfferQuery(id));

    return OfferGraphqlMapper.toDto(offer);
  }

  @Mutation(() => OfferType, { name: 'createOffer' })
  async createOffer(
    @Args('input') input: CreateOfferInput,
  ): Promise<OfferType> {
    const created = await this.commandBus.execute(
      new CreateOfferCommand(input.title, input.priceCents),
    );

    return OfferGraphqlMapper.toDto(created);
  }

  @ResolveField('items', () => [OfferItemType], { nullable: true })
  async items(@Parent() parent: OfferType) {
    return this.offerItemsLoader.load(parent.id);
  }
}
