import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class User {

  @Field(() => Int, { description: 'Example field (placeholder)' })
  id: number;

  @Field(() => String)
  email: string;

  @Field(() => Int)
  age: number;

  @Field(() => Boolean)
  isActive: boolean;
}
