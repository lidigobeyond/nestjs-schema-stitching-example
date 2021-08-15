import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class CreateFoxInput {
  @Field(() => String, {
    description: '이름',
  })
  name: string;

  @Field(() => Int, {
    description: '나이',
  })
  age: number;
}
