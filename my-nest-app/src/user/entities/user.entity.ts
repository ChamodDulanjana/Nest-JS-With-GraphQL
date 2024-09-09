import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType() // GraphQL decorator
@Entity() // TypeORM decorator
export class User {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  @PrimaryGeneratedColumn()
  id: number;

  @Field(() => String)
  @Column({ unique: true })
  email: string;

  @Field(() => Int)
  @Column({ nullable: true })
  age: number;

  @Field(() => Boolean)
  @Column({ default: false })
  isActive: boolean;
}
