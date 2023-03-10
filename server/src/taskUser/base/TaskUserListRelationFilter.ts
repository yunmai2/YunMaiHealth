/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { TaskUserWhereInput } from "./TaskUserWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class TaskUserListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => TaskUserWhereInput,
  })
  @ValidateNested()
  @Type(() => TaskUserWhereInput)
  @IsOptional()
  @Field(() => TaskUserWhereInput, {
    nullable: true,
  })
  every?: TaskUserWhereInput;

  @ApiProperty({
    required: false,
    type: () => TaskUserWhereInput,
  })
  @ValidateNested()
  @Type(() => TaskUserWhereInput)
  @IsOptional()
  @Field(() => TaskUserWhereInput, {
    nullable: true,
  })
  some?: TaskUserWhereInput;

  @ApiProperty({
    required: false,
    type: () => TaskUserWhereInput,
  })
  @ValidateNested()
  @Type(() => TaskUserWhereInput)
  @IsOptional()
  @Field(() => TaskUserWhereInput, {
    nullable: true,
  })
  none?: TaskUserWhereInput;
}
export { TaskUserListRelationFilter as TaskUserListRelationFilter };
