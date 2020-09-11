import { Field, ObjectType } from "type-graphql";
import {
  BaseEntity,
  Column,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

@ObjectType()
@Entity()
export class Item extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id!: number;

  @Field()
  @Column()
  title!: string;

  @Field()
  @Column()
  description!: string;

  @Field()
  @Column({ type: "int" })
  price!: number;

  @Field({ defaultValue: null })
  @Column({ nullable: true })
  image!: string;

  @Field({ defaultValue: null })
  @Column({ nullable: true })
  largeImage!: string;

  //   @Field()
  //   @ManyToOne(() => User, (user) => user.id)
  //   user!: User;

  @Field(() => String)
  @UpdateDateColumn()
  createdAt: Date;

  @Field(() => String)
  @UpdateDateColumn()
  updatedAt: Date;
}
