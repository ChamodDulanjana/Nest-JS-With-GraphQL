import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateUserInput {

  @Field(() => Int, { description: 'Example field (placeholder)' })
  id: number;

  @Field(() => String)
  email: string;

  @Field(() => Int)
  age: number;

  @Field(() => Boolean)
  isActive: boolean;
}
