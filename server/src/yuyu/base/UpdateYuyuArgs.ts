/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { YuyuWhereUniqueInput } from "./YuyuWhereUniqueInput";
import { YuyuUpdateInput } from "./YuyuUpdateInput";

@ArgsType()
class UpdateYuyuArgs {
  @Field(() => YuyuWhereUniqueInput, { nullable: false })
  where!: YuyuWhereUniqueInput;
  @Field(() => YuyuUpdateInput, { nullable: false })
  data!: YuyuUpdateInput;
}

export { UpdateYuyuArgs as UpdateYuyuArgs };