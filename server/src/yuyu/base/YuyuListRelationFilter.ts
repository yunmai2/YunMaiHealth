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
import { YuyuWhereInput } from "./YuyuWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class YuyuListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => YuyuWhereInput,
  })
  @ValidateNested()
  @Type(() => YuyuWhereInput)
  @IsOptional()
  @Field(() => YuyuWhereInput, {
    nullable: true,
  })
  every?: YuyuWhereInput;

  @ApiProperty({
    required: false,
    type: () => YuyuWhereInput,
  })
  @ValidateNested()
  @Type(() => YuyuWhereInput)
  @IsOptional()
  @Field(() => YuyuWhereInput, {
    nullable: true,
  })
  some?: YuyuWhereInput;

  @ApiProperty({
    required: false,
    type: () => YuyuWhereInput,
  })
  @ValidateNested()
  @Type(() => YuyuWhereInput)
  @IsOptional()
  @Field(() => YuyuWhereInput, {
    nullable: true,
  })
  none?: YuyuWhereInput;
}
export { YuyuListRelationFilter as YuyuListRelationFilter };