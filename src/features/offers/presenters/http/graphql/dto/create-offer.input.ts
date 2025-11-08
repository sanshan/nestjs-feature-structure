import { Field, InputType, Int } from '@nestjs/graphql';
import { IsInt, IsString, Length, Min } from 'class-validator';

@InputType()
export class CreateOfferInput {
  @Field()
  @IsString()
  @Length(1, 255)
  title!: string;

  @Field(() => Int)
  @IsInt()
  @Min(0)
  priceCents!: number;
}
