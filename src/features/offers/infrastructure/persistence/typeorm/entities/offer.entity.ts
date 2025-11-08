import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('offers')
export class OfferEntity {
  @PrimaryColumn('uuid')
  id!: string;

  @Column({ type: 'varchar', length: 255 })
  title!: string;

  @Column({ type: 'integer', name: 'price_cents' })
  priceCents!: number;
}
